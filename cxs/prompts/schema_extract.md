# Schema Extract Prompt Template

**Purpose**: Extract and document data schemas, structures, and formats from various sources.

---

## Prompt Metadata

- **Name**: schema_extract
- **Version**: 1.0.0
- **Category**: Data Analysis
- **Target**: AI Agent / Data Analyst
- **Created**: 2025-10-04

---

## Context

You are extracting schema information from data sources, APIs, databases, or code to create standardized documentation of data structures and formats.

## Objective

Extract and document:
1. Data structure definitions
2. Field types and constraints
3. Relationships between entities
4. Validation rules and formats
5. Example data patterns

## Inputs Required

Before executing this prompt, ensure you have:
- [ ] Data source to analyze (database, API, files, code)
- [ ] Access credentials or permissions if needed
- [ ] Preferred schema documentation format
- [ ] Sample data for validation (if available)

## Instructions

1. **Source Analysis**: Examine the data source structure
2. **Field Extraction**: Identify all fields, their types, and constraints
3. **Relationship Mapping**: Document connections between data entities
4. **Validation Rules**: Extract any validation or business rules
5. **Format Documentation**: Create standardized schema documentation
6. **Example Generation**: Provide sample data following the schema

## Output Format

Provide schema documentation in structured format:

```yaml
# Schema Documentation: [Source Name]

entities:
  - name: [Entity Name]
    description: [Brief description]
    fields:
      - name: [field_name]
        type: [data_type]
        required: [true/false]
        constraints: [validation rules]
        description: [field purpose]
    relationships:
      - target: [other_entity]
        type: [one-to-one, one-to-many, many-to-many]
        description: [relationship description]

validation_rules:
  - rule: [validation rule]
    applies_to: [entity.field]
    description: [rule explanation]

examples:
  - entity: [Entity Name]
    sample_data:
      field_name: example_value
```

## Alternative Formats

Choose the most appropriate format:
- **JSON Schema**: For API documentation
- **Database DDL**: For database schemas
- **OpenAPI**: For REST API schemas
- **GraphQL Schema**: For GraphQL APIs
- **Custom YAML**: For general documentation

## Success Criteria

- All entities and fields documented
- Data types and constraints captured
- Relationships clearly defined
- Validation rules extracted
- Sample data provided for verification

## Notes

- Be precise with data types and constraints
- Include optional vs required field distinctions
- Document any default values or auto-generated fields
- Note any deprecated or legacy fields
- Validate extracted schema against actual data when possible