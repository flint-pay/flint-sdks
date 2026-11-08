[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackConfigurationInput

Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `maximum_response_bytes` | Optional | integer | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. |
| `redirect_policy` | Optional | string | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: `"reject"`. Values: `"reject"`. |
| `request_timeout_seconds` | Optional | number | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: `0.1`. maximum: `10`. Default: `3`. |
| `url` | Required | string | HTTPS endpoint that receives signed callback requests. Format: `uri`. minLength: `1`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |

