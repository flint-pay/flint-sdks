[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationPricing

Totals for a choice group that a delivery rate calculation reads.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bases` | Required | Map of integer | Quantity and merchandise subtotals in minor units, keyed by the same base names as tiered pricing bases. Map values: Format: `int64`. |
| `currency` | Required | string | The checkout currency, equal to the request's currency. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `leg_distance_meters` | Required | Array of integer | Straight-line distance in meters from each origin to the destination, in execution leg order. Empty when the address or an origin has no coordinates. Items: Format: `int64`. |
| `total_item_quantity` | Required | integer | Total whole-number units in the choice group; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `total_weight_grams` | Optional | integer | Total weight in grams: each item's variant unit_weight times its quantity, or the unit_weight on a custom line. Omitted when any item in the group has no weight; 0 is a real weight. Format: `int64`. minimum: `0`. |

