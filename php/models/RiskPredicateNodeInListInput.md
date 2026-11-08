[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInListInput

The `In list` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `list_alias` | Required | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |
| `operator` | Required | string | How the attribute is compared. Values: `"in_list"`. |

