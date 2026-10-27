[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFulfillmentEventInput

An action recorded during an order's fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_status` | Optional | string | Values: [23 declared values](#buyerfulfillmenteventinput-current_status-values). |
| `event_type` | Required | string | Values: [21 declared values](#buyerfulfillmenteventinput-event_type-values). |
| `fulfillment_event_id` | Required | string |  |
| `fulfillment_id` | Required | string |  |
| `location_description` | Optional | string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order_id` | Required | string |  |
| `package_id` | Optional | string |  |
| `previous_status` | Optional | string | Values: [23 declared values](#buyerfulfillmenteventinput-current_status-values). |
| `shipment_id` | Optional | string |  |

#### BuyerFulfillmentEventInput current_status values

- `"pending"`
- `"on_hold"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`
- `"created"`
- `"shipped"`
- `"in_transit"`
- `"out_for_delivery"`
- `"delivered"`
- `"delivery_attempted"`
- `"exception"`
- `"returned"`
- `"voided"`

#### BuyerFulfillmentEventInput event_type values

- `"carrier_scan"`
- `"status_changed"`
- `"shipped"`
- `"in_transit"`
- `"out_for_delivery"`
- `"delivered"`
- `"delivery_attempted"`
- `"tracking_updated"`
- `"exception"`
- `"returned"`
- `"custom"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"ready"`
- `"dispatched"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"no_show"`

