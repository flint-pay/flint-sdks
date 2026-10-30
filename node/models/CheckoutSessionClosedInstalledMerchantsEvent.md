[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionClosedInstalledMerchantsEvent

The `checkout_session.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"checkout_session.closed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CheckoutSessionClosedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | A session in which a buyer completes an order's payment. `object`: [field definitions](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataobject). |

### CheckoutSessionClosedInstalledMerchantsEvent.data.object

A session in which a buyer completes an order's payment.

Field definitions: [shared fields](CheckoutSession.md#checkoutsession).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.gift_card_challenge

Field definitions: [BuyerCheckoutSession.gift_card_challenge](../models/BuyerCheckoutSession.md#buyercheckoutsessiongift_card_challenge).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.payments

Field definitions: [BuyerCheckoutSession.payments](../models/BuyerCheckoutSession.md#buyercheckoutsessionpayments).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.promotion_config

Field definitions: [BuyerCheckoutSession.promotion_config](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.redirects

Field definitions: [BuyerCheckoutSession.redirects](../models/BuyerCheckoutSession.md#buyercheckoutsessionredirects).

### CheckoutSessionClosedInstalledMerchantsEvent.data.object.tip

Field definitions: [BuyerCheckoutSession.tip](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip).

### CheckoutSessionClosedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

