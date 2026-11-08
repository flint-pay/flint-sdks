[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateTaxCalculationCallbackRequestInput

The request body for: Create a tax calculation callback.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [TaxCalculationCallbackConfigurationRequestInput](../models/TaxCalculationCallbackConfigurationRequestInput.md#taxcalculationcallbackconfigurationrequestinput) | The endpoint URL and request limits. Only `url` is required. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `name` | Required | string | Your label for the callback, from 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `signing_methods` | Optional | Array of [WebhookSigningMethodInput](../models/WebhookSigningMethodInput.md#webhooksigningmethodinput) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Defaults to `jwt`. minItems: `1`. uniqueItems: `true`. Default: `["jwt"]`. Items values: `"jwt"`, `"hmac"`. |

