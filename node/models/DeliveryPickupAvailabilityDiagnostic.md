[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityDiagnostic

A merchant-only diagnostic about a configured pickup location that was left out of the results or cannot supply the order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason a configured pickup location was left out of the results or cannot supply the order. - `pickup_location_inactive`: The Location is inactive, so it was left out. - `pickup_location_geography_unavailable`: The Location has no usable published geography, so it was left out. - `pickup_location_inventory_unavailable`: The Location does not allocate inventory, so it cannot supply the order's tracked items. It is listed with an unavailable outcome. Items without tracked inventory need no allocation. - `pickup_location_dependency_failure`: Flint could not resolve the configured Location. Values: [4 declared values](#deliverypickupavailabilitydiagnostic-code-values). |
| `diagnostic_id` | Required | string | ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. |
| `location_id` | Required | string | ID of the Location that was evaluated. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `occurred_at` | Required | string | Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outcome` | Required | string | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"cannot_calculate"`. |
| `recommended_action` | Required | string | What the merchant can do to get an option. Values: `"review_configuration"`, `"retry"`. |
| `retryable` | Required | boolean | Whether trying again later can succeed. |
| `scope` | Required | string | What the diagnostic is about. Values: `"location"`. |
| `summary` | Required | string | Plain-language explanation for the merchant. |

#### DeliveryPickupAvailabilityDiagnostic code values

- `"pickup_location_inactive"`
- `"pickup_location_geography_unavailable"`
- `"pickup_location_inventory_unavailable"`
- `"pickup_location_dependency_failure"`

