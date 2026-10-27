[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomer

A merchant's customer profile.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `billing_address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `default_payment_method_id` | Required | string or null |  |
| `email` | Required | string or null | Customer email, or null when the customer has none. Unique among the environment's customers. |
| `merchant_id` | Optional | string |  |
| `name` | Required | string or null | Customer name, or null when none. |
| `phone` | Required | string or null | Customer phone number, or null when none. |
| `shipping_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `shipping_address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
| `status` | Required | string | Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_identity` | Required | null | Always null for buyer credentials. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### BuyerCustomer.billing_address

A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | City or locality of the address. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | Street address, including the building number. |
| `line2` | Optional | string | Apartment, suite, floor, or other address details. |
| `postal_code` | Required | string | Postal or ZIP code of the address. |
| `state` | Required | string | State, province, or region of the address. |

### BuyerCustomer.shipping_address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

