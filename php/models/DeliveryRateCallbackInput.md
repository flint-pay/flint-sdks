[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackInput

An endpoint that supplies delivery rates.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `circuit_failure_count` | Required | integer | Consecutive callback failures since the last successful response. minimum: `0`. |
| `circuit_state` | Required | string | Values: `"closed"`, `"open"`, `"half_open"`. |
| `configuration` | Required | [DeliveryRateCallbackConfigurationInput](../models/DeliveryRateCallbackConfigurationInput.md#deliveryratecallbackconfigurationinput) | Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_delivery_rate_callback_revision_id` | Required | string |  |
| `delivery_rate_callback_id` | Required | string |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `key_id` | Optional | string |  |
| `name` | Required | string |  |
| `secret` | Optional | string | Initial signing secret. Returned only by the create response. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

