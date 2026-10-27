[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TippingSettingsPatchInput

Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a preselected tip.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean |  |
| `default_smart_tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. `default_smart_tip_money`: [declared alternatives](../models/TippingSettingsPatchInput.md#tippingsettingspatchinputdefault_smart_tip_money). |
| `default_tip_percent` | Optional | number or null | Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. `smart_tip_money_options[]`: [field definitions](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### TippingSettingsPatchInput.default_smart_tip_money

Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered.

Field definitions: [shared fields](TippingSettingsInput.md#tippingsettingsinputdefault_smart_tip_money).

### TippingSettingsPatchInput.default_smart_tip_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### TippingSettingsPatchInput.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. 

### TippingSettingsPatchInput.smart_tip_money_options[]

Field definitions: [CreateGiftCardLoadRequestInput.value_money](../models/CreateGiftCardLoadRequestInput.md#creategiftcardloadrequestinputvalue_money).

