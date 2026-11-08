[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliverySelectionChoiceRequestInput

The delivery option to select for one choice group when creating a delivery selection, with optional delivery instructions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_choice_group_id` | Required | string | minLength: `1`. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_option_id` | Required | string | minLength: `1`. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `input` | Optional | [DeliverySelectionInstructionsRequestInput](../models/DeliverySelectionInstructionsRequestInput.md#deliveryselectioninstructionsrequestinput) | Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. |

