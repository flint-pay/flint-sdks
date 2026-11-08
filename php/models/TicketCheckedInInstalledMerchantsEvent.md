[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketCheckedInInstalledMerchantsEvent

The `ticket.checked_in` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [TicketCheckedInInstalledMerchantsEventData](../models/TicketCheckedInInstalledMerchantsEventData.md#ticketcheckedininstalledmerchantseventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TicketCheckedInInstalledMerchantsEvent.md#ticketcheckedininstalledmerchantseventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"ticket.checked_in"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [TicketCheckedInInstalledMerchantsEventSource](../models/TicketCheckedInInstalledMerchantsEventSource.md#ticketcheckedininstalledmerchantseventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/TicketCheckedInInstalledMerchantsEvent.md#ticketcheckedininstalledmerchantseventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### TicketCheckedInInstalledMerchantsEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](TicketCheckedInMerchantEvent.md#ticketcheckedinmerchanteventdata-fields-1).

### TicketCheckedInInstalledMerchantsEvent.data fields 1.object

Field definitions: [TicketCheckedInMerchantEvent.data fields 1.object](../models/TicketCheckedInMerchantEvent.md#ticketcheckedinmerchanteventdata-fields-1object).

### TicketCheckedInInstalledMerchantsEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

