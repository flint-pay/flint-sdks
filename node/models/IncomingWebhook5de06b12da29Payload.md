[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook5de06b12da29Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook5de06b12da29Payload.md#incomingwebhook5de06b12da29payloaddata). |
| `event_type` | Required | string | Values: `"gift_card_load.updated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook5de06b12da29Payload variant 1: `event_type` = `"gift_card_load.updated"`

oneOf variant 1: The `gift_card_load.updated` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"gift_card_load.updated"`.

### IncomingWebhook5de06b12da29Payload variant 2: `event_type` = `"gift_card_load.updated"`

oneOf variant 2: The `gift_card_load.updated` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"gift_card_load.updated"`.

### IncomingWebhook5de06b12da29Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. `object`: [field definitions](../models/IncomingWebhook5de06b12da29Payload.md#incomingwebhook5de06b12da29payloaddataobject). |

### IncomingWebhook5de06b12da29Payload.data.object

Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Field definitions: [shared fields](GiftCardLoad.md#giftcardload).

### IncomingWebhook5de06b12da29Payload.data.object.consideration_money

Declared alternatives: [GiftCardLoad.consideration_money](../models/GiftCardLoad.md#giftcardloadconsideration_money).

### IncomingWebhook5de06b12da29Payload.data.object.refund_transferred_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook5de06b12da29Payload.data.object.remaining_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook5de06b12da29Payload.data.object.reversed_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook5de06b12da29Payload.data.object.value_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook5de06b12da29Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook5de06b12da29Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

