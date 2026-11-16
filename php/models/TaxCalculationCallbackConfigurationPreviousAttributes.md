[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackConfigurationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Largest request body Flint sends to your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_request_bytes`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1maximum_request_bytes). |
| `maximum_response_bytes` | Optional | integer or null | Largest response body Flint accepts from your endpoint, in bytes, from 1 to 1048576. Defaults to 262144. `maximum_response_bytes`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1maximum_response_bytes). |
| `redirect_policy` | Optional | string or null | How Flint treats a redirect from your endpoint. Flint never follows redirects, so `reject` is the only value. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1redirect_policy). |
| `request_timeout_seconds` | Optional | number or null | How long Flint waits for each request to your endpoint, in seconds, from 0.1 to 10. Defaults to 3. `request_timeout_seconds`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1request_timeout_seconds). |
| `url` | Optional | string or null | HTTPS endpoint that receives signed callback requests. `url`: [declared alternatives](../models/TaxCalculationCallbackConfigurationPreviousAttributes.md#taxcalculationcallbackconfigurationpreviousattributesurl). |

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_request_bytes

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_request_bytes](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1maximum_request_bytes).

### TaxCalculationCallbackConfigurationPreviousAttributes.maximum_response_bytes

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.maximum_response_bytes](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1maximum_response_bytes).

### TaxCalculationCallbackConfigurationPreviousAttributes.redirect_policy

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.redirect_policy](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1redirect_policy).

### TaxCalculationCallbackConfigurationPreviousAttributes.request_timeout_seconds

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.configuration variant 1.request_timeout_seconds](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesconfiguration-variant-1request_timeout_seconds).

### TaxCalculationCallbackConfigurationPreviousAttributes.url

### TaxCalculationCallbackConfigurationPreviousAttributes.url variant 1

anyOf variant 1: HTTPS endpoint that receives signed callback requests..

- Value shape: string. HTTPS endpoint that receives signed callback requests. HTTPS endpoint that receives signed callback requests. Format: `uri`. minLength: `1`. pattern: `^https://`. 

### TaxCalculationCallbackConfigurationPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS endpoint that receives signed callback requests. 

