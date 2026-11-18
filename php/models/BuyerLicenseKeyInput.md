[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerLicenseKeyInput

A license key issued to the current buyer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active installations. Null when activations are unlimited. Format: `int32`. |
| `active_activation_count` | Required | integer | Number of currently active installations. Format: `int32`. |
| `buyer_actions` | Required | Array of [BuyerActionInput](../models/BuyerActionInput.md#buyeractioninput) | Whether the buyer can resend the license key email. The resend request checks cooldown and deliverability. |
| `created_at` | Required | string | When the license key was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_at` | Required | string or null | When the key expires. Null when no expiry is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `key` | Optional | string | The full assigned key. Present only on list responses where Flint verified access to the key. |
| `key_last4` | Required | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. |
| `license_key_id` | Required | string | Unique license key ID with the lk_ prefix. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. |
| `order_id` | Required | string or null | The owning order or the order that started the subscription. Null when a subscription has no starting order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string or null | The owning order line. Null when the key belongs to a subscription line. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Required | string | The product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `source` | Required | string | How the key was supplied. Values: `"generated"`, `"pool"`. |
| `status` | Required | string | Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. |
| `subscription_id` | Required | string or null | The owning subscription. Null when the key belongs to an order line. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_line_item_id` | Required | string or null | The owning subscription line. Null when the key belongs to an order line. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `unit_ordinal` | Required | integer | The unit of the owning line, starting at 1. Format: `int32`. |
| `updated_at` | Required | string | When the license key version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Required | string | The product variant ID. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

