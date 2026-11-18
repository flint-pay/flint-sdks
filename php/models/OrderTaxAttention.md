[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxAttention

A tax issue requiring merchant attention without reversing a recorded payment or refund.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | tax_commitment_failed means Flint could not verify the order's recorded tax information. New codes may be added. Values: `"tax_commitment_failed"`. |
| `message` | Required | string | Merchant-facing explanation and next step. |
| `started_at` | Required | string | When this outstanding tax issue was first recorded, in UTC. Format: `date-time`. |

