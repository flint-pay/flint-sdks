[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_request_bytes` | Optional | integer or null | Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. `maximum_request_bytes`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributes.md#deliveryratecallbackconfigurationpreviousattributesmaximum_request_bytes). |
| `maximum_response_bytes` | Optional | integer or null | Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. `maximum_response_bytes`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributes.md#deliveryratecallbackconfigurationpreviousattributesmaximum_response_bytes). |
| `preview_enabled` | Optional | boolean or null | Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. `preview_enabled`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributes.md#deliveryratecallbackconfigurationpreviousattributespreview_enabled). |
| `redirect_policy` | Optional | string or null | What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Values: `"reject"`. `redirect_policy`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributes.md#deliveryratecallbackconfigurationpreviousattributesredirect_policy). |
| `request_timeout_seconds` | Optional | number or null | Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. `request_timeout_seconds`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributes.md#deliveryratecallbackconfigurationpreviousattributesrequest_timeout_seconds). |
| `url` | Optional | string or null | HTTPS URL that Flint calls to get a delivery rate. `url`: [declared alternatives](../models/DeliveryRateCallbackConfigurationPreviousAttributes.md#deliveryratecallbackconfigurationpreviousattributesurl). |

### DeliveryRateCallbackConfigurationPreviousAttributes.maximum_request_bytes

### DeliveryRateCallbackConfigurationPreviousAttributes.maximum_request_bytes variant 1

anyOf variant 1: Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576..

- Value shape: integer. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.maximum_request_bytes variant 2

anyOf variant 2.

- Value shape: null. Maximum callback request body size in bytes. Defaults to 262144; accepts 1 through 1048576. 

### DeliveryRateCallbackConfigurationPreviousAttributes.maximum_response_bytes

### DeliveryRateCallbackConfigurationPreviousAttributes.maximum_response_bytes variant 1

anyOf variant 1: Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576..

- Value shape: integer. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. Format: `int64`. minimum: `1`. maximum: `1048576`. Default: `262144`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.maximum_response_bytes variant 2

anyOf variant 2.

- Value shape: null. Maximum callback response body size in bytes. Defaults to 262144; accepts 1 through 1048576. 

### DeliveryRateCallbackConfigurationPreviousAttributes.preview_enabled

### DeliveryRateCallbackConfigurationPreviousAttributes.preview_enabled variant 1

anyOf variant 1: Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`..

- Value shape: boolean. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. Default: `false`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.preview_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether delivery previews call this callback. Previews call it only when this setting and `preview_enabled` on the delivery method are both `true`. Defaults to `false`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.redirect_policy

### DeliveryRateCallbackConfigurationPreviousAttributes.redirect_policy variant 1

anyOf variant 1: What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`..

- Value shape: string. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. Default: `"reject"`. Values: `"reject"`.

### DeliveryRateCallbackConfigurationPreviousAttributes.redirect_policy variant 2

anyOf variant 2.

- Value shape: null. What Flint does when the callback responds with an HTTP redirect. Defaults to `reject`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.request_timeout_seconds

### DeliveryRateCallbackConfigurationPreviousAttributes.request_timeout_seconds variant 1

anyOf variant 1: Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10..

- Value shape: number. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. minimum: `0.1`. maximum: `10`. Default: `2`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.request_timeout_seconds variant 2

anyOf variant 2.

- Value shape: null. Maximum time to wait for the callback response, in seconds. Defaults to 2; accepts 0.1 through 10. 

### DeliveryRateCallbackConfigurationPreviousAttributes.url

### DeliveryRateCallbackConfigurationPreviousAttributes.url variant 1

anyOf variant 1: HTTPS URL that Flint calls to get a delivery rate..

- Value shape: string. HTTPS URL that Flint calls to get a delivery rate. HTTPS URL that Flint calls to get a delivery rate. minLength: `1`. 

### DeliveryRateCallbackConfigurationPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. HTTPS URL that Flint calls to get a delivery rate. 

