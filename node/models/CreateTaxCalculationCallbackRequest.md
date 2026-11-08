[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateTaxCalculationCallbackRequest

The request body for: Create a tax calculation callback.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [TaxCalculationCallbackConfiguration](../models/TaxCalculationCallbackConfiguration.md#taxcalculationcallbackconfiguration) | The endpoint URL and request limits. Only `url` is required. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy. `configuration`: [field definitions](../models/CreateTaxCalculationCallbackRequest.md#createtaxcalculationcallbackrequestconfiguration). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `name` | Required | string | Your label for the callback, from 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Defaults to `jwt`. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |

### CreateTaxCalculationCallbackRequest.configuration

The endpoint URL and request limits. Only `url` is required. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy.

Field definitions: [shared fields](TaxCalculationCallbackConfiguration.md#taxcalculationcallbackconfiguration).

