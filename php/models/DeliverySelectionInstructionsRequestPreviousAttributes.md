[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionInstructionsRequestPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_window_id` | Optional | string or null | ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. `delivery_window_id`: [declared alternatives](../models/DeliverySelectionInstructionsRequestPreviousAttributes.md#deliveryselectioninstructionsrequestpreviousattributesdelivery_window_id). |
| `instructions` | Optional | string or null | Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `instructions`: [declared alternatives](../models/DeliverySelectionInstructionsRequestPreviousAttributes.md#deliveryselectioninstructionsrequestpreviousattributesinstructions). |

### DeliverySelectionInstructionsRequestPreviousAttributes.delivery_window_id

### DeliverySelectionInstructionsRequestPreviousAttributes.delivery_window_id variant 1

anyOf variant 1: ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise..

- Value shape: string. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. minLength: `1`. 

### DeliverySelectionInstructionsRequestPreviousAttributes.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID from the option's offered_windows. Required when window_selection is offered; omit it otherwise. 

### DeliverySelectionInstructionsRequestPreviousAttributes.instructions

### DeliverySelectionInstructionsRequestPreviousAttributes.instructions variant 1

anyOf variant 1: Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. minLength: `1`. maxLength: `2000`. 

### DeliverySelectionInstructionsRequestPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer instructions for the selected option, without leading or trailing whitespace. Send this field only when buyer_instructions.enabled is true. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

