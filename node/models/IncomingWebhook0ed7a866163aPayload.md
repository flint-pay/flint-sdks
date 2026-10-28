[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook0ed7a866163aPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook0ed7a866163aPayload.md#incomingwebhook0ed7a866163apayloaddata). |
| `event_type` | Required | string | Values: `"gift_card_redemption.updated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook0ed7a866163aPayload variant 1: `event_type` = `"gift_card_redemption.updated"`

oneOf variant 1: The `gift_card_redemption.updated` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"gift_card_redemption.updated"`.

### IncomingWebhook0ed7a866163aPayload variant 2: `event_type` = `"gift_card_redemption.updated"`

oneOf variant 2: The `gift_card_redemption.updated` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"gift_card_redemption.updated"`.

### IncomingWebhook0ed7a866163aPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. `object`: [field definitions](../models/IncomingWebhook0ed7a866163aPayload.md#incomingwebhook0ed7a866163apayloaddataobject). |

### IncomingWebhook0ed7a866163aPayload.data.object

Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.

Field definitions: [shared fields](GiftCardRedemption.md#giftcardredemption).

### IncomingWebhook0ed7a866163aPayload.data.object.captured_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook0ed7a866163aPayload.data.object.refunded_money

Field definitions: [GiftCardRedemption.refunded_money](../models/GiftCardRedemption.md#giftcardredemptionrefunded_money).

### IncomingWebhook0ed7a866163aPayload.data.object.remaining_refundable_money

Field definitions: [GiftCardRedemption.remaining_refundable_money](../models/GiftCardRedemption.md#giftcardredemptionremaining_refundable_money).

### IncomingWebhook0ed7a866163aPayload.data.object.requested_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook0ed7a866163aPayload.data.object.reserved_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook0ed7a866163aPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook0ed7a866163aPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

