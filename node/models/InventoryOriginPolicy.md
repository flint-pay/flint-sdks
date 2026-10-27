[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryOriginPolicy

How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `post_payment_inventory_failure_action` | Optional | string | Values: `"exception_state"`, `"auto_refund"`. |
| `subscription_inventory_block_action` | Optional | string | What happens when a subscription renewal cannot get stock. inventory_blocked_open_invoice creates an open invoice with collection_block_status inventory_blocked, external collection, caller-managed delivery, and no due date. past_due moves the subscription to past due. Values: `"inventory_blocked_open_invoice"`, `"past_due"`. |

