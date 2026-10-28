[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantInput

The business accepting payments.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `api_version` | Optional | string | Default API version for requests without a Flint-Version header. Shared across live and test environments. |
| `api_version_changed_at` | Optional | string | When the merchant's default API version last changed. Format: `date-time`. |
| `api_version_pinned_at` | Optional | string | When the merchant's default API version was first set. Format: `date-time`. |
| `api_version_previous` | Optional | string | Previous API version, present while a supported rollback is available. |
| `api_version_rollback_expires_at` | Optional | string | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. |
| `business_name` | Optional | string | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. |
| `business_type` | Optional | string | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `email` | Required | string or null |  |
| `icon` | Optional | [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata. |
| `logo` | Optional | [ImageAttachmentInput](../models/ImageAttachmentInput.md#imageattachmentinput) | An image attached to a resource, with its display properties and attachment metadata. |
| `merchant_id` | Required | string |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `organization` | Optional | [ExpandedOrganizationSummaryInput](../models/ExpandedOrganizationSummaryInput.md#expandedorganizationsummaryinput) or null |  |
| `organization_id` | Required | string | The organization this merchant belongs to. Flint creates it with the merchant, and it can't be changed through the API. |
| `phone` | Optional | string |  |
| `readiness` | Required | [MerchantReadinessInput](../models/MerchantReadinessInput.md#merchantreadinessinput) | A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements. |
| `reporting_timezone` | Optional | string |  |
| `status` | Required | string | Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. |
| `support_email` | Optional | string |  |
| `support_phone` | Optional | string |  |
| `support_url` | Optional | string |  |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `website_url` | Optional | string |  |

