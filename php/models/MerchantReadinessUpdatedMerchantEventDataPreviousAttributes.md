[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) or null | The merchant's business address. |
| `api_version` | Optional | string or null | Default API version for requests without a Flint-Version header. Shared across live and test environments. `api_version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version). |
| `api_version_changed_at` | Optional | string or null | When the merchant's default API version last changed. `api_version_changed_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_changed_at). |
| `api_version_pinned_at` | Optional | string or null | When the merchant's default API version was first set. `api_version_pinned_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_pinned_at). |
| `api_version_previous` | Optional | string or null | Previous API version, present while a supported rollback is available. `api_version_previous`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous). |
| `api_version_rollback_expires_at` | Optional | string or null | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. `api_version_rollback_expires_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at). |
| `business_name` | Optional | string or null | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. `business_name`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_name). |
| `business_type` | Optional | string or null | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. `business_type`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `email` | Optional | string or null or null | The account's contact email address. A new account starts with the sign-up email. `null` when none is set. `email`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesemail). |
| `icon` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. |
| `logo` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | The merchant's public brand mark. |
| `merchant_id` | Optional | string or null | Stable identifier of the merchant. `merchant_id`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `phone` | Optional | string or null | The account's contact phone number, in international format such as +12125551234. `phone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesphone). |
| `readiness` | Optional | [MerchantReadiness](../models/MerchantReadiness.md#merchantreadiness) or null | Whether the merchant can accept payments and receive payouts, and what is still needed. |
| `status` | Optional | string or null | Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. `status`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesstatus). |
| `support_email` | Optional | string or null | Support email address shown to buyers, for example on receipts and checkout. `support_email`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_email). |
| `support_phone` | Optional | string or null | Support phone number shown to buyers, in international format such as +12125551234. `support_phone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_phone). |
| `support_url` | Optional | string or null | Support page shown to buyers. `support_url`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_url). |
| `timezone` | Optional | string or null | Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. `timezone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributestimezone). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. `version`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesversion). |
| `website_url` | Optional | string or null | The business's website. `website_url`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributeswebsite_url). |

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_changed_at

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_changed_at variant 1

anyOf variant 1: When the merchant's default API version last changed..

- Value shape: string. When the merchant's default API version last changed. When the merchant's default API version last changed. Format: `date-time`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_changed_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant's default API version last changed. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_pinned_at

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_pinned_at variant 1

anyOf variant 1: When the merchant's default API version was first set..

- Value shape: string. When the merchant's default API version was first set. When the merchant's default API version was first set. Format: `date-time`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_pinned_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant's default API version was first set. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_previous

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.api_version_rollback_expires_at

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_name

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_name variant 1

anyOf variant 1: Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins..

- Value shape: string. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_name variant 2

anyOf variant 2.

- Value shape: null. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_type

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_type variant 1

anyOf variant 1: Merchant's business type.
- `other`: A business type Flint does not map yet..

- Value shape: string. Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.business_type variant 2

anyOf variant 2.

- Value shape: null. Merchant's business type. - `other`: A business type Flint does not map yet. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.email

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.email variant 1

anyOf variant 1: The account's contact email address. A new account starts with the sign-up email. `null` when none is set..

- Value shape: (string or null). The account's contact email address. A new account starts with the sign-up email. `null` when none is set. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. The account's contact email address. A new account starts with the sign-up email. `null` when none is set. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.merchant_id

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Stable identifier of the merchant..

- Value shape: string. Stable identifier of the merchant. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the merchant. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.phone

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.phone variant 1

anyOf variant 1: The account's contact phone number, in international format such as +12125551234..

- Value shape: string. The account's contact phone number, in international format such as +12125551234. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. The account's contact phone number, in international format such as +12125551234. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.status

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether Flint lets the account operate. `readiness` says whether payments and payouts are available..

- Value shape: string. Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_email

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_email variant 1

anyOf variant 1: Support email address shown to buyers, for example on receipts and checkout..

- Value shape: string. Support email address shown to buyers, for example on receipts and checkout. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_email variant 2

anyOf variant 2.

- Value shape: null. Support email address shown to buyers, for example on receipts and checkout. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_phone

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_phone variant 1

anyOf variant 1: Support phone number shown to buyers, in international format such as +12125551234..

- Value shape: string. Support phone number shown to buyers, in international format such as +12125551234. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_phone variant 2

anyOf variant 2.

- Value shape: null. Support phone number shown to buyers, in international format such as +12125551234. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_url

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_url variant 1

anyOf variant 1: Support page shown to buyers..

- Value shape: string. Support page shown to buyers. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.support_url variant 2

anyOf variant 2.

- Value shape: null. Support page shown to buyers. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.timezone

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.timezone variant 1

anyOf variant 1: Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone..

- Value shape: string. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.version

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not..

- Value shape: integer. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: `int64`. minimum: `1`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.website_url

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.website_url variant 1

anyOf variant 1: The business's website..

- Value shape: string. The business's website. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.website_url variant 2

anyOf variant 2.

- Value shape: null. The business's website. 

