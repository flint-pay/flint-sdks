[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundAdjustmentAuditInput

Who made a manual tax adjustment on a refund line item and where it came from, for audit purposes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Required | string | ID you use for whoever made the adjustment, up to 255 characters. minLength: `1`. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `actor_type` | Required | string | What kind of actor made the adjustment. Example: `"user"`. Values: `"user"`, `"system"`, `"admin"`. |
| `source` | Required | string | Where the adjustment came from, such as the name of your support tool. 1 to 255 characters. minLength: `1`. |

