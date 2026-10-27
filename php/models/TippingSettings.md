[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TippingSettings

Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_tip_enabled` | Optional | boolean | Whether buyers can enter a custom tip amount. |
| `default_enabled` | Optional | boolean |  |
| `default_smart_tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Replaced as a whole: send every field you want to keep. The preselected fixed tip. Its amount and currency must match one of the effective smart_tip_money_options. Null means no preselection is set; effective settings use Flint's default. `default_smart_tip_money`: [declared alternatives](../models/SettingsGetEffectiveResponse200.md#settingsgeteffectiveresponse200datatippingdefault_smart_tip_money). |
| `default_tip_percent` | Required | number or null | The preselected tip percent, from 1 through 100 with at most four decimal places. It must match one of the effective tip_percent_options. Null means no preselection is set; effective settings use Flint's default. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `smart_tip_money_options` | Optional | Array of [TippingSettingsSmartTipMoneyOptionsItem](../models/TippingSettingsSmartTipMoneyOptionsItem.md#tippingsettingssmarttipmoneyoptionsitem) | minItems: `3`. maxItems: `3`. Items: Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `smart_tips_enabled` | Optional | boolean | Whether checkout offers fixed tip amounts instead of tip percentages. |
| `tip_percent_options` | Optional | Array of number | Three tip percents to offer, each from 1 through 100 with at most four decimal places. minItems: `3`. maxItems: `3`. Items: minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |

### TippingSettings.default_smart_tip_money

Declared alternatives: [SettingsGetEffectiveResponse200.data.tipping.default_smart_tip_money](../models/SettingsGetEffectiveResponse200.md#settingsgeteffectiveresponse200datatippingdefault_smart_tip_money).

