[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionLifecycleEventResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `delivery_selection_id` | Optional | string or null | ID of the selection whose status changed. `delivery_selection_id`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributesInput.md#deliveryselectionlifecycleeventresourcepreviousattributesinputdelivery_selection_id). |
| `delivery_selection_lifecycle_event_id` | Optional | string or null | ID of this recorded selection status change. `delivery_selection_lifecycle_event_id`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributesInput.md#deliveryselectionlifecycleeventresourcepreviousattributesinputdelivery_selection_lifecycle_event_id). |
| `reason` | Optional | string or null | What caused this selection status change. Values: [17 declared values](DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput-reason-values). `reason`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributesInput.md#deliveryselectionlifecycleeventresourcepreviousattributesinputreason). |
| `status` | Optional | string or null | Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. `status`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributesInput.md#deliveryselectionlifecycleeventresourcepreviousattributesinputstatus). |

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.delivery_selection_id

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.delivery_selection_id variant 1

anyOf variant 1: ID of the selection whose status changed..

- Value shape: string. ID of the selection whose status changed. ID of the selection whose status changed. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the selection whose status changed. 

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.delivery_selection_lifecycle_event_id

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.delivery_selection_lifecycle_event_id variant 1

anyOf variant 1: ID of this recorded selection status change..

- Value shape: string. ID of this recorded selection status change. ID of this recorded selection status change. Example: `"dsle_01KEZF7C00FR4QPRPMM4T248FD"`. 

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.delivery_selection_lifecycle_event_id variant 2

anyOf variant 2.

- Value shape: null. ID of this recorded selection status change. 

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.reason

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.reason variant 1

anyOf variant 1: What caused this selection status change..

- Value shape: string. What caused this selection status change. Values: `"replacement_selected"`, `"buyer_selected"`, `"payment_started"`, `"payment_failed_selection_restored"`, `"payment_settled"`, `"payment_failed_selection_expired"`, `"calculation_expired"`, `"selection_expired"`, `"selection_not_current"`, `"dependency_revoked"`, `"buyer_cleared"`, `"eligibility_context_refreshed"`, `"checkout_replaced"`, `"checkout_terminal"`, `"order_mutated"`, `"quote_basis_changed"`, `"calculation_changed"`.

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. What caused this selection status change. 

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.status

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.status variant 1

anyOf variant 1: Selection status after this change.
- `selected`: These choices are provisional and can be replaced before payment.
- `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes.
- `committed`: Payment fixed these choices on the order.
- `superseded`: A newer selection replaced these choices.
- `expired`: The selection is no longer usable because its deadline passed.
- `released`: These choices were withdrawn. Create a new selection before paying for delivery..

- Value shape: string. Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`.

### DeliverySelectionLifecycleEventResourcePreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. 

