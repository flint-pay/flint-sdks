[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileCreatedInstalledMerchantsEvent

The `delivery_profile.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [DeliveryProfileCreatedInstalledMerchantsEventData](../models/DeliveryProfileCreatedInstalledMerchantsEventData.md#deliveryprofilecreatedinstalledmerchantseventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryProfileCreatedInstalledMerchantsEvent.md#deliveryprofilecreatedinstalledmerchantseventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_profile.created"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [DeliveryProfileCreatedInstalledMerchantsEventSource](../models/DeliveryProfileCreatedInstalledMerchantsEventSource.md#deliveryprofilecreatedinstalledmerchantseventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/DeliveryProfileCreatedInstalledMerchantsEvent.md#deliveryprofilecreatedinstalledmerchantseventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### DeliveryProfileCreatedInstalledMerchantsEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](DeliveryProfileArchivedMerchantEvent.md#deliveryprofilearchivedmerchanteventdata-fields-1).

### DeliveryProfileCreatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [DeliveryProfileArchivedMerchantEvent.data fields 1.object](../models/DeliveryProfileArchivedMerchantEvent.md#deliveryprofilearchivedmerchanteventdata-fields-1object).

### DeliveryProfileCreatedInstalledMerchantsEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

