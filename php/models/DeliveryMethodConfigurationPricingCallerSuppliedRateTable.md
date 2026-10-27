[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCallerSuppliedRateTable

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of ([DeliveryMethodConfigurationPricingCallerSuppliedRateTableRatesItem](../models/DeliveryMethodConfigurationPricingCallerSuppliedRateTableRatesItem.md#deliverymethodconfigurationpricingcallersuppliedratetableratesitem) and object) |  |
| `unmatched_behavior` | Required | string | Values: `"unavailable"`. |

