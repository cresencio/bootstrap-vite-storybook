# Sample Contract: Data Processing Pipeline

**Purpose**: This sample contract demonstrates how to define a clear interface for a data processing task in the Context eXchange System.

## Contract Metadata

- **Name**: data-processing-pipeline
- **Version**: 1.0.0
- **Type**: ETL (Extract, Transform, Load)
- **Created**: 2025-01-XX
- **Status**: Template

## Description

This contract defines the expectations and interface for a data processing pipeline that extracts data from a source, transforms it according to business rules, and loads it into a destination.

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| data_source | path/URL | Yes | Location of input data |
| format | string | Yes | Input format (json, csv, xml) |
| transformation_rules | path | Yes | Path to transformation ruleset |
| validation_schema | path | No | Schema for input validation |

## Outputs

| Artifact | Type | Location | Description |
|----------|------|----------|-------------|
| processed_data | file | outbox/ | Transformed data output |
| processing_report | markdown | outbox/ | Summary of processing results |
| error_log | text | outbox/ | Any errors encountered |
| metrics | json | outbox/ | Performance and quality metrics |

## Execution Requirements

- **Runtime**: Python 3.8+ or equivalent
- **Memory**: 2GB minimum
- **Dependencies**: Listed in pack manifest
- **Timeout**: 30 minutes default

## Success Criteria

1. All input data successfully validated
2. Transformations applied without errors
3. Output data passes validation schema
4. Processing report generated
5. Metrics indicate acceptable data quality (>95% valid records)

## Error Handling

- Invalid input format → Log error, terminate with exit code 1
- Transformation failure → Log error, continue with next record
- Validation failure → Log warning, mark record for review
- Timeout exceeded → Save partial results, log timeout event

## Usage Example

```yaml
# pack-manifest.yml
contract: data-processing-pipeline
version: 1.0.0
inputs:
  data_source: "data/raw/sales_2025.csv"
  format: "csv"
  transformation_rules: "rules/sales_transform.yml"
outputs:
  processed_data: "outbox/sales_processed.json"
  processing_report: "outbox/sales_report.md"
```

## Notes

- This is a template contract for demonstration purposes
- Customize inputs, outputs, and criteria for your specific use case
- Ensure all team members review and approve contract before execution
- Version contracts when making breaking changes
