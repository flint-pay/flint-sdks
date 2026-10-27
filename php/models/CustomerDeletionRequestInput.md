[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestInput

A request to delete a customer's personal information.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |
| `customer_id` | Required | string |  |
| `requested_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `resolved_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `retention_policy` | Required | string | What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Values: `"retain_required_commerce_records"`. |
| `status` | Required | string | Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |

