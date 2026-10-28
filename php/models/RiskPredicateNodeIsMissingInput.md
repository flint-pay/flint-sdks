[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeIsMissingInput

The `Is missing` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | Values: `"is_missing"`. |

