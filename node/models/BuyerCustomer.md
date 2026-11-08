[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomer

A merchant's customer profile.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Required | [Address](../models/Address.md#address) or null | The customer's default billing address: a copy of the saved address marked is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses. `null` when no saved address is the billing default. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `default_payment_method_id` | Required | string or null | ID of the customer's default off-session payment method. `null` when none is set. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `email` | Required | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string or null | Customer name. `null` when none is set. |
| `phone` | Required | string or null | Customer phone number. `null` when none is set. |
| `shipping_address` | Required | [Address](../models/Address.md#address) or null | The customer's default shipping address: a copy of the saved address marked is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses. `null` when no saved address is the shipping default. |
| `status` | Required | string | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_identity` | Required | null | `null` when the caller is a customer session, which never sees the tax identity. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

