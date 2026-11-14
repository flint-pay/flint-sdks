[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionLifecycleEventResource

A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_selection_id` | Required | string | ID of the selection whose status changed. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `delivery_selection_lifecycle_event_id` | Required | string | ID of this recorded selection status change. Example: `"dsle_01KEZF7C00FR4QPRPMM4T248FD"`. |
| `reason` | Required | string | What caused this selection status change. Values: [17 declared values](#deliveryselectionlifecycleeventresource-reason-values). |
| `status` | Required | string | Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

#### DeliverySelectionLifecycleEventResource reason values

- `"replacement_selected"`
- `"buyer_selected"`
- `"payment_started"`
- `"payment_failed_selection_restored"`
- `"payment_settled"`
- `"payment_failed_selection_expired"`
- `"calculation_expired"`
- `"selection_expired"`
- `"selection_not_current"`
- `"dependency_revoked"`
- `"buyer_cleared"`
- `"eligibility_context_refreshed"`
- `"checkout_replaced"`
- `"checkout_terminal"`
- `"order_mutated"`
- `"quote_basis_changed"`
- `"calculation_changed"`

