[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityDiagnostic

A merchant-only diagnostic about a configured pickup location that was left out of the results or cannot supply the order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason a configured pickup location was left out of the results or cannot supply the order. - `pickup_location_inactive`: The Location is inactive, so it was left out. - `pickup_location_geography_unavailable`: The Location has no usable published geography, so it was left out. - `pickup_location_inventory_unavailable`: The Location does not allocate inventory, so it cannot supply the order's tracked items. It is listed with an unavailable outcome. Items without tracked inventory need no allocation. - `pickup_location_dependency_failure`: Flint could not resolve the configured Location. Values: [4 declared values](#deliverypickupavailabilitydiagnostic-code-values). |
| `diagnostic_id` | Required | string |  |
| `location_id` | Required | string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `outcome` | Required | string | Values: `"unavailable"`, `"cannot_calculate"`. |
| `recommended_action` | Required | string | Values: `"review_configuration"`, `"retry"`. |
| `retryable` | Required | boolean |  |
| `scope` | Required | string | Values: `"location"`. |
| `summary` | Required | string |  |

#### DeliveryPickupAvailabilityDiagnostic code values

- `"pickup_location_inactive"`
- `"pickup_location_geography_unavailable"`
- `"pickup_location_inventory_unavailable"`
- `"pickup_location_dependency_failure"`

