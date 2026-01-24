#!/bin/bash

# CXS Validation Script
# Validates that Context eXchange System is properly set up and being used

# Color codes for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
PASS=0
WARN=0
FAIL=0

# Find cxs directory (support running from project root or cxs/tools/)
if [ -d "cxs" ]; then
    CXS_DIR="cxs"
elif [ -d "../.." ] && [ -f "../../cycles/current" ]; then
    CXS_DIR="../.."
else
    echo -e "${RED}❌ Error: Cannot find cxs directory${NC}"
    echo "Run this script from your project root or from cxs/tools/"
    exit 1
fi

echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         CXS Health Check & Validation                 ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to print check result
check() {
    local status=$1
    local message=$2
    local detail=$3

    if [ "$status" = "pass" ]; then
        echo -e "${GREEN}✅ PASS${NC} - $message"
        [ -n "$detail" ] && echo -e "         $detail"
        ((PASS++))
    elif [ "$status" = "warn" ]; then
        echo -e "${YELLOW}⚠️  WARN${NC} - $message"
        [ -n "$detail" ] && echo -e "         $detail"
        ((WARN++))
    else
        echo -e "${RED}❌ FAIL${NC} - $message"
        [ -n "$detail" ] && echo -e "         $detail"
        ((FAIL++))
    fi
}

echo "🔍 Checking Core Structure..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check 1: Core directories exist
REQUIRED_DIRS=("contracts" "packs" "ledger" "cycles" "outbox" "prompts" "project" "archive")
for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$CXS_DIR/$dir" ]; then
        check "pass" "Directory exists: $dir/"
    else
        check "fail" "Missing directory: $dir/" "Run: mkdir -p $CXS_DIR/$dir"
    fi
done

echo ""
echo "🔍 Checking Essential Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check 2: QUICKSTART.md exists
if [ -f "$CXS_DIR/QUICKSTART.md" ]; then
    check "pass" "QUICKSTART.md exists (token-efficient onboarding)"
else
    check "fail" "QUICKSTART.md missing" "Critical for AI agent onboarding"
fi

# Check 3: agents.md exists
if [ -f "$CXS_DIR/agents.md" ]; then
    check "pass" "agents.md exists (reference guide)"
else
    check "warn" "agents.md missing" "Recommended for comprehensive reference"
fi

# Check 4: Contracts exist
CONTRACT_COUNT=$(find "$CXS_DIR/contracts" -name "*.contract" -o -name "*.schema.json" 2>/dev/null | wc -l)
if [ "$CONTRACT_COUNT" -ge 3 ]; then
    check "pass" "Contracts available: $CONTRACT_COUNT"
else
    check "warn" "Only $CONTRACT_COUNT contracts found" "Expected at least 3 (process, analyze, document)"
fi

# Check 5: Prompts exist
PROMPT_COUNT=$(find "$CXS_DIR/prompts" -name "*.md" 2>/dev/null | wc -l)
if [ "$PROMPT_COUNT" -ge 5 ]; then
    check "pass" "Prompt templates available: $PROMPT_COUNT"
else
    check "warn" "Only $PROMPT_COUNT prompts found" "Expected at least 5-7 templates"
fi

echo ""
echo "🔍 Checking Active Usage..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check 6: Current cycle is set
if [ -f "$CXS_DIR/cycles/current" ]; then
    CYCLE_ID=$(cat "$CXS_DIR/cycles/current" | tr -d '\n\r' | tr -d ' ')
    if [ -n "$CYCLE_ID" ]; then
        check "pass" "Current cycle set: $CYCLE_ID"
    else
        check "fail" "cycles/current exists but is empty" "Run: echo 'your-cycle-id' > $CXS_DIR/cycles/current"
    fi
else
    check "fail" "cycles/current missing" "Run: echo 'project-$(date +%Y%m%d)' > $CXS_DIR/cycles/current"
fi

# Check 7: Ledger exists and has entries
if [ -f "$CXS_DIR/ledger/runs.csv" ]; then
    LINE_COUNT=$(wc -l < "$CXS_DIR/ledger/runs.csv" | tr -d ' ')
    if [ "$LINE_COUNT" -gt 1 ]; then
        ENTRY_COUNT=$((LINE_COUNT - 1))
        check "pass" "Ledger has $ENTRY_COUNT logged run(s)"
    elif [ "$LINE_COUNT" -eq 1 ]; then
        check "warn" "Ledger exists but has no entries yet" "Header row only - waiting for first logged run"
    else
        check "fail" "Ledger is empty" "Missing CSV header row"
    fi
else
    check "fail" "ledger/runs.csv missing" "Critical for audit trail"
fi

