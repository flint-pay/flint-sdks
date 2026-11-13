[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRateCallbackRequest

The request body for: Create delivery rate callback.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfiguration](../models/DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration) | The settings that define this resource. Changing them publishes a new revision. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. `configuration`: [field definitions](../models/CreateDeliveryRateCallbackRequest.md#createdeliveryratecallbackrequestconfiguration). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `name` | Required | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | Signing methods for callback requests. Defaults to JWT verification with Flint's public JWKS. When hmac is included, the response returns the shared secret and its delivery_rate_callback_signing_key_id once. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Optional | string | Whether active delivery methods can price with this callback. Defaults to inactive. Default: `"inactive"`. Values: `"inactive"`, `"active"`. |

### CreateDeliveryRateCallbackRequest.configuration

The settings that define this resource. Changing them publishes a new revision. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it.

Field definitions: [shared fields](DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration).

