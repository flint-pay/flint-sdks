[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateMerchantRequestInput

The request body for: Update merchant.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `api_version` | Optional | string | Set the merchant default to any supported API version using a live-mode API key or the live dashboard environment. Omit to leave it unchanged. Null is not accepted. The default is shared across live and test environments; requests with Flint-Version use that header instead. minLength: `1`. |
| `business_name` | Optional | string | Business name buyers see. Limited to 120 characters (Unicode code points) before trimming surrounding whitespace. The trimmed name must not be empty. The name cannot be cleared, and only live credentials can set it. minLength: `1`. maxLength: `120`. |
| `email` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `expected_version` | Optional | integer string | Merchant profile version last read. A different current version returns 409 VERSION_CONFLICT. Send this value when saving a logo or icon to detect concurrent profile edits. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `icon` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. |
| `logo` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) or null |  |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `phone` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `reporting_timezone` | Optional | string | minLength: `1`. |
| `support_email` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `support_phone` | Optional | string or null | Support phone in E.164 format, for example +12125551234. Send null to clear it. minLength: `1`. maxLength: `16`. pattern: `^\+[1-9][0-9]{6,14}$`. |
| `support_url` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `website_url` | Optional | string or null | Send null to clear it. minLength: `1`. |

