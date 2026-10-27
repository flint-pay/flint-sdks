[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantInput

The business accepting payments.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. |
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
| `metadata` | Optional | Map of string |  |
| `organization` | Optional | [ExpandedOrganizationSummaryInput](../models/ExpandedOrganizationSummaryInput.md#expandedorganizationsummaryinput) or null |  |
| `organization_id` | Optional | string |  |
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

