[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEvent

An action recorded during an order's fulfillment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Required | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `created_at` | Required | string | Timeline entry creation timestamp. Format: `date-time`. |
| `current_status` | Optional | string | Subject status after the recorded transition. Values: [23 declared values](FulfillmentEventInput.md#fulfillmenteventinput-current_status-values). |
| `custom_details` | Optional | Map of string | Free-form details attached to the event. |
| `event_type` | Required | string | The delivery or fulfillment event recorded by this entry. Values: [11 declared values](#fulfillmentevent-event_type-values). |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. |
| `external_status` | Optional | string | Status supplied by that integration before mapping to Flint's public status. |
| `external_system` | Optional | string | Integration that supplied the event. |
| `fulfillment_event_id` | Required | string | Unique identifier for this fulfillment event, prefixed `fev_`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the event belongs to. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. |
| `message` | Optional | string | Human-readable text describing the event. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | ID of the order the fulfillment belongs to. |
| `package_id` | Optional | string | ID of the package the event is attached to. Absent when it isn't attached to a package. |
| `previous_status` | Optional | string | Subject status before the recorded transition. Values: [23 declared values](FulfillmentEventInput.md#fulfillmenteventinput-current_status-values). |
| `quantity_effect` | Optional | string | How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Values: `"preserve"`, `"fulfill"`, `"release"`. |
| `reason` | Optional | string | Why the fulfillment was paused or an appointment was missed, when the transition recorded a reason. Values: [12 declared values](FulfillmentEventInput.md#fulfillmenteventinput-reason-values). |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `received_at` | Optional | string | Flint receive timestamp. Format: `date-time`. |
| `shipment_id` | Optional | string | ID of the shipment the event is attached to. Absent when it isn't attached to a shipment. |
| `subject_type` | Required | string | Which resource current_status and previous_status describe. - `fulfillment`: The status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named by shipment_id. - `package`: The status belongs to the package named by package_id. Values: `"fulfillment"`, `"shipment"`, `"package"`. |

#### FulfillmentEvent event_type values

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

