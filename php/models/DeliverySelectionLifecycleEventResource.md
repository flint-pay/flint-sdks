[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionLifecycleEventResource

A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_selection_id` | Required | string | ID of the selection whose status changed. |
| `delivery_selection_lifecycle_event_id` | Required | string | ID of this recorded selection status change. |
| `reason` | Required | string | What caused this selection status change. Values: [17 declared values](DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput-reason-values). |
| `status` | Required | string | Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

