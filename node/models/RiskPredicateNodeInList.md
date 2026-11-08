[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInList







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `list_alias` | Required | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |
| `operator` | Required | string | How the attribute is compared. Values: `"in_list"`. |

### RiskPredicateNodeInList variant 1: `operator` = `"in_list"`

anyOf In list: Declared schema RiskPredicateNodeInList. The `In list` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeInList variant 2: `operator` = `"in_list"`

anyOf In list: Declared schema RiskPredicateNodeInListRequest. The `In list` variant of `RiskPredicateNode`..

No additional constraints.

