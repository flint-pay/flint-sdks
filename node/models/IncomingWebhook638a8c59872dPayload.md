[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook638a8c59872dPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook638a8c59872dPayload.md#incomingwebhook638a8c59872dpayloaddata). |
| `event_type` | Required | string | Values: `"fulfillment_event.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook638a8c59872dPayload variant 1: `event_type` = `"fulfillment_event.created"`

oneOf variant 1: The `fulfillment_event.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"fulfillment_event.created"`.

### IncomingWebhook638a8c59872dPayload variant 2: `event_type` = `"fulfillment_event.created"`

oneOf variant 2: The `fulfillment_event.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"fulfillment_event.created"`.

### IncomingWebhook638a8c59872dPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [FulfillmentEvent](../models/FulfillmentEvent.md#fulfillmentevent) | An action recorded during an order's fulfillment. `object`: [field definitions](../models/IncomingWebhook638a8c59872dPayload.md#incomingwebhook638a8c59872dpayloaddataobject). |

### IncomingWebhook638a8c59872dPayload.data.object

An action recorded during an order's fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Required | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `created_at` | Optional | string | Timeline entry creation timestamp. Format: `date-time`. |
| `current_status` | Optional | string | Values: [23 declared values](BuyerFulfillmentEvent.md#buyerfulfillmentevent-current_status-values). |
| `custom_details` | Optional | Map of string |  |
| `event_type` | Required | string | Values: [21 declared values](BuyerFulfillmentEvent.md#buyerfulfillmentevent-event_type-values). |
| `external_event_id` | Optional | string |  |
| `external_status` | Optional | string |  |
| `external_system` | Optional | string |  |
| `fulfillment_event_id` | Required | string |  |
| `fulfillment_id` | Required | string |  |
| `location_description` | Optional | string |  |
| `message` | Optional | string |  |
| `occurred_at` | Optional | string | Provider event timestamp. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Required | string |  |
| `package_id` | Optional | string |  |
| `previous_status` | Optional | string | Values: [23 declared values](BuyerFulfillmentEvent.md#buyerfulfillmentevent-current_status-values). |
| `quantity_effect` | Optional | string | Values: `"preserve"`, `"fulfill"`, `"release"`. |
| `reason` | Optional | string | Values: [12 declared values](FulfillmentEvent.md#fulfillmentevent-reason-values). |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `received_at` | Optional | string | Flint receive timestamp. Format: `date-time`. |
| `shipment_id` | Optional | string |  |
| `subject_type` | Required | string | Values: `"fulfillment"`, `"shipment"`, `"package"`. |

### IncomingWebhook638a8c59872dPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook638a8c59872dPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

