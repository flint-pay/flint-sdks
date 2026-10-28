[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutRecoveryEmailSettingsRequestRequestInput

Checkout reminder email settings. On update, an omitted field keeps its value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delay_seconds` | Optional | integer | Seconds to wait after the buyer last changed their email or phone before sending the reminder. Must be a multiple of 60. Defaults to 3600. Format: `int32`. minimum: `900`. maximum: `86400`. multipleOf: `60`. Default: `3600`. |
| `enabled` | Optional | boolean | Whether Flint sends checkout reminders. Turning them on requires a business address on the merchant, which the reminder prints; without one the update returns ACTION_NOT_ALLOWED with reason configuration_required and the merchant reference. |

