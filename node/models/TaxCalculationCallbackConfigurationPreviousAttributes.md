[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_request_bytes`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributesmaximum_request_bytes). |
| `maximum_response_bytes` | Optional | integer or null | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_response_bytes`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributesmaximum_response_bytes). |
| `redirect_policy` | Optional | string or null | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributesredirect_policy). |
| `request_timeout_seconds` | Optional | number or null | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. `request_timeout_seconds`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributesrequest_timeout_seconds). |
| `url` | Optional | string or null | HTTPS endpoint that receives signed callback requests. `url`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributesurl). |

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_request_bytes

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_request_bytes variant 1

anyOf variant 1: Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144..

- Value shape: integer. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_request_bytes variant 2

anyOf variant 2.

- Value shape: null. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. 

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_response_bytes

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_response_bytes variant 1

anyOf variant 1: Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144..

- Value shape: integer. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_response_bytes variant 2

anyOf variant 2.

- Value shape: null. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. 

### TaxCalculationCallbackConfigurationPreviousAttributes.redirect_policy

### TaxCalculationCallbackConfigurationPreviousAttributes.redirect_policy variant 1

anyOf variant 1: How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value..

- Value shape: string. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: `"reject"`. Values: `"reject"`.

### TaxCalculationCallbackConfigurationPreviousAttributes.redirect_policy variant 2

anyOf variant 2.

- Value shape: null. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. 

### TaxCalculationCallbackConfigurationPreviousAttributes.request_timeout_seconds

### TaxCalculationCallbackConfigurationPreviousAttributes.request_timeout_seconds variant 1

anyOf variant 1: How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3..

- Value shape: number. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: `0.1`. maximum: `10`. Default: `3`. 

### TaxCalculationCallbackConfigurationPreviousAttributes.request_timeout_seconds variant 2

anyOf variant 2.

- Value shape: null. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. 

### TaxCalculationCallbackConfigurationPreviousAttributes.url

### TaxCalculationCallbackConfigurationPreviousAttributes.url variant 1

anyOf variant 1: HTTPS endpoint that receives signed callback requests..

- Value shape: string. HTTPS endpoint that receives signed callback requests. HTTPS endpoint that receives signed callback requests. Format: `uri`. minLength: `1`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### TaxCalculationCallbackConfigurationPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS endpoint that receives signed callback requests. 

