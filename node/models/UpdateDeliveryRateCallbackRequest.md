[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryRateCallbackRequest

The request body for: Update delivery rate callback. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [DeliveryRateCallbackConfigurationPatchRequest](../models/DeliveryRateCallbackConfigurationPatchRequest.md#deliveryratecallbackconfigurationpatchrequest) | Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Null restores a key's default, as each field describes. The result must be a configuration you could create. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, signing_methods. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `name` | Conditional | string | Merchant-facing name. minLength: `1`. |
| `signing_methods` | Conditional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | Replaces the signing methods. Adding hmac when the callback has no shared secret issues one and returns it once in this response. Removing hmac deletes all shared secrets. Omit to leave unchanged. Requires expected_version. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Conditional | string | Whether the resource is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

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

