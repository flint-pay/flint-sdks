[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFulfillmentEventRequest

The request body for: Create fulfillment event.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_details` | Optional | Map of string | Map values: minLength: `1`. |
| `event_type` | Required | string | Values: `"carrier_scan"`, `"custom"`. |
| `external_event_id` | Optional | string | minLength: `1`. |
| `external_status` | Optional | string | minLength: `1`. |
| `external_system` | Optional | string | minLength: `1`. |
| `location_description` | Optional | string | minLength: `1`. |
| `message` | Optional | string | minLength: `1`. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. minLength: `1`. |
| `package_id` | Optional | string | Nested package associated with this observational event. Flint resolves and validates its shipment and fulfillment ownership. minLength: `1`. |
| `shipment_id` | Optional | string | Nested shipment associated with this observational event. Flint validates that it belongs to the fulfillment in the path. minLength: `1`. |

