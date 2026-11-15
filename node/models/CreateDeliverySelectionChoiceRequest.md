[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliverySelectionChoiceRequest

The delivery option to select for one choice group when creating a delivery selection, with optional delivery instructions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_choice_group_id` | Required | string | ID of the choice group in the quote to select for. minLength: `1`. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_option_id` | Required | string | ID of an unexpired option in this choice group's options. minLength: `1`. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `input` | Optional | [DeliverySelectionInstructionsRequest](../models/DeliverySelectionInstructionsRequest.md#deliveryselectioninstructionsrequest) | Delivery window choice and buyer instructions for this option. Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. |

