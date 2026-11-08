[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeIsMissingInput

The `Is missing` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"is_missing"`. |

