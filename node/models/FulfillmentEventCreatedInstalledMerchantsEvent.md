[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventCreatedInstalledMerchantsEvent

The `fulfillment_event.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/FulfillmentEventCreatedInstalledMerchantsEvent.md#fulfillmenteventcreatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"fulfillment_event.created"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### FulfillmentEventCreatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/FulfillmentEventCreatedInstalledMerchantsEvent.md#fulfillmenteventcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### FulfillmentEventCreatedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Required | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `created_at` | Required | string | Timeline entry creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_status` | Optional | string | Subject status after the recorded transition. Values: [23 declared values](FulfillmentEvent.md#fulfillmentevent-current_status-values). |
| `custom_details` | Optional | Map of string | Free-form details attached to the event. |
| `event_type` | Required | string | The delivery or fulfillment event recorded by this entry. Values: [11 declared values](#fulfillmenteventcreatedinstalledmerchantseventdataobject-event_type-values). |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. Example: `"warehouse-1842"`. |
| `external_status` | Optional | string | Status supplied by that integration before mapping to Flint's public status. |
| `external_system` | Optional | string | Integration that supplied the event. |
| `fulfillment_event_id` | Required | string | Unique identifier for this fulfillment event, prefixed `fev_`. Example: `"fev_01KEZF7C002XK9D7X3239ERT51"`. |
| `fulfillment_id` | Required | string | ID of the fulfillment the event belongs to. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `location_description` | Optional | string | Where the event happened, such as `Louisville, KY`. |
| `message` | Optional | string | Human-readable text describing the event. |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | ID of the order the fulfillment belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `package_id` | Optional | string | ID of the package the event is attached to. Absent when it isn't attached to a package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `previous_status` | Optional | string | Subject status before the recorded transition. Values: [23 declared values](FulfillmentEvent.md#fulfillmentevent-current_status-values). |
| `quantity_effect` | Optional | string | How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Values: `"preserve"`, `"fulfill"`, `"release"`. |
| `reason` | Optional | string | Why the fulfillment was paused or an appointment was missed, when the transition recorded a reason. Values: [12 declared values](FulfillmentEvent.md#fulfillmentevent-reason-values). |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `received_at` | Optional | string | Flint receive timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `shipment_id` | Optional | string | ID of the shipment the event is attached to. Absent when it isn't attached to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `subject_type` | Required | string | Which resource current_status and previous_status describe. - `fulfillment`: The status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named by shipment_id. - `package`: The status belongs to the package named by package_id. Values: `"fulfillment"`, `"shipment"`, `"package"`. |

#### FulfillmentEventCreatedInstalledMerchantsEvent.data.object event_type values

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

### FulfillmentEventCreatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

