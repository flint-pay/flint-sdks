[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Optional | integer or null | Consecutive callback failures since the last successful response. `circuit_failure_count`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributescircuit_failure_count). |
| `circuit_state` | Optional | string or null | Whether Flint is currently calling the callback, based on recent failures. Values: `"closed"`, `"open"`, `"half_open"`. `circuit_state`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributescircuit_state). |
| `configuration` | Optional | Alternative shapes (see declared variants) | Current settings of the rate callback. `configuration`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `current_delivery_rate_callback_revision_id` | Optional | string or null | ID of the current revision. New quotes use it. `current_delivery_rate_callback_revision_id`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributescurrent_delivery_rate_callback_revision_id). |
| `delivery_rate_callback_id` | Optional | string or null | Unique identifier for this delivery rate callback, prefixed `dcb_`. `delivery_rate_callback_id`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesdelivery_rate_callback_id). |
| `delivery_revocation_id` | Optional | string or null or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. `delivery_revocation_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_revocation_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `name` | Optional | string or null | Merchant-facing name of the rate callback. `name`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesname). |
| `signing_methods` | Optional | Array of string or null | Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. Items values: `"jwt"`, `"hmac"`. `signing_methods`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributessigning_methods). |
| `status` | Optional | string or null | Whether the rate callback is in use. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_failure_count

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_failure_count variant 1

anyOf variant 1: Consecutive callback failures since the last successful response..

- Value shape: integer. Consecutive callback failures since the last successful response. Consecutive callback failures since the last successful response. minimum: `0`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_failure_count variant 2

anyOf variant 2.

- Value shape: null. Consecutive callback failures since the last successful response. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_state

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_state variant 1

anyOf variant 1: Whether Flint is currently calling the callback, based on recent failures..

- Value shape: string. Whether Flint is currently calling the callback, based on recent failures. Values: `"closed"`, `"open"`, `"half_open"`.

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.circuit_state variant 2

anyOf variant 2.

- Value shape: null. Whether Flint is currently calling the callback, based on recent failures. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration

Current settings of the rate callback.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Conditional | integer or null | Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. `maximum_request_bytes`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration-variant-1maximum_request_bytes). |
| `maximum_response_bytes` | Conditional | integer or null | Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. `maximum_response_bytes`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration-variant-1maximum_response_bytes). |
| `preview_enabled` | Conditional | boolean or null | Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. `preview_enabled`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration-variant-1preview_enabled). |
| `redirect_policy` | Conditional | string or null | What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration-variant-1redirect_policy). |
| `request_timeout_seconds` | Conditional | number or null | Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. `request_timeout_seconds`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration-variant-1request_timeout_seconds). |
| `url` | Conditional | string or null | HTTPS URL that Flint calls to get a delivery rate. `url`: [declared alternatives](../models/DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.md#deliveryratecallbackactivatedmerchanteventdatapreviousattributesconfiguration-variant-1url). |

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1: `redirect_policy` = `"reject"`

anyOf DeliveryRateCallbackConfigurationPreviousAttributes.

- Optional: `maximum_request_bytes`, `maximum_response_bytes`, `preview_enabled`, `redirect_policy`, `request_timeout_seconds`, `url`.

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf variant 2.

- Undeclared: `maximum_request_bytes`, `maximum_response_bytes`, `preview_enabled`, `redirect_policy`, `request_timeout_seconds`, `url`.
- Value shape: null. Current settings of the rate callback. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.maximum_request_bytes

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.maximum_request_bytes variant 1

anyOf variant 1: Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576..

- Value shape: integer. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.maximum_request_bytes variant 2

anyOf variant 2.

- Value shape: null. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.maximum_response_bytes

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.maximum_response_bytes variant 1

anyOf variant 1: Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576..

- Value shape: integer. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.maximum_response_bytes variant 2

anyOf variant 2.

- Value shape: null. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.preview_enabled

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.preview_enabled variant 1

anyOf variant 1: Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`..

- Value shape: boolean. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default: `false`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.preview_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.redirect_policy

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.redirect_policy variant 1

anyOf variant 1: What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`..

- Value shape: string. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Default: `"reject"`. Values: `"reject"`.

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.redirect_policy variant 2

anyOf variant 2.

- Value shape: null. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.request_timeout_seconds

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.request_timeout_seconds variant 1

anyOf variant 1: Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10..

- Value shape: number. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. minimum: `0.1`. maximum: `10`. Default: `2`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.request_timeout_seconds variant 2

anyOf variant 2.

- Value shape: null. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.url

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.url variant 1

anyOf variant 1: HTTPS URL that Flint calls to get a delivery rate..

- Value shape: string. HTTPS URL that Flint calls to get a delivery rate. HTTPS URL that Flint calls to get a delivery rate. minLength: `1`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.configuration variant 1.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS URL that Flint calls to get a delivery rate. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.current_delivery_rate_callback_revision_id

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.current_delivery_rate_callback_revision_id variant 1

anyOf variant 1: ID of the current revision. New quotes use it..

- Value shape: string. ID of the current revision. New quotes use it. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.current_delivery_rate_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the current revision. New quotes use it. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.delivery_rate_callback_id

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.delivery_rate_callback_id variant 1

anyOf variant 1: Unique identifier for this delivery rate callback, prefixed `dcb_`..

- Value shape: string. Unique identifier for this delivery rate callback, prefixed `dcb_`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.delivery_rate_callback_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this delivery rate callback, prefixed `dcb_`. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_revocation_id).

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.name

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Merchant-facing name of the rate callback..

- Value shape: string. Merchant-facing name of the rate callback. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing name of the rate callback. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.signing_methods

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.signing_methods variant 1

anyOf variant 1: Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs..

- Value shape: Array of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: `1`. uniqueItems: `true`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`.

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.signing_methods variant 2

anyOf variant 2.

- Value shape: null. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.status

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the rate callback is in use..

- Value shape: string. Whether the rate callback is in use. Values: `"active"`, `"inactive"`, `"archived"`.

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the rate callback is in use. 

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliveryRateCallbackActivatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

