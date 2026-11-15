[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallbackRateTable

Rate table pricing settings. Set only when `type` is `rate_table`.

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of ([DeliveryMethodConfigurationPricingCallbackRateTableRatesItem](../models/DeliveryMethodConfigurationPricingCallbackRateTableRatesItem.md#deliverymethodconfigurationpricingcallbackratetableratesitem) and object) | One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: `1`. maxItems: `100`. |
| `unmatched_behavior` | Required | string | What happens when no rate matches. Values: `"unavailable"`. |

