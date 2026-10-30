[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedInstalledMerchantsEvent

The `payment_link.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"payment_link.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentLinkCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentLink](../models/PaymentLink.md#paymentlink) | A reusable link that opens checkout. `object`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdataobject). |

### PaymentLinkCreatedInstalledMerchantsEvent.data.object

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLink.md#paymentlink).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.buyer_fields

Field definitions: [BuyerCheckoutSession.buyer_fields](../models/BuyerCheckoutSession.md#buyercheckoutsessionbuyer_fields).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.custom_text

Field definitions: [BuyerCheckoutSession.custom_text](../models/BuyerCheckoutSession.md#buyercheckoutsessioncustom_text).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.donation_max_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.donation_min_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.donation_suggested_amount_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.event_config

Field definitions: [PaymentLink.event_config](../models/PaymentLink.md#paymentlinkevent_config).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.inventory_routing_source

Field definitions: [InventoryReservation.inventory_routing_source](../models/InventoryReservation.md#inventoryreservationinventory_routing_source).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.legal

Field definitions: [BuyerCheckoutSession.legal](../models/BuyerCheckoutSession.md#buyercheckoutsessionlegal).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.payments

Field definitions: [PaymentLink.payments](../models/PaymentLink.md#paymentlinkpayments).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.promotion_config

Field definitions: [BuyerCheckoutSession.promotion_config](../models/BuyerCheckoutSession.md#buyercheckoutsessionpromotion_config).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.redirects

Field definitions: [PaymentLink.redirects](../models/PaymentLink.md#paymentlinkredirects).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.tax

Field definitions: [PaymentLink.tax](../models/PaymentLink.md#paymentlinktax).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.theme

Field definitions: [PaymentLink.theme](../models/PaymentLink.md#paymentlinktheme).

### PaymentLinkCreatedInstalledMerchantsEvent.data.object.tip

Field definitions: [BuyerCheckoutSession.tip](../models/BuyerCheckoutSession.md#buyercheckoutsessiontip).

### PaymentLinkCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

