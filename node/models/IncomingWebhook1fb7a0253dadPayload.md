[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook1fb7a0253dadPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook1fb7a0253dadPayload.md#incomingwebhook1fb7a0253dadpayloaddata). |
| `event_type` | Required | string | Values: `"refund.partially_succeeded"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook1fb7a0253dadPayload variant 1: `event_type` = `"refund.partially_succeeded"`

oneOf variant 1: The `refund.partially_succeeded` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"refund.partially_succeeded"`.

### IncomingWebhook1fb7a0253dadPayload variant 2: `event_type` = `"refund.partially_succeeded"`

oneOf variant 2: The `refund.partially_succeeded` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"refund.partially_succeeded"`.

### IncomingWebhook1fb7a0253dadPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Refund](../models/Refund.md#refund) | Money returned against a collected payment. `object`: [field definitions](../models/IncomingWebhook1fb7a0253dadPayload.md#incomingwebhook1fb7a0253dadpayloaddataobject). |

### IncomingWebhook1fb7a0253dadPayload.data.object

Money returned against a collected payment.

Field definitions: [shared fields](Refund.md#refund).

### IncomingWebhook1fb7a0253dadPayload.data.object.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook1fb7a0253dadPayload.data.object.refunded_tip_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook1fb7a0253dadPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook1fb7a0253dadPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

