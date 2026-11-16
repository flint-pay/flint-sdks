[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. `maximum_request_bytes`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributesInput.md#deliveryratecallbackconfigurationpreviousattributesinputmaximum_request_bytes). |
| `maximum_response_bytes` | Optional | integer or null | Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. `maximum_response_bytes`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributesInput.md#deliveryratecallbackconfigurationpreviousattributesinputmaximum_response_bytes). |
| `preview_enabled` | Optional | boolean or null | Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. `preview_enabled`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributesInput.md#deliveryratecallbackconfigurationpreviousattributesinputpreview_enabled). |
| `redirect_policy` | Optional | string or null | What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributesInput.md#deliveryratecallbackconfigurationpreviousattributesinputredirect_policy). |
| `request_timeout_seconds` | Optional | number or null | Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. `request_timeout_seconds`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributesInput.md#deliveryratecallbackconfigurationpreviousattributesinputrequest_timeout_seconds). |
| `url` | Optional | string or null | HTTPS URL that Flint calls to get a delivery rate. `url`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributesInput.md#deliveryratecallbackconfigurationpreviousattributesinputurl). |

### DeliveryRateCallbackConfigurationPreviousAttributesInput.maximum_request_bytes

### DeliveryRateCallbackConfigurationPreviousAttributesInput.maximum_request_bytes variant 1

anyOf variant 1: Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576..

- Value shape: integer. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.maximum_request_bytes variant 2

anyOf variant 2.

- Value shape: null. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.maximum_response_bytes

### DeliveryRateCallbackConfigurationPreviousAttributesInput.maximum_response_bytes variant 1

anyOf variant 1: Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576..

- Value shape: integer. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.maximum_response_bytes variant 2

anyOf variant 2.

- Value shape: null. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.preview_enabled

### DeliveryRateCallbackConfigurationPreviousAttributesInput.preview_enabled variant 1

anyOf variant 1: Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`..

- Value shape: boolean. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default: `false`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.preview_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.redirect_policy

### DeliveryRateCallbackConfigurationPreviousAttributesInput.redirect_policy variant 1

anyOf variant 1: What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`..

- Value shape: string. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Default: `"reject"`. Values: `"reject"`.

### DeliveryRateCallbackConfigurationPreviousAttributesInput.redirect_policy variant 2

anyOf variant 2.

- Value shape: null. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.request_timeout_seconds

### DeliveryRateCallbackConfigurationPreviousAttributesInput.request_timeout_seconds variant 1

anyOf variant 1: Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10..

- Value shape: number. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. minimum: `0.1`. maximum: `10`. Default: `2`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.request_timeout_seconds variant 2

anyOf variant 2.

- Value shape: null. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.url

### DeliveryRateCallbackConfigurationPreviousAttributesInput.url variant 1

anyOf variant 1: HTTPS URL that Flint calls to get a delivery rate..

- Value shape: string. HTTPS URL that Flint calls to get a delivery rate. HTTPS URL that Flint calls to get a delivery rate. minLength: `1`. 

### DeliveryRateCallbackConfigurationPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS URL that Flint calls to get a delivery rate. 

