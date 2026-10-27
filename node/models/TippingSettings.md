[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TippingSettings

Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean |  |
| `default_smart_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. `default_smart_tip_money`: [declared alternatives](../models/TippingSettings.md#tippingsettingsdefault_smart_tip_money). |
| `default_tip_percent` | Required | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. It must match one of the effective tip_percent_options. Null means no preselection is set; effective settings use Flint's default. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. `smart_tip_money_options[]`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### TippingSettings.default_smart_tip_money

Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. |
| `currency` | Conditional | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### TippingSettings.default_smart_tip_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### TippingSettings.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. 

### TippingSettings.smart_tip_money_options[]

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

