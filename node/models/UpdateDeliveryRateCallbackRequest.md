[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryRateCallbackRequest

The request body for: Update delivery rate callback.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryRateCallbackConfigurationPatchRequest](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Null restores a key's default, as each field describes. The result must be a configuration you could create. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `expected_version` | Optional | integer string | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, signing_methods. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `name` | Conditional | string | minLength: `1`. |
| `signing_methods` | Conditional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to add hmac when no secret has been issued. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Conditional | string | Values: `"inactive"`, `"active"`. |

### UpdateDeliveryRateCallbackRequest variant 1

anyOf variant 1.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `signing_methods`, `status`.

### UpdateDeliveryRateCallbackRequest variant 2

anyOf variant 2.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `external_reference_id`.
- Optional: `configuration`, `name`, `signing_methods`, `status`.

### UpdateDeliveryRateCallbackRequest variant 3

anyOf variant 3.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `configuration`.
- Optional: `external_reference_id`, `name`, `signing_methods`, `status`.

### UpdateDeliveryRateCallbackRequest variant 4

anyOf variant 4.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `signing_methods`.
- Optional: `configuration`, `external_reference_id`, `name`, `status`.

### UpdateDeliveryRateCallbackRequest variant 5

anyOf variant 5.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `status`.
- Optional: `configuration`, `external_reference_id`, `name`, `signing_methods`.

