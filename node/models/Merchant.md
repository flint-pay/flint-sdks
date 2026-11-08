[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Merchant

The business accepting payments.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | The merchant's business address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `api_version` | Optional | string | Default API version for requests without a Flint-Version header. Shared across live and test environments. |
| `api_version_changed_at` | Optional | string | When the merchant's default API version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `api_version_pinned_at` | Optional | string | When the merchant's default API version was first set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `api_version_previous` | Optional | string | Previous API version, present while a supported rollback is available. |
| `api_version_rollback_expires_at` | Optional | string | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `business_name` | Optional | string | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. |
| `business_type` | Optional | string | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `email` | Required | string or null | The account's contact email address. A new account starts with the sign-up email. `null` when none is set. |
| `icon` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata. |
| `logo` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | The merchant's public brand mark. An image attached to a resource, with its display properties and attachment metadata. |
| `merchant_id` | Required | string | Stable identifier of the merchant. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CheckoutSession.md#checkoutsessionmetadata). |
| `phone` | Optional | string | The account's contact phone number, in international format such as +12125551234. |
| `readiness` | Required | [MerchantReadiness](../models/MerchantReadiness.md#merchantreadiness) | Whether the merchant can accept payments and receive payouts, and what is still needed. A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements. |
| `status` | Required | string | Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. |
| `support_email` | Optional | string | Support email address shown to buyers, for example on receipts and checkout. |
| `support_phone` | Optional | string | Support phone number shown to buyers, in international format such as +12125551234. |
| `support_url` | Optional | string | Support page shown to buyers. |
| `timezone` | Optional | string | Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: `int64`. minimum: `1`. |
| `website_url` | Optional | string | The business's website. |

### Merchant.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

