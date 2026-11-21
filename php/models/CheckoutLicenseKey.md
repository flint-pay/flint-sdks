[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutLicenseKey

A listed license key with an optional holder-only key.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activation_limit` | Required | integer or null | Maximum active installations. Null when activations are unlimited. Format: `int32`. |
| `active_activation_count` | Required | integer | Number of currently active installations. Format: `int32`. |
| `created_at` | Required | string | When the license key was issued. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | The linked customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Required | string or null | The current customer of the owning order or subscription. Null when the order has no linked customer. |
| `expires_at` | Required | string or null | When the key expires. Null when no expiry is set. Format: `date-time`. |
| `key` | Optional | string | The full key, when assigned and requested with the paying checkout credential. Returned only to the checkout credential; never in webhook payloads. |
| `key_last4` | Required | string or null | Last four characters of the assigned key. Null when the key is awaiting assignment. |
| `license_key_id` | Required | string | Unique license key ID with the lk_ prefix. |
| `license_key_pool_id` | Required | string or null | The source pool ID. Null when the key is generated. |
| `metadata` | Required | Map of string | Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LicenseKeyPoolResponse.md#licensekeypoolresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
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

### CheckoutLicenseKey.metadata

Field definitions: [LicenseKeyPoolResponse.data.metadata](../models/LicenseKeyPoolResponse.md#licensekeypoolresponsedatametadata).

### CheckoutLicenseKey.restrictions[]

Field definitions: [LicenseKeyResponse.data.restrictions[]](../models/LicenseKeyResponse.md#licensekeyresponsedatarestrictions).

