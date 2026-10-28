[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookbd61ef55b477Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddata). |
| `event_type` | Required | string | Values: `"payment_link.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhookbd61ef55b477Payload variant 1: `event_type` = `"payment_link.created"`

oneOf variant 1: The `payment_link.created` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"payment_link.created"`.

### IncomingWebhookbd61ef55b477Payload variant 2: `event_type` = `"payment_link.created"`

oneOf variant 2: The `payment_link.created` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"payment_link.created"`.

### IncomingWebhookbd61ef55b477Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentLink](../models/PaymentLink.md#paymentlink) | A reusable link that opens checkout. `object`: [field definitions](../models/IncomingWebhookbd61ef55b477Payload.md#incomingwebhookbd61ef55b477payloaddataobject). |

### IncomingWebhookbd61ef55b477Payload.data.object

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLink.md#paymentlink).

### IncomingWebhookbd61ef55b477Payload.data.object.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### IncomingWebhookbd61ef55b477Payload.data.object.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### IncomingWebhookbd61ef55b477Payload.data.object.donation_max_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhookbd61ef55b477Payload.data.object.donation_min_amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhookbd61ef55b477Payload.data.object.donation_suggested_amount_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhookbd61ef55b477Payload.data.object.event_config

Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. Absent means no limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean |  |
| `ticket_prefix` | Optional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: `5`. |
| `timezone` | Optional | string |  |
| `venue` | Optional | string | maxLength: `500`. |

### IncomingWebhookbd61ef55b477Payload.data.object.inventory_routing_source

Field definitions: [IncomingWebhook0452cf0e91f7Payload.data.object.inventory_routing_source](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddataobjectinventory_routing_source).

### IncomingWebhookbd61ef55b477Payload.data.object.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### IncomingWebhookbd61ef55b477Payload.data.object.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### IncomingWebhookbd61ef55b477Payload.data.object.payments

Payment settings for a checkout: the enabled payment options and a note shown with payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string |  |

### IncomingWebhookbd61ef55b477Payload.data.object.promotion_config

Field definitions: [BuyerCheckoutSession.promotion_config](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config).

### IncomingWebhookbd61ef55b477Payload.data.object.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.

Field definitions: [shared fields](BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### IncomingWebhookbd61ef55b477Payload.data.object.tax

Whether tax is collected for a checkout session or payment link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean |  |

### IncomingWebhookbd61ef55b477Payload.data.object.theme

Colors and title applied to a payment link's checkout page.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string |  |
| `primary_color` | Optional | string |  |
| `title` | Optional | string |  |

### IncomingWebhookbd61ef55b477Payload.data.object.tip

Field definitions: [BuyerCheckoutSession.tip](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip).

### IncomingWebhookbd61ef55b477Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhookbd61ef55b477Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

