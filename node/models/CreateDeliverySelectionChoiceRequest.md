[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliverySelectionChoiceRequest

The delivery option to select for one choice group when creating a delivery selection, with optional delivery instructions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_choice_group_id` | Required | string | minLength: `1`. |
| `delivery_option_id` | Required | string | minLength: `1`. |
| `input` | Optional | [DeliverySelectionInstructionsRequest](../models/DeliverySelectionInstructionsRequest.md#deliveryselectioninstructionsrequest) | Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. |

