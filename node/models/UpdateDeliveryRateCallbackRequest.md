[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryRateCallbackRequest

The request body for: Update delivery rate callback.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryRateCallbackConfigurationPatchRequest](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Conditional | string | minLength: `1`. |
| `status` | Conditional | string | Values: `"inactive"`, `"active"`. |

### UpdateDeliveryRateCallbackRequest variant 1

anyOf variant 1.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`))).
- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `status`.

### UpdateDeliveryRateCallbackRequest variant 2

anyOf variant 2.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`))).
- Required: `external_reference_id`.
- Optional: `configuration`, `name`, `status`.

### UpdateDeliveryRateCallbackRequest variant 3

anyOf variant 3.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`))).
- Required: `configuration`.
- Optional: `external_reference_id`, `name`, `status`.

### UpdateDeliveryRateCallbackRequest variant 4

anyOf variant 4.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`))).
- Required: `status`.
- Optional: `configuration`, `external_reference_id`, `name`.

