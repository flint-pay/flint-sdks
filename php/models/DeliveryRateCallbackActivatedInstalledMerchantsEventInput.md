[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackActivatedInstalledMerchantsEventInput

The `delivery_rate_callback.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_rate_callback.activated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributes). |

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliveryRateCallbackInput.md#deliveryratecallbackinput).

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Optional | integer or null | Consecutive callback failures since the last successful response. `circuit_failure_count`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributescircuit_failure_count). |
| `circuit_state` | Optional | string or null | Whether Flint is currently calling the callback, based on recent failures. Values: `"closed"`, `"open"`, `"half_open"`. `circuit_state`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributescircuit_state). |
| `configuration` | Optional | [DeliveryRateCallbackConfigurationInput](../models/DeliveryRateCallbackConfigurationInput.md#deliveryratecallbackconfigurationinput) or null | Current settings of the rate callback. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `current_delivery_rate_callback_revision_id` | Optional | string or null | ID of the current revision. New quotes use it. `current_delivery_rate_callback_revision_id`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributescurrent_delivery_rate_callback_revision_id). |
| `delivery_rate_callback_id` | Optional | string or null | Unique identifier for this delivery rate callback, prefixed `dcb_`. `delivery_rate_callback_id`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributesdelivery_rate_callback_id). |
| `delivery_revocation_id` | Optional | string or null or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. `delivery_revocation_id`: [declared alternatives](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesdelivery_revocation_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `name` | Optional | string or null | Merchant-facing name of the rate callback. `name`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributesname). |
| `signing_methods` | Optional | Array of string or null | Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. Items values: `"jwt"`, `"hmac"`. `signing_methods`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributessigning_methods). |
| `status` | Optional | string or null | Whether the rate callback is in use. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryRateCallbackActivatedInstalledMerchantsEventInput.md#deliveryratecallbackactivatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesversion). |

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.circuit_failure_count

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.circuit_failure_count variant 1

anyOf variant 1: Consecutive callback failures since the last successful response..

- Value shape: integer. Consecutive callback failures since the last successful response. Consecutive callback failures since the last successful response. minimum: `0`. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.circuit_failure_count variant 2

anyOf variant 2.

- Value shape: null. Consecutive callback failures since the last successful response. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.circuit_state

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.circuit_state variant 1

anyOf variant 1: Whether Flint is currently calling the callback, based on recent failures..

- Value shape: string. Whether Flint is currently calling the callback, based on recent failures. Values: `"closed"`, `"open"`, `"half_open"`.

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.circuit_state variant 2

anyOf variant 2.

- Value shape: null. Whether Flint is currently calling the callback, based on recent failures. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_rate_callback_revision_id

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_rate_callback_revision_id variant 1

anyOf variant 1: ID of the current revision. New quotes use it..

- Value shape: string. ID of the current revision. New quotes use it. ID of the current revision. New quotes use it. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.current_delivery_rate_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the current revision. New quotes use it. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_rate_callback_id

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_rate_callback_id variant 1

anyOf variant 1: Unique identifier for this delivery rate callback, prefixed `dcb_`..

- Value shape: string. Unique identifier for this delivery rate callback, prefixed `dcb_`. Unique identifier for this delivery rate callback, prefixed `dcb_`. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_rate_callback_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this delivery rate callback, prefixed `dcb_`. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_revocation_id

Declared alternatives: [DeliveryMethodActivatedInstalledMerchantsEventInput.data.previous_attributes.delivery_revocation_id](../models/DeliveryMethodActivatedInstalledMerchantsEventInput.md#deliverymethodactivatedinstalledmerchantseventinputdataprevious_attributesdelivery_revocation_id).

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.name

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Merchant-facing name of the rate callback..

- Value shape: string. Merchant-facing name of the rate callback. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing name of the rate callback. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.signing_methods

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.signing_methods variant 1

anyOf variant 1: Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs..

- Value shape: Array of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: `1`. uniqueItems: `true`. Example: `["jwt"]`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`.

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.signing_methods variant 2

anyOf variant 2.

- Value shape: null. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.status

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether the rate callback is in use..

- Value shape: string. Whether the rate callback is in use. Values: `"active"`, `"inactive"`, `"archived"`.

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the rate callback is in use. 

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.version](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesversion).

### DeliveryRateCallbackActivatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

