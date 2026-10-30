[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerCreatedMerchantEvent

The `customer.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomerCreatedMerchantEventData](../models/CustomerCreatedMerchantEventData.md#customercreatedmerchanteventdata) | `data`: [field definitions](../models/CustomerCreatedMerchantEvent.md#customercreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"customer.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerCreatedMerchantEventRequest](../models/CustomerCreatedMerchantEventRequest.md#customercreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomerCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Customer](../models/Customer.md#customer) | A merchant's customer profile. `object`: [field definitions](../models/CustomerCreatedMerchantEvent.md#customercreatedmerchanteventdata-fields-1object). |

### CustomerCreatedMerchantEvent.data fields 1.object

A merchant's customer profile.

Field definitions: [shared fields](CustomerResponse.md#customerresponsedata).

### CustomerCreatedMerchantEvent.data fields 1.object.billing_address

Declared alternatives: [CustomerResponse.data.billing_address](../models/CustomerResponse.md#customerresponsedatabilling_address).

### CustomerCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### CustomerCreatedMerchantEvent.data fields 1.object.shipping_address

Declared alternatives: [CustomerResponse.data.shipping_address](../models/CustomerResponse.md#customerresponsedatashipping_address).

### CustomerCreatedMerchantEvent.data fields 1.object.tax_identity

Declared alternatives: [CustomerResponse.data.tax_identity](../models/CustomerResponse.md#customerresponsedatatax_identity).

