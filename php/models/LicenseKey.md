[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKey

A license key issued to a buyer, with its display suffix.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active installations. Null when activations are unlimited. Format: `int32`. |
| `active_activation_count` | Required | integer | Number of currently active installations. Format: `int32`. |
| `created_at` | Required | string | When the license key was issued. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) | Customer summary when requested with expand=customer. Null when the key has no customer. Omitted when no customer expansion is requested. A customer's summary fields, returned in place of a customer ID when the customer is expanded. `customer`: [field definitions](../models/LicenseKeyResponse.md#licensekeyresponsedatacustomer). |
| `customer_id` | Required | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. |
| `expires_at` | Required | string or null | When the key expires. Null when no expiry is set. Format: `date-time`. |
| `key_last4` | Required | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. |
| `license_key_id` | Required | string | Unique license key ID with the lk_ prefix. |
| `license_key_pool_id` | Required | string or null | The source pool ID. Null when the key is generated. |
| `metadata` | Required | Map of string | Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LicenseKeyPoolResponse.md#licensekeypoolresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) | Order summary when requested with expand=order. Null when the key has no order. Omitted when no order expansion is requested. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. `order`: [field definitions](../models/LicenseKeyResponse.md#licensekeyresponsedataorder). |
| `order_id` | Required | string or null | The owning order or the order that started the subscription. Null when a subscription has no starting order. |
| `order_line_item_id` | Required | string or null | The owning order line. Null when the key belongs to a subscription line. |
| `product_id` | Required | string | The product ID. |
| `restrictions` | Required | Array of [LicenseKeyRestriction](../models/LicenseKeyRestriction.md#licensekeyrestriction) | Restrictions currently in force. `restrictions[]`: [field definitions](../models/LicenseKeyResponse.md#licensekeyresponsedatarestrictions). |
| `source` | Required | string | How the key was supplied. Values: `"generated"`, `"pool"`. |
| `status` | Required | string | Whether the key is usable. Expiry takes effect at expires_at. Values: `"pending"`, `"active"`, `"disabled"`, `"expired"`. |
| `subscription_id` | Required | string or null | The owning subscription. Null when the key belongs to an order line. |
| `subscription_line_item_id` | Required | string or null | The owning subscription line. Null when the key belongs to an order line. |
| `supported_actions` | Required | Array of string | Lifecycle actions currently available for this key. Items values: `"disable"`, `"reinstate"`. |
| `unit_ordinal` | Required | integer | The unit of the owning line, starting at 1. Format: `int32`. |
| `updated_at` | Required | string | When the license key version last changed. Format: `date-time`. |
| `variant_id` | Required | string | The product variant ID. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

### LicenseKey.customer

Field definitions: [LicenseKeyResponse.data.customer](../models/LicenseKeyResponse.md#licensekeyresponsedatacustomer).

### LicenseKey.metadata

Field definitions: [LicenseKeyPoolResponse.data.metadata](../models/LicenseKeyPoolResponse.md#licensekeypoolresponsedatametadata).

### LicenseKey.order

Field definitions: [LicenseKeyResponse.data.order](../models/LicenseKeyResponse.md#licensekeyresponsedataorder).

### LicenseKey.restrictions[]

Field definitions: [LicenseKeyResponse.data.restrictions[]](../models/LicenseKeyResponse.md#licensekeyresponsedatarestrictions).

