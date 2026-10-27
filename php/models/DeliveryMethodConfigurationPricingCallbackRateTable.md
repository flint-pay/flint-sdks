[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallbackRateTable

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of ([DeliveryMethodConfigurationPricingCallbackRateTableRatesItem](../models/DeliveryMethodConfigurationPricingCallbackRateTableRatesItem.md#deliverymethodconfigurationpricingcallbackratetableratesitem) and object) |  |
| `unmatched_behavior` | Required | string | Values: `"unavailable"`. |

