[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackConfigurationPatchRequest

Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Null restores 262144 bytes. minimum: `1`. maximum: `1048576`. |
| `maximum_response_bytes` | Optional | integer or null | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Null restores 262144 bytes. minimum: `1`. maximum: `1048576`. |
| `redirect_policy` | Optional | string or null | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Values: `"reject"`, `null`. |
| `request_timeout_seconds` | Optional | number or null | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. Null restores 3 seconds. minimum: `0.1`. maximum: `10`. |
| `url` | Optional | string | HTTPS endpoint that receives signed callback requests. Null is invalid. Format: `uri`. minLength: `1`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

