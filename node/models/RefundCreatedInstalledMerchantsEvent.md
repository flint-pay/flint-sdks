[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundCreatedInstalledMerchantsEvent

The `refund.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/RefundCreatedInstalledMerchantsEvent.md#refundcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"refund.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### RefundCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Refund](../models/Refund.md#refund) | Money returned against a collected payment. `object`: [field definitions](../models/RefundCreatedInstalledMerchantsEvent.md#refundcreatedinstalledmerchantseventdataobject). |

### RefundCreatedInstalledMerchantsEvent.data.object

Money returned against a collected payment.

Field definitions: [shared fields](Refund.md#refund).

### RefundCreatedInstalledMerchantsEvent.data.object.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### RefundCreatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### RefundCreatedInstalledMerchantsEvent.data.object.refunded_tip_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### RefundCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

