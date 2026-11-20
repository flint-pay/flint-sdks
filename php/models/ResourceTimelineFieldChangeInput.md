[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineFieldChangeInput

The recorded before and after values of one field.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `after` | Required | null or string or [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value after the change. Null when the field was unset. `after`: [declared alternatives](../models/ResourceTimelineFieldChangeInput.md#resourcetimelinefieldchangeinputafter). |
| `before` | Required | null or string or [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value before the change. Null when the field was unset. `before`: [declared alternatives](../models/ResourceTimelineFieldChangeInput.md#resourcetimelinefieldchangeinputbefore). |
| `field` | Required | string | Dot-separated field path on the resource described by this event. |

### ResourceTimelineFieldChangeInput.after

Value after the change. Null when the field was unset.

Field definitions: [shared fields](PromotionRuleValueInput.md#promotionrulevalueinput).

### ResourceTimelineFieldChangeInput.after variant 1

oneOf variant 1.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value after the change. Null when the field was unset. 

### ResourceTimelineFieldChangeInput.after variant 2

oneOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: string. Value after the change. Null when the field was unset. 

### ResourceTimelineFieldChangeInput.after variant 3

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### ResourceTimelineFieldChangeInput.before

Value before the change. Null when the field was unset.

Field definitions: [shared fields](PromotionRuleValueInput.md#promotionrulevalueinput).

### ResourceTimelineFieldChangeInput.before variant 1

oneOf variant 1.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value before the change. Null when the field was unset. 

### ResourceTimelineFieldChangeInput.before variant 2

oneOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: string. Value before the change. Null when the field was unset. 

### ResourceTimelineFieldChangeInput.before variant 3

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

