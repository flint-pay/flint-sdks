[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRateCallbackRequest

The request body for: Create delivery rate callback.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryRateCallbackConfiguration](../models/DeliveryRateCallbackConfiguration.md#deliveryratecallbackconfiguration) | Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `name` | Required | string | minLength: `1`. |

