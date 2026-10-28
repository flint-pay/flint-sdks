[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook08a3ab8065ffPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook08a3ab8065ffPayload.md#incomingwebhook08a3ab8065ffpayloaddata). |
| `event_type` | Required | string | Values: `"checkout_session.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook08a3ab8065ffPayload variant 1: `event_type` = `"checkout_session.created"`

oneOf variant 1: The `checkout_session.created` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"checkout_session.created"`.

### IncomingWebhook08a3ab8065ffPayload variant 2: `event_type` = `"checkout_session.created"`

oneOf variant 2: The `checkout_session.created` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"checkout_session.created"`.

### IncomingWebhook08a3ab8065ffPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | A session in which a buyer completes an order's payment. `object`: [field definitions](../models/IncomingWebhook08a3ab8065ffPayload.md#incomingwebhook08a3ab8065ffpayloaddataobject). |

### IncomingWebhook08a3ab8065ffPayload.data.object

A session in which a buyer completes an order's payment.

Field definitions: [shared fields](CheckoutSession.md#checkoutsession).

### IncomingWebhook08a3ab8065ffPayload.data.object.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### IncomingWebhook08a3ab8065ffPayload.data.object.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### IncomingWebhook08a3ab8065ffPayload.data.object.gift_card_challenge

Field definitions: [BuyerCheckoutSession.gift_card_challenge](../models/BuyerCheckoutSession.md#buyercheckoutsessiongift_card_challenge).

### IncomingWebhook08a3ab8065ffPayload.data.object.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### IncomingWebhook08a3ab8065ffPayload.data.object.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### IncomingWebhook08a3ab8065ffPayload.data.object.payments

Field definitions: [BuyerCheckoutSession.payments](../models/BuyerCheckoutSession.md#buyercheckoutsessionpayments).

### IncomingWebhook08a3ab8065ffPayload.data.object.promotion_config

Field definitions: [BuyerCheckoutSession.promotion_config](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config).

### IncomingWebhook08a3ab8065ffPayload.data.object.redirects

Field definitions: [BuyerCheckoutSession.redirects](../models/BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### IncomingWebhook08a3ab8065ffPayload.data.object.tip

Field definitions: [BuyerCheckoutSession.tip](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip).

### IncomingWebhook08a3ab8065ffPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook08a3ab8065ffPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

