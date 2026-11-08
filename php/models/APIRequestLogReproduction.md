[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogReproduction

A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a sandbox key.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Optional | Alternative shapes (see declared variants) | The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `body`: [declared alternatives](../models/APIRequestLogReproduction.md#apirequestlogreproductionbody). |
| `curl` | Required | string | A curl command using the recorded served_api_version in Flint-Version when available. Complete captured bodies are inlined unless redacted or truncated. Replace credential and body placeholders before running it. |
| `has_redactions` | Required | boolean | True when values in the captured request body or query were redacted. Ignores authorization headers and the response body. False does not guarantee completeness when body capture was omitted or expired. |
| `headers` | Required | Map of string | Headers for reproducing the request. Flint-Version uses the recorded served_api_version. On routes that accept an idempotency key, same_request preserves the original key or uses a placeholder for that key when unavailable; after_refresh and none use a placeholder for a new key. |
| `http_method` | Required | string | HTTP method to resend the request with. |
| `path` | Required | string | Request path to resend the request to. |
| `query_params` | Required | Array of [APIRequestLogQueryParam](../models/APIRequestLogQueryParam.md#apirequestlogqueryparam) | Query parameters to resend, with sensitive values replaced by placeholders. |

### APIRequestLogReproduction.body

### APIRequestLogReproduction.body variant 1

oneOf Object.

- Value shape: object. The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogReproduction.body variant 2

oneOf Array.

- Value shape: Array of any. The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogReproduction.body variant 3

oneOf String.

- Value shape: string. The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

