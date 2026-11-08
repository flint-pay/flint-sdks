[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFulfillmentEvent

An action recorded during an order's fulfillment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_status` | Optional | string | Status of the same subject immediately after this event, using the vocabulary selected by subject_type. This is the status recorded at occurred_at, which may differ from the resource's current status. Omitted when the event does not record a status change. Values: [22 declared values](BuyerFulfillmentEventInput.md#buyerfulfillmenteventinput-current_status-values). |
| `event_type` | Required | string | The delivery or fulfillment event recorded by this entry. - `carrier_scan`: A carrier reported a tracking observation. - `status_changed`: The fulfillment, shipment, or package changed status; current_status and previous_status identify the transition and subject_type identifies the resource. - `shipped`: The package was handed to the carrier. - `in_transit`: The package is moving through the carrier's network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The package reached its destination. - `delivery_attempted`: The carrier attempted delivery without completing it. - `tracking_updated`: The package's tracking information changed. - `exception`: A delivery problem interrupted the package's progress. - `returned`: The package was returned to its sender. - `custom`: The merchant or its integration recorded a custom observation. Values: [11 declared values](#buyerfulfillmentevent-event_type-values). |
| `fulfillment_event_id` | Required | string | Unique identifier for this fulfillment event, prefixed `fev_`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the event belongs to. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order_id` | Required | string | ID of the order the fulfillment belongs to. |
| `package_id` | Optional | string | ID of the package the event is attached to. Absent when it isn't attached to a package. |
| `previous_status` | Optional | string | Status of the subject immediately before this event. subject_type selects the fulfillment, shipment, or package status vocabulary; fulfillment_id, shipment_id, or package_id identifies that resource. Omitted when the event does not record a status change. Values: [22 declared values](BuyerFulfillmentEventInput.md#buyerfulfillmenteventinput-current_status-values). |
| `shipment_id` | Optional | string | ID of the shipment the event is attached to. Absent when it isn't attached to a shipment. |

#### BuyerFulfillmentEvent event_type values

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

