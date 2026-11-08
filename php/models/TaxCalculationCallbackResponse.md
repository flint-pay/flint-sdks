[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackResponse

A response containing `TaxCalculationCallback` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TaxCalculationCallback](../models/TaxCalculationCallback.md#taxcalculationcallback) | Resource, collection, or operation result returned by this request. An endpoint that supplies tax calculations. `data`: [field definitions](../models/TaxCalculationCallbackResponse.md#taxcalculationcallbackresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxCalculationCallbackResponse.data

Resource, collection, or operation result returned by this request. An endpoint that supplies tax calculations.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Required | integer | Consecutive failed requests to the endpoint for the current revision. A valid response resets it. minimum: `0`. |
| `circuit_state` | Required | string | Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Values: `"closed"`, `"open"`, `"half_open"`. |
| `configuration` | Required | [TaxCalculationCallbackConfiguration](../models/TaxCalculationCallbackConfiguration.md#taxcalculationcallbackconfiguration) | The endpoint URL and request limits. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy. `configuration`: [field definitions](../models/TaxCalculationCallbackResponse.md#taxcalculationcallbackresponsedataconfiguration). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_tax_calculation_callback_revision_id` | Required | string | ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. Example: `"tcbr_01KEZF7C00V2GHWCXVV2NCWX29"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `key_id` | Optional | string | ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. Example: `"cbkey_00112233445566778899aabb"`. |
| `name` | Required | string | Your label for the callback. |
| `secret` | Optional | string | Initial HMAC shared secret, returned once when hmac is included in signing_methods. |
| `signing_methods` | Required | Array of string | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. minItems: `1`. uniqueItems: `true`. Items: How Flint signs requests to this endpoint. Items values: `"jwt"`, `"hmac"`. |
| `status` | Required | string | Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Values: `"inactive"`, `"active"`, `"archived"`. |
| `tax_calculation_callback_id` | Required | string | Unique identifier for this tax calculation callback, prefixed `tcb_`. Example: `"tcb_01KEZF7C00N7SER74Y2E6D1ZGT"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Format: `uint64`. minimum: `0`. |

### TaxCalculationCallbackResponse.data.configuration

The endpoint URL and request limits. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy.

Field definitions: [shared fields](TaxCalculationCallbackConfigurationInput.md#taxcalculationcallbackconfigurationinput).

### TaxCalculationCallbackResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

