[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TippingSettingsInput

Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean |  |
| `default_smart_tip_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. `default_smart_tip_money`: [declared alternatives](../models/TippingSettingsInput.md#tippingsettingsinputdefault_smart_tip_money). |
| `default_tip_percent` | Required | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. It must match one of the effective tip_percent_options. Null means no preselection is set; effective settings use Flint's default. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. `smart_tip_money_options[]`: [field definitions](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### TippingSettingsInput.default_smart_tip_money

Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. |
| `currency` | Conditional | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |

### TippingSettingsInput.default_smart_tip_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### TippingSettingsInput.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. 

### TippingSettingsInput.smart_tip_money_options[]

Field definitions: [CreateGiftCardLoadRequestInput.value_money](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money).

