[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInList

The `In list` variant of `RiskPredicateNode`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | minLength: `1`. maxLength: `280`. |
| `list_alias` | Required | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |
| `operator` | Required | string | Values: `"in_list"`. |

