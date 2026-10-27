[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionLifecycleEventResource

A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_selection_id` | Required | string |  |
| `delivery_selection_lifecycle_event_id` | Required | string |  |
| `reason` | Required | string | Values: [17 declared values](#deliveryselectionlifecycleeventresource-reason-values). |
| `status` | Required | string | Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

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

