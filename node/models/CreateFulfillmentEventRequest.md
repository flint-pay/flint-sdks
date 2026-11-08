[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateFulfillmentEventRequest

The request body for: Create fulfillment event.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_details` | Optional | Map of string | Free-form details attached to the event. Map values: minLength: `1`. |
| `event_type` | Required | string | What kind of event this records. Values: `"carrier_scan"`, `"custom"`. |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. Flint records a repeated pair of `external_system` and `external_event_id` once. minLength: `1`. Example: `"warehouse-1842"`. |
| `external_status` | Optional | string | Status supplied by that integration. minLength: `1`. |
| `external_system` | Optional | string | Integration that supplied the event. minLength: `1`. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. minLength: `1`. |
| `message` | Optional | string | Human-readable text describing the event. minLength: `1`. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `package_id` | Optional | string | Nested package associated with this observational event. Flint resolves and validates its shipment and fulfillment ownership. minLength: `1`. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `shipment_id` | Optional | string | Nested shipment associated with this observational event. Flint validates that it belongs to the fulfillment in the path. minLength: `1`. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |

