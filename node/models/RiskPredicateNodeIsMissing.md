[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeIsMissing







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"is_missing"`. |

### RiskPredicateNodeIsMissing variant 1: `operator` = `"is_missing"`

anyOf Is missing: Declared schema RiskPredicateNodeIsMissing. The `Is missing` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeIsMissing variant 2: `operator` = `"is_missing"`

anyOf Is missing: Declared schema RiskPredicateNodeIsMissingRequest. The `Is missing` variant of `RiskPredicateNode`..

No additional constraints.

