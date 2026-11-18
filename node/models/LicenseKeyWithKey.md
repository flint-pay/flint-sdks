[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyWithKey

A merchant license key with its full credential when available to the caller.

A license key issued to a buyer, with its display suffix.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active installations. Null when activations are unlimited. Format: `int32`. |
| `active_activation_count` | Required | integer | Number of currently active installations. Format: `int32`. |
| `created_at` | Required | string | When the license key was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) | Customer summary when requested with expand=customer. Null when the key has no customer. Omitted when no customer expansion is requested. A customer's summary fields, returned in place of a customer ID when the customer is expanded. |
| `customer_id` | Required | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_at` | Required | string or null | When the key expires. Null when no expiry is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `key_last4` | Required | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. |
| `license_key_id` | Required | string | Unique license key ID with the lk_ prefix. Example: `"lk_01KEZF7C000QD7VJ83G43V0NSN"`. |
| `license_key_pool_id` | Required | string or null | The source pool ID. Null when the key is generated. Example: `"lkp_01KEZF7C00AQV1X2DPWG2NXS7H"`. |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutLicenseKey.md#checkoutlicensekeymetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) | Order summary when requested with expand=order. Null when the key has no order. Omitted when no order expansion is requested. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. |
| `order_id` | Required | string or null | The owning order or the order that started the subscription. Null when a subscription has no starting order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string or null | The owning order line. Null when the key belongs to a subscription line. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Required | string | The product ID. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `restrictions` | Required | Array of [LicenseKeyRestriction](../models/LicenseKeyRestriction.md#licensekeyrestriction) | Restrictions currently in force. |
| `source` | Required | string | How the key was supplied. Values: `"generated"`, `"pool"`. |
| `status` | Required | string | Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. |
| `subscription_id` | Required | string or null | The owning subscription. Null when the key belongs to an order line. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_line_item_id` | Required | string or null | The owning subscription line. Null when the key belongs to an order line. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions currently available for this key. Items values: `"disable"`, `"reinstate"`. |
| `unit_ordinal` | Required | integer | The unit of the owning line, starting at 1. Format: `int32`. |
| `updated_at` | Required | string | When the license key version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Required | string | The product variant ID. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `key` | Optional | string | The full key. Omitted when another credential replays the request, the recovery window has ended, or a rotation is replayed after the resource version changed. |

### LicenseKeyWithKey.metadata

Field definitions: [CheckoutLicenseKey.metadata](../models/CheckoutLicenseKey.md#checkoutlicensekeymetadata).

