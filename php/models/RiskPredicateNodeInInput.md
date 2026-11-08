[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInInput

The `In` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. minLength: `1`. maxLength: `280`. |
| `operator` | Required | string | How the attribute is compared. Values: `"in"`. |
| `values` | Required | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-6values). |

### RiskPredicateNodeInInput.values[]

Declared alternatives: [CreateRiskPreviewRequestInput variant 1.predicate variant 6.values[]](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-6values).

