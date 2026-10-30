[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionCreatedInstalledMerchantsEvent

The `return_resolution.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEvent.md#returnresolutioncreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"return_resolution.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnResolutionCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnResolution](../models/ReturnResolution.md#returnresolution) | The refund, exchange, or other outcome of a return. `object`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEvent.md#returnresolutioncreatedinstalledmerchantseventdataobject). |

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object

The refund, exchange, or other outcome of a return.

Field definitions: [shared fields](ReturnResolution.md#returnresolution).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.buyer_payment_amount_money

Field definitions: [BuyerReturnResolution.buyer_payment_amount_money](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_payment_amount_money).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.buyer_refund_amount_money

Field definitions: [BuyerReturnResolution.buyer_refund_amount_money](../models/BuyerReturnResolution.md#buyerreturnresolutionbuyer_refund_amount_money).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.credit_money

Field definitions: [BuyerReturnResolution.credit_money](../models/BuyerReturnResolution.md#buyerreturnresolutioncredit_money).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.deduction_money

Field definitions: [BuyerReturnResolution.deduction_money](../models/BuyerReturnResolution.md#buyerreturnresolutiondeduction_money).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.replacement_total_money

Field definitions: [BuyerReturnResolution.replacement_total_money](../models/BuyerReturnResolution.md#buyerreturnresolutionreplacement_total_money).

### ReturnResolutionCreatedInstalledMerchantsEvent.data.object.returned_total_money

Field definitions: [BuyerReturnResolution.returned_total_money](../models/BuyerReturnResolution.md#buyerreturnresolutionreturned_total_money).

### ReturnResolutionCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

