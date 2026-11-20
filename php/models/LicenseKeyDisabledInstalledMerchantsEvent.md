[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyDisabledInstalledMerchantsEvent

The `license_key.disabled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [LicenseKeyDisabledInstalledMerchantsEventData](../models/LicenseKeyDisabledInstalledMerchantsEventData.md#licensekeydisabledinstalledmerchantseventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"license_key.disabled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [LicenseKeyDisabledInstalledMerchantsEventSource](../models/LicenseKeyDisabledInstalledMerchantsEventSource.md#licensekeydisabledinstalledmerchantseventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/LicenseKeyDisabledInstalledMerchantsEvent.md#licensekeydisabledinstalledmerchantseventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### LicenseKeyDisabledInstalledMerchantsEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

Field definitions: [shared fields](LicenseKeyDisabledMerchantEvent.md#licensekeydisabledmerchanteventdata-fields-1).

### LicenseKeyDisabledInstalledMerchantsEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### LicenseKeyDisabledInstalledMerchantsEvent.data fields 1.object

Field definitions: [LicenseKeyCreatedMerchantEvent.data fields 1.object](../models/LicenseKeyCreatedMerchantEvent.md#licensekeycreatedmerchanteventdata-fields-1object).

### LicenseKeyDisabledInstalledMerchantsEvent.data fields 1.previous_attributes

Field definitions: [LicenseKeyDisabledMerchantEvent.data fields 1.previous_attributes](../models/LicenseKeyDisabledMerchantEvent.md#licensekeydisabledmerchanteventdata-fields-1previous_attributes).

### LicenseKeyDisabledInstalledMerchantsEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

