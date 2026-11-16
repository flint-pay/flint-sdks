[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_request_bytes`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributesInput.md#taxcalculationcallbackconfigurationpreviousattributesinputmaximum_request_bytes). |
| `maximum_response_bytes` | Optional | integer or null | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_response_bytes`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributesInput.md#taxcalculationcallbackconfigurationpreviousattributesinputmaximum_response_bytes). |
| `redirect_policy` | Optional | string or null | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributesInput.md#taxcalculationcallbackconfigurationpreviousattributesinputredirect_policy). |
| `request_timeout_seconds` | Optional | number or null | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. `request_timeout_seconds`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributesInput.md#taxcalculationcallbackconfigurationpreviousattributesinputrequest_timeout_seconds). |
| `url` | Optional | string or null | HTTPS endpoint that receives signed callback requests. `url`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributesInput.md#taxcalculationcallbackconfigurationpreviousattributesinputurl). |

### TaxCalculationCallbackConfigurationPreviousAttributesInput.maximum_request_bytes

### TaxCalculationCallbackConfigurationPreviousAttributesInput.maximum_request_bytes variant 1

anyOf variant 1: Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144..

- Value shape: integer. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.maximum_request_bytes variant 2

anyOf variant 2.

- Value shape: null. Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.maximum_response_bytes

### TaxCalculationCallbackConfigurationPreviousAttributesInput.maximum_response_bytes variant 1

anyOf variant 1: Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144..

- Value shape: integer. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.maximum_response_bytes variant 2

anyOf variant 2.

- Value shape: null. Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.redirect_policy

### TaxCalculationCallbackConfigurationPreviousAttributesInput.redirect_policy variant 1

anyOf variant 1: How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value..

- Value shape: string. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Default: `"reject"`. Values: `"reject"`.

### TaxCalculationCallbackConfigurationPreviousAttributesInput.redirect_policy variant 2

anyOf variant 2.

- Value shape: null. How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.request_timeout_seconds

### TaxCalculationCallbackConfigurationPreviousAttributesInput.request_timeout_seconds variant 1

anyOf variant 1: How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3..

- Value shape: number. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. minimum: `0.1`. maximum: `10`. Default: `3`. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.request_timeout_seconds variant 2

anyOf variant 2.

- Value shape: null. How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.url

### TaxCalculationCallbackConfigurationPreviousAttributesInput.url variant 1

anyOf variant 1: HTTPS endpoint that receives signed callback requests..

- Value shape: string. HTTPS endpoint that receives signed callback requests. HTTPS endpoint that receives signed callback requests. Format: `uri`. minLength: `1`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### TaxCalculationCallbackConfigurationPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS endpoint that receives signed callback requests. 

