[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionInstructionsRequest

Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_window_id` | Optional | string | minLength: `1`. |
| `instructions` | Optional | string | Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. minLength: `1`. maxLength: `2000`. |

