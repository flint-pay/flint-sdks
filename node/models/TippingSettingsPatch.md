[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TippingSettingsPatch

Tipping settings to change when updating settings. Omit a field to keep it; send null to clear a preselected tip. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean |  |
| `default_smart_tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. `default_smart_tip_money`: [declared alternatives](../models/TippingSettingsPatch.md#tippingsettingspatchdefault_smart_tip_money). |
| `default_tip_percent` | Optional | number or null | Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. `smart_tip_money_options[]`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### TippingSettingsPatch.default_smart_tip_money

Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered.

Field definitions: [shared fields](TippingSettings.md#tippingsettingsdefault_smart_tip_money).

### TippingSettingsPatch.default_smart_tip_money variant 1

anyOf variant 1.

- Required: `amount`, `currency`.

### TippingSettingsPatch.default_smart_tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Replaced as a whole: send every field you want to keep. Omit to preserve the current value. Send null to clear the preselection and use Flint's default. When replacing presets, explicitly replace or clear a preselection that is no longer offered. 

### TippingSettingsPatch.smart_tip_money_options[]

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

