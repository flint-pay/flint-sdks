[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogReproduction

A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a sandbox key.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Optional | Alternative shapes (see declared variants) | The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `body`: [declared alternatives](../models/APIRequestLogReproduction.md#apirequestlogreproductionbody). |
| `curl` | Required | string | A curl command using the recorded served_api_version in Flint-Version when available. Replace credential and body placeholders before running it. |
| `headers` | Required | Map of string | Headers for reproducing the request. Flint-Version uses the served_api_version recorded in the log when available. |
| `http_method` | Required | string |  |
| `path` | Required | string |  |
| `query_params` | Required | Array of [APIRequestLogQueryParam](../models/APIRequestLogQueryParam.md#apirequestlogqueryparam) |  |
| `redactions_present` | Required | boolean |  |

### APIRequestLogReproduction.body

### APIRequestLogReproduction.body variant 1

anyOf variant 1.

- Value shape: object. The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogReproduction.body variant 2

anyOf variant 2.

- Value shape: Array of any. The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogReproduction.body variant 3

anyOf variant 3.

- Value shape: string. The captured request body to resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

