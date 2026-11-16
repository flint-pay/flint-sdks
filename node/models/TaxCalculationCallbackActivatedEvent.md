[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackActivatedEvent

The `tax_calculation_callback.activated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"tax_calculation_callback.activated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### TaxCalculationCallbackActivatedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributes). |

### TaxCalculationCallbackActivatedEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](TaxCalculationCallback.md#taxcalculationcallback).

### TaxCalculationCallbackActivatedEvent.data.object.configuration

Field definitions: [TaxCalculationCallback.configuration fields 1](../models/TaxCalculationCallback.md#taxcalculationcallbackconfiguration-fields-1).

### TaxCalculationCallbackActivatedEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Optional | integer or null | Consecutive failed requests to the endpoint for the current revision. A valid response resets it. `circuit_failure_count`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributescircuit_failure_count). |
| `circuit_state` | Optional | string or null | Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Values: `"closed"`, `"open"`, `"half_open"`. `circuit_state`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributescircuit_state). |
| `configuration` | Optional | [TaxCalculationCallbackConfiguration](../models/TaxCalculationCallbackConfiguration.md#taxcalculationcallbackconfiguration) or null | The endpoint URL and request limits. `configuration`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributesconfiguration). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `current_tax_calculation_callback_revision_id` | Optional | string or null | ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. `current_tax_calculation_callback_revision_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributescurrent_tax_calculation_callback_revision_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `key_id` | Optional | string or null | ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. `key_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributeskey_id). |
| `name` | Optional | string or null | Your label for the callback. `name`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributesname). |
| `secret` | Optional | string or null | Initial HMAC shared secret, returned once when hmac is included in signing_methods. `secret`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributessecret). |
| `signing_methods` | Optional | Array of string or null | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Items values: `"jwt"`, `"hmac"`. `signing_methods`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributessigning_methods). |
| `status` | Optional | string or null | Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Values: `"inactive"`, `"active"`, `"archived"`. `status`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributesstatus). |
| `tax_calculation_callback_id` | Optional | string or null | Unique identifier for this tax calculation callback, prefixed `tcb_`. `tax_calculation_callback_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributestax_calculation_callback_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. `version`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdataprevious_attributesversion). |

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.circuit_failure_count

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.circuit_failure_count variant 1

anyOf variant 1: Consecutive failed requests to the endpoint for the current revision. A valid response resets it..

- Value shape: integer. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. minimum: `0`. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.circuit_failure_count variant 2

anyOf variant 2.

- Value shape: null. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.circuit_state

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.circuit_state variant 1

anyOf variant 1: Whether Flint is calling the endpoint, for the current revision.
- `closed`: Flint calls the endpoint.
- `open`: Flint stopped calling the endpoint after 30 consecutive failed requests.
- `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again..

- Value shape: string. Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Values: `"closed"`, `"open"`, `"half_open"`.

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.circuit_state variant 2

anyOf variant 2.

- Value shape: null. Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.configuration

The endpoint URL and request limits.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Conditional | integer | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `maximum_response_bytes` | Conditional | integer | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `redirect_policy` | Conditional | string | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: `"reject"`. Values: `"reject"`. |
| `request_timeout_seconds` | Conditional | number | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: `0.1`. maximum: `10`. Default: `3`. |
| `url` | Conditional | string | HTTPS endpoint that receives signed callback requests. Format: `uri`. minLength: `1`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.configuration variant 1: `redirect_policy` = `"reject"`

anyOf TaxCalculationCallbackConfiguration: The endpoint URL and request limits..

- Required: `url`.
- Optional: `maximum_request_bytes`, `maximum_response_bytes`, `redirect_policy`, `request_timeout_seconds`.

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.configuration variant 2

anyOf variant 2.

- Undeclared: `maximum_request_bytes`, `maximum_response_bytes`, `redirect_policy`, `request_timeout_seconds`, `url`.
- Value shape: null. The endpoint URL and request limits. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.current_tax_calculation_callback_revision_id

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.current_tax_calculation_callback_revision_id variant 1

anyOf variant 1: ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit..

- Value shape: string. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. Example: `"tcbr_01KEZF7C00V2GHWCXVV2NCWX29"`. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.current_tax_calculation_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.key_id

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.key_id variant 1

anyOf variant 1: ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback..

- Value shape: string. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. Example: `"cbkey_00112233445566778899aabb"`. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.key_id variant 2

anyOf variant 2.

- Value shape: null. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.name

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.name variant 1

anyOf variant 1: Your label for the callback..

- Value shape: string. Your label for the callback. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Your label for the callback. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.secret

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.secret variant 1

anyOf variant 1: Initial HMAC shared secret, returned once when hmac is included in signing_methods..

- Value shape: string. Initial HMAC shared secret, returned once when hmac is included in signing_methods. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.secret variant 2

anyOf variant 2.

- Value shape: null. Initial HMAC shared secret, returned once when hmac is included in signing_methods. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.signing_methods

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.signing_methods variant 1

anyOf variant 1: How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both..

- Value shape: Array of string. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. minItems: `1`. uniqueItems: `true`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`.

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.signing_methods variant 2

anyOf variant 2.

- Value shape: null. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.status

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the callback can be selected in `tax.calculation_callback_id`.
- `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run.
- `active`: Can be selected in `tax.calculation_callback_id`.
- `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again..

- Value shape: string. Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Values: `"inactive"`, `"active"`, `"archived"`.

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.tax_calculation_callback_id

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.tax_calculation_callback_id variant 1

anyOf variant 1: Unique identifier for this tax calculation callback, prefixed `tcb_`..

- Value shape: string. Unique identifier for this tax calculation callback, prefixed `tcb_`. Unique identifier for this tax calculation callback, prefixed `tcb_`. Example: `"tcb_01KEZF7C00N7SER74Y2E6D1ZGT"`. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.tax_calculation_callback_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this tax calculation callback, prefixed `tcb_`. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.version

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.version variant 1

anyOf variant 1: Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`..

- Value shape: integer. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Format: `uint64`. minimum: `0`. 

### TaxCalculationCallbackActivatedEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. 

### TaxCalculationCallbackActivatedEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

