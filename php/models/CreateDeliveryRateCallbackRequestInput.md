[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRateCallbackRequestInput

The request body for: Create delivery rate callback.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfigurationInput](../models/DeliveryRateCallbackConfigurationInput.md#deliveryratecallbackconfigurationinput) | Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. |

