[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineFieldChange

The recorded before and after values of one field.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `after` | Required | null or string or [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value after the change. Null when the field was unset. `after`: [declared alternatives](../models/ResourceTimelineFieldChange.md#resourcetimelinefieldchangeafter). |
| `before` | Required | null or string or [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value before the change. Null when the field was unset. `before`: [declared alternatives](../models/ResourceTimelineFieldChange.md#resourcetimelinefieldchangebefore). |
| `field` | Required | string | Dot-separated field path on the resource described by this event. |

### ResourceTimelineFieldChange.after

Value after the change. Null when the field was unset.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### ResourceTimelineFieldChange.after variant 1

oneOf variant 1.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value after the change. Null when the field was unset. 

### ResourceTimelineFieldChange.after variant 2

oneOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: string. Value after the change. Null when the field was unset. 

### ResourceTimelineFieldChange.after variant 3

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### ResourceTimelineFieldChange.before

Value before the change. Null when the field was unset.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### ResourceTimelineFieldChange.before variant 1

oneOf variant 1.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value before the change. Null when the field was unset. 

### ResourceTimelineFieldChange.before variant 2

oneOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: string. Value before the change. Null when the field was unset. 

### ResourceTimelineFieldChange.before variant 3

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

