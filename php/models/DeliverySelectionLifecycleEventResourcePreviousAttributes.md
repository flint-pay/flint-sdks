[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionLifecycleEventResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `delivery_selection_id` | Optional | string or null | ID of the selection whose status changed. `delivery_selection_id`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesdelivery_selection_id). |
| `delivery_selection_lifecycle_event_id` | Optional | string or null | ID of this recorded selection status change. `delivery_selection_lifecycle_event_id`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesdelivery_selection_lifecycle_event_id). |
| `reason` | Optional | string or null | What caused this selection status change. Values: [17 declared values](DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput-reason-values). `reason`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesreason). |
| `status` | Optional | string or null | Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. `status`: [declared alternatives](../models/DeliverySelectionLifecycleEventResourcePreviousAttributes.md#deliveryselectionlifecycleeventresourcepreviousattributesstatus). |

### DeliverySelectionLifecycleEventResourcePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### DeliverySelectionLifecycleEventResourcePreviousAttributes.delivery_selection_id

### DeliverySelectionLifecycleEventResourcePreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: ID of the selection whose status changed..

- Value shape: string. ID of the selection whose status changed. 

### DeliverySelectionLifecycleEventResourcePreviousAttributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the selection whose status changed. 

### DeliverySelectionLifecycleEventResourcePreviousAttributes.delivery_selection_lifecycle_event_id

### DeliverySelectionLifecycleEventResourcePreviousAttributes.delivery_selection_lifecycle_event_id variant 1

anyOf variant 1: ID of this recorded selection status change..

- Value shape: string. ID of this recorded selection status change. 

### DeliverySelectionLifecycleEventResourcePreviousAttributes.delivery_selection_lifecycle_event_id variant 2

anyOf variant 2.

- Value shape: null. ID of this recorded selection status change. 

### DeliverySelectionLifecycleEventResourcePreviousAttributes.reason

### DeliverySelectionLifecycleEventResourcePreviousAttributes.reason variant 1

anyOf variant 1: What caused this selection status change..

- Value shape: string. What caused this selection status change. Values: `"replacement_selected"`, `"buyer_selected"`, `"payment_started"`, `"payment_failed_selection_restored"`, `"payment_settled"`, `"payment_failed_selection_expired"`, `"calculation_expired"`, `"selection_expired"`, `"selection_not_current"`, `"dependency_revoked"`, `"buyer_cleared"`, `"eligibility_context_refreshed"`, `"checkout_replaced"`, `"checkout_terminal"`, `"order_mutated"`, `"quote_basis_changed"`, `"calculation_changed"`.

### DeliverySelectionLifecycleEventResourcePreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. What caused this selection status change. 

### DeliverySelectionLifecycleEventResourcePreviousAttributes.status

### DeliverySelectionLifecycleEventResourcePreviousAttributes.status variant 1

anyOf variant 1: Selection status after this change.
- `selected`: These choices are provisional and can be replaced before payment.
- `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes.
- `committed`: Payment fixed these choices on the order.
- `superseded`: A newer selection replaced these choices.
- `expired`: The selection is no longer usable because its deadline passed.
- `released`: These choices were withdrawn. Create a new selection before paying for delivery..

- Value shape: string. Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`.

### DeliverySelectionLifecycleEventResourcePreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. 

