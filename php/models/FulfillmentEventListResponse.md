[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventListResponse

A page of `FulfillmentEvent` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/FulfillmentEventListResponse.md#fulfillmenteventlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FulfillmentEventListResponse.data[]

An action recorded during an order's fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Required | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `created_at` | Required | string | Timeline entry creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_status` | Optional | string | Subject status after the recorded transition. Values: [23 declared values](FulfillmentEventInput.md#fulfillmenteventinput-current_status-values). |
| `custom_details` | Optional | Map of string | Free-form details attached to the event. |
| `event_type` | Required | string | The delivery or fulfillment event recorded by this entry. Values: [11 declared values](#fulfillmenteventlistresponsedata-event_type-values). |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. Example: `"warehouse-1842"`. |
| `external_status` | Optional | string | Status supplied by that integration before mapping to Flint's public status. |
| `external_system` | Optional | string | Integration that supplied the event. |
| `fulfillment_event_id` | Required | string | Unique identifier for this fulfillment event, prefixed `fev_`. Example: `"fev_01KEZF7C002XK9D7X3239ERT51"`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the event belongs to. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. |
| `message` | Optional | string | Human-readable text describing the event. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Required | string | ID of the order the fulfillment belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `package_id` | Optional | string | ID of the package the event is attached to. Absent when it isn't attached to a package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `previous_status` | Optional | string | Subject status before the recorded transition. Values: [23 declared values](FulfillmentEventInput.md#fulfillmenteventinput-current_status-values). |
| `quantity_effect` | Optional | string | How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Values: `"preserve"`, `"fulfill"`, `"release"`. |
| `reason` | Optional | string | Why the fulfillment was paused or an appointment was missed, when the transition recorded a reason. Values: [12 declared values](FulfillmentEventInput.md#fulfillmenteventinput-reason-values). |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `received_at` | Optional | string | Flint receive timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `shipment_id` | Optional | string | ID of the shipment the event is attached to. Absent when it isn't attached to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `subject_type` | Required | string | Which resource current_status and previous_status describe. - `fulfillment`: The status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named by shipment_id. - `package`: The status belongs to the package named by package_id. Values: `"fulfillment"`, `"shipment"`, `"package"`. |

#### FulfillmentEventListResponse.data[] event_type values

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

### FulfillmentEventListResponse.data[].order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### FulfillmentEventListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

