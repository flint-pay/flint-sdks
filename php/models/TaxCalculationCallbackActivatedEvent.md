[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackActivatedEvent

The `tax_calculation_callback.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [TaxCalculationCallbackActivatedEventData](../models/TaxCalculationCallbackActivatedEventData.md#taxcalculationcallbackactivatedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"tax_calculation_callback.activated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TaxCalculationCallbackActivatedEventRequest](../models/TaxCalculationCallbackActivatedEventRequest.md#taxcalculationcallbackactivatedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### TaxCalculationCallbackActivatedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributes). |

### TaxCalculationCallbackActivatedEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### TaxCalculationCallbackActivatedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](TaxCalculationCallback.md#taxcalculationcallback).

### TaxCalculationCallbackActivatedEvent.data fields 1.object.configuration

Field definitions: [TaxCalculationCallbackResponse.data.configuration](../models/TaxCalculationCallbackResponse.md#taxcalculationcallbackresponsedataconfiguration).

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](TaxCalculationCallbackActivatedEventDataPreviousAttributes.md#taxcalculationcallbackactivatedeventdatapreviousattributes).

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_failure_count

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_failure_count variant 1

anyOf variant 1: Consecutive failed requests to the endpoint for the current revision. A valid response resets it..

- Value shape: integer. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. minimum: `0`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_failure_count variant 2

anyOf variant 2.

- Value shape: null. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_state

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_state variant 1

anyOf variant 1: Whether Flint is calling the endpoint, for the current revision.
- `closed`: Flint calls the endpoint.
- `open`: Flint stopped calling the endpoint after 30 consecutive failed requests.
- `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again..

- Value shape: string. Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Values: `"closed"`, `"open"`, `"half_open"`.

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.circuit_state variant 2

anyOf variant 2.

- Value shape: null. Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration

The endpoint URL and request limits.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Conditional | integer or null | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_request_bytes`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1maximum_request_bytes). |
| `maximum_response_bytes` | Conditional | integer or null | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_response_bytes`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1maximum_response_bytes). |
| `redirect_policy` | Conditional | string or null | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1redirect_policy). |
| `request_timeout_seconds` | Conditional | number or null | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. `request_timeout_seconds`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1request_timeout_seconds). |
| `url` | Conditional | string or null | HTTPS endpoint that receives signed callback requests. `url`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1url). |

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1: `redirect_policy` = `"reject"`

anyOf TaxCalculationCallbackConfigurationPreviousAttributes.

- Optional: `maximum_request_bytes`, `maximum_response_bytes`, `redirect_policy`, `request_timeout_seconds`, `url`.

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 2

anyOf variant 2.

- Undeclared: `maximum_request_bytes`, `maximum_response_bytes`, `redirect_policy`, `request_timeout_seconds`, `url`.
- Value shape: null. The endpoint URL and request limits. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_request_bytes

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_request_bytes variant 1

anyOf variant 1: Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144..

- Value shape: integer. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_request_bytes variant 2

anyOf variant 2.

- Value shape: null. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_response_bytes

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_response_bytes variant 1

anyOf variant 1: Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144..

- Value shape: integer. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_response_bytes variant 2

anyOf variant 2.

- Value shape: null. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.redirect_policy

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.redirect_policy variant 1

anyOf variant 1: How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value..

- Value shape: string. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: `"reject"`. Values: `"reject"`.

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.redirect_policy variant 2

anyOf variant 2.

- Value shape: null. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.request_timeout_seconds

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.request_timeout_seconds variant 1

anyOf variant 1: How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3..

- Value shape: number. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: `0.1`. maximum: `10`. Default: `3`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.request_timeout_seconds variant 2

anyOf variant 2.

- Value shape: null. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.url

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.url variant 1

anyOf variant 1: HTTPS endpoint that receives signed callback requests..

- Value shape: string. HTTPS endpoint that receives signed callback requests. HTTPS endpoint that receives signed callback requests. Format: `uri`. minLength: `1`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS endpoint that receives signed callback requests. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.current_tax_calculation_callback_revision_id

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.current_tax_calculation_callback_revision_id variant 1

anyOf variant 1: ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit..

- Value shape: string. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.current_tax_calculation_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system..

- Value shape: string. Caller-owned identifier for this resource in an external system. Caller-owned identifier for this resource in an external system. maxLength: `255`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.key_id

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.key_id variant 1

anyOf variant 1: ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback..

- Value shape: string. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.key_id variant 2

anyOf variant 2.

- Value shape: null. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.name

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.name variant 1

anyOf variant 1: Your label for the callback..

- Value shape: string. Your label for the callback. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Your label for the callback. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.secret

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.secret variant 1

anyOf variant 1: Initial HMAC shared secret, returned once when hmac is included in signing_methods..

- Value shape: string. Initial HMAC shared secret, returned once when hmac is included in signing_methods. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.secret variant 2

anyOf variant 2.

- Value shape: null. Initial HMAC shared secret, returned once when hmac is included in signing_methods. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.signing_methods

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.signing_methods variant 1

anyOf variant 1: How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both..

- Value shape: Array of string. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. minItems: `1`. uniqueItems: `true`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`.

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.signing_methods variant 2

anyOf variant 2.

- Value shape: null. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.status

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Whether the callback can be selected in `tax.calculation_callback_id`.
- `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run.
- `active`: Can be selected in `tax.calculation_callback_id`.
- `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again..

- Value shape: string. Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Values: `"inactive"`, `"active"`, `"archived"`.

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.tax_calculation_callback_id

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.tax_calculation_callback_id variant 1

anyOf variant 1: Unique identifier for this tax calculation callback, prefixed `tcb_`..

- Value shape: string. Unique identifier for this tax calculation callback, prefixed `tcb_`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.tax_calculation_callback_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this tax calculation callback, prefixed `tcb_`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.version

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.version variant 1

anyOf variant 1: Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`..

- Value shape: integer. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Format: `uint64`. minimum: `0`. 

### TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. 

