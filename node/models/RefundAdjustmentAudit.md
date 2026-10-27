[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentAudit

Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Required | string | minLength: `1`. |
| `actor_type` | Required | string | Values: `"user"`, `"system"`, `"admin"`. |
| `source` | Required | string | minLength: `1`. |

