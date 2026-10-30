[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentEventCreatedInstalledMerchantsEventInput

The `fulfillment_event.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/FulfillmentEventCreatedInstalledMerchantsEventInput.md#fulfillmenteventcreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"fulfillment_event.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### FulfillmentEventCreatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [FulfillmentEventInput](../models/FulfillmentEventInput.md#fulfillmenteventinput) | An action recorded during an order's fulfillment. `object`: [field definitions](../models/FulfillmentEventCreatedInstalledMerchantsEventInput.md#fulfillmenteventcreatedinstalledmerchantseventinputdataobject). |

### FulfillmentEventCreatedInstalledMerchantsEventInput.data.object

An action recorded during an order's fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Required | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `created_at` | Optional | string | Timeline entry creation timestamp. Format: `date-time`. |
| `current_status` | Optional | string | Subject status after the recorded transition. Values: [23 declared values](FulfillmentEventInput.md#fulfillmenteventinput-current_status-values). |
| `custom_details` | Optional | Map of string |  |
| `event_type` | Required | string | The delivery or fulfillment event recorded by this entry. Values: [21 declared values](BuyerFulfillmentEventInput.md#buyerfulfillmenteventinput-event_type-values). |
| `external_event_id` | Optional | string | Event identifier assigned by that integration. |
| `external_status` | Optional | string | Status supplied by that integration before mapping to Flint's public status. |
| `external_system` | Optional | string | Integration that supplied the event. |
| `fulfillment_event_id` | Required | string |  |
| `fulfillment_id` | Required | string |  |
| `location_description` | Optional | string |  |
| `message` | Optional | string |  |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string |  |
| `package_id` | Optional | string |  |
| `previous_status` | Optional | string | Subject status before the recorded transition. Values: [23 declared values](FulfillmentEventInput.md#fulfillmenteventinput-current_status-values). |
| `quantity_effect` | Optional | string | How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Values: `"preserve"`, `"fulfill"`, `"release"`. |
| `reason` | Optional | string | Values: [12 declared values](FulfillmentEventInput.md#fulfillmenteventinput-reason-values). |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `received_at` | Optional | string | Flint receive timestamp. Format: `date-time`. |
| `shipment_id` | Optional | string |  |
| `subject_type` | Required | string | Which resource current_status and previous_status describe. - `fulfillment`: The status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named by shipment_id. - `package`: The status belongs to the package named by package_id. Values: `"fulfillment"`, `"shipment"`, `"package"`. |

### FulfillmentEventCreatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

