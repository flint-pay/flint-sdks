[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateTaxCalculationCallbackRequest

The request body for: Update a tax calculation callback. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Conditional | [TaxCalculationCallbackConfigurationPatchRequest](../models/TaxCalculationCallbackConfigurationPatchRequest.md#taxcalculationcallbackconfigurationpatchrequest) | Changes to the callback's configuration. Requires expected_version. Changes to a tax calculation callback's configuration. Only the keys you send change; keys you leave out keep their current values. Null restores an optional key's default. Requires expected_version. minProperties: `1`. |
| `expected_version` | Optional | integer | The `version` you last read. A stale value is refused with a version conflict. Required with `configuration` and `signing_methods`. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `name` | Conditional | string | New label for the callback. minLength: `1`. |
| `signing_methods` | Conditional | Array of [WebhookSigningMethod](../models/WebhookSigningMethod.md#webhooksigningmethod) | How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires expected_version. Removing hmac deletes the current and previous secrets. minItems: `1`. uniqueItems: `true`. Items values: `"jwt"`, `"hmac"`. |
| `status` | Conditional | string | Activates or deactivates the callback. Send it alone, with at most `expected_version`. - `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`: Stops the callback from being selected. Refused while your settings select it. Values: `"active"`, `"inactive"`. |

### UpdateTaxCalculationCallbackRequest variant 1

anyOf variant 1.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `name`.
- Optional: `configuration`, `external_reference_id`, `signing_methods`, `status`.

### UpdateTaxCalculationCallbackRequest variant 2

anyOf variant 2.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `external_reference_id`.
- Optional: `configuration`, `name`, `signing_methods`, `status`.

### UpdateTaxCalculationCallbackRequest variant 3

anyOf variant 3.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `configuration`.
- Optional: `external_reference_id`, `name`, `signing_methods`, `status`.

### UpdateTaxCalculationCallbackRequest variant 4

anyOf variant 4.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `signing_methods`.
- Optional: `configuration`, `external_reference_id`, `name`, `status`.

### UpdateTaxCalculationCallbackRequest variant 5

anyOf variant 5.

- Condition: not (present(`status`) and at least one(present(`name`); present(`external_reference_id`); present(`configuration`); present(`signing_methods`))).
- Required: `status`.
- Optional: `configuration`, `external_reference_id`, `name`, `signing_methods`.

