[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionLifecycleEventResource

A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_selection_id` | Required | string |  |
| `delivery_selection_lifecycle_event_id` | Required | string |  |
| `reason` | Required | string | Values: [17 declared values](DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput-reason-values). |
| `status` | Required | string | Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