# Check 8: Context packs created
PACK_COUNT=$(find "$CXS_DIR/packs" -maxdepth 1 -type d -name "pack-*" 2>/dev/null | wc -l)
if [ "$PACK_COUNT" -gt 0 ]; then
    check "pass" "Context packs created: $PACK_COUNT"

    # Check if packs have meta.yaml
    PACKS_WITH_META=$(find "$CXS_DIR/packs" -name "meta.yaml" 2>/dev/null | wc -l)
    if [ "$PACKS_WITH_META" -eq "$PACK_COUNT" ]; then
        check "pass" "All packs have meta.yaml ($PACKS_WITH_META/$PACK_COUNT)"
    else
        check "warn" "Some packs missing meta.yaml ($PACKS_WITH_META/$PACK_COUNT)" "Each pack should have meta.yaml"
    fi
else
    check "warn" "No context packs created yet" "Packs are created during work sessions"
fi

# Check 9: Outputs in outbox
OUTPUT_COUNT=$(find "$CXS_DIR/outbox" -type f 2>/dev/null | wc -l)
if [ "$OUTPUT_COUNT" -gt 0 ]; then
    check "pass" "Outputs in outbox: $OUTPUT_COUNT file(s)"
else
    check "warn" "No outputs in outbox yet" "Artifacts will appear here after work sessions"
fi

# Check 10: CHANGELOG updated
if [ -f "$CXS_DIR/ledger/CHANGELOG_TIMELINE.md" ]; then
    LINE_COUNT=$(wc -l < "$CXS_DIR/ledger/CHANGELOG_TIMELINE.md" | tr -d ' ')
    if [ "$LINE_COUNT" -gt 20 ]; then
        check "pass" "CHANGELOG_TIMELINE.md exists and has content"
    else
        check "warn" "CHANGELOG_TIMELINE.md is minimal" "Update for significant events"
    fi
else
    check "warn" "CHANGELOG_TIMELINE.md missing" "Optional but recommended for tracking milestones"
fi

echo ""
echo "🔍 Checking Configuration..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check 11: Project configs exist
PROJECT_CONFIGS=("manifest.yaml" "policies.yaml" "stack_profile.yaml")
PROJECT_CONFIG_COUNT=0
for config in "${PROJECT_CONFIGS[@]}"; do
    if [ -f "$CXS_DIR/project/$config" ]; then
        ((PROJECT_CONFIG_COUNT++))
    fi
done

if [ "$PROJECT_CONFIG_COUNT" -eq 3 ]; then
    check "pass" "Core project configs exist (3/3)"
elif [ "$PROJECT_CONFIG_COUNT" -gt 0 ]; then
    check "warn" "Some project configs exist ($PROJECT_CONFIG_COUNT/3)" "manifest.yaml, policies.yaml, stack_profile.yaml recommended"
else
    check "warn" "No project configs customized yet" "Templates available in project/ directory"
fi

# Check 12: Schemas directory (future MCP compatibility)
if [ -d "$CXS_DIR/schemas" ]; then
    SCHEMA_COUNT=$(find "$CXS_DIR/schemas" -name "*.schema.json" 2>/dev/null | wc -l)
    if [ "$SCHEMA_COUNT" -gt 0 ]; then
        check "pass" "JSON Schemas available: $SCHEMA_COUNT (MCP ready!)"
    else
        check "warn" "schemas/ directory exists but empty" "Future: Add JSON schemas for MCP compatibility"
    fi
else
    check "warn" "schemas/ directory not created yet" "Future: Required for MCP server implementation"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}📊 Validation Summary${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

TOTAL=$((PASS + WARN + FAIL))
SCORE=$((PASS * 100 / TOTAL))

echo -e "${GREEN}✅ Passed: $PASS${NC}"
echo -e "${YELLOW}⚠️  Warnings: $WARN${NC}"
echo -e "${RED}❌ Failed: $FAIL${NC}"
echo ""
echo -e "Overall Health Score: ${BLUE}${SCORE}%${NC}"

if [ "$SCORE" -ge 90 ]; then
    echo -e "${GREEN}🎉 Excellent! CXS is properly configured and actively used.${NC}"
elif [ "$SCORE" -ge 75 ]; then
    echo -e "${YELLOW}✓ Good! CXS is working. Address warnings to improve.${NC}"
elif [ "$SCORE" -ge 50 ]; then
    echo -e "${YELLOW}⚠ Fair. CXS is set up but needs attention. Check failures.${NC}"
else
    echo -e "${RED}⚠ Needs Work. Address critical failures before using CXS.${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Exit code: 0 if no failures, 1 if any failures
if [ "$FAIL" -gt 0 ]; then
    exit 1
else
    exit 0
fi
