[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisconnectTaxConnectionRequestInput

The request body for: Disconnect automatic tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to apply the change to the current resource. Format: `uint64`. minimum: `1`. |
| `tax_default_behavior` | Required | string | Choose turn_off to stop adding tax to new orders that inherit the default, or keep to leave the default unchanged. Keep refuses those orders and holds subscription renewals until automatic tax is reconnected or the default is turned off. Neither choice turns tax on. Values: `"turn_off"`, `"keep"`. |

