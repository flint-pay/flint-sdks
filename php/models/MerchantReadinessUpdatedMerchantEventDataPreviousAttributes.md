[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | Alternative shapes (see declared variants) | The merchant's business address. `address`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesaddress). |
| `api_version` | Optional | string or null | Default API version for requests without a Flint-Version header. Shared across live and test environments. `api_version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version). |
| `api_version_changed_at` | Optional | string or null | When the merchant's default API version last changed. `api_version_changed_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_changed_at). |
| `api_version_pinned_at` | Optional | string or null | When the merchant's default API version was first set. `api_version_pinned_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_pinned_at). |
| `api_version_previous` | Optional | string or null | Previous API version, present while a supported rollback is available. `api_version_previous`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous). |
| `api_version_rollback_expires_at` | Optional | string or null | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. `api_version_rollback_expires_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at). |
| `business_name` | Optional | string or null | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. `business_name`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_name). |
| `business_type` | Optional | string or null | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. `business_type`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `email` | Optional | string or null or null | The account's contact email address. A new account starts with the sign-up email. `null` when none is set. `email`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesemail). |
| `icon` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. `icon`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesicon). |
| `logo` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The merchant's public brand mark. `logo`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributeslogo). |
| `merchant_id` | Optional | string or null | Stable identifier of the merchant. `merchant_id`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `phone` | Optional | string or null | The account's contact phone number, in international format such as +12125551234. `phone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesphone). |
| `readiness` | Optional | Alternative shapes (see declared variants) | Whether the merchant can accept payments and receive payouts, and what is still needed. `readiness`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness). |
| `status` | Optional | string or null | Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. `status`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesstatus). |
| `support_email` | Optional | string or null | Support email address shown to buyers, for example on receipts and checkout. `support_email`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_email). |
| `support_phone` | Optional | string or null | Support phone number shown to buyers, in international format such as +12125551234. `support_phone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_phone). |
| `support_url` | Optional | string or null | Support page shown to buyers. `support_url`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_url). |
| `timezone` | Optional | string or null | Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox Locations do not set the business time zone. Existing resources keep their saved time zone. `timezone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributestimezone). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. `version`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesversion). |
| `website_url` | Optional | string or null | The business's website. `website_url`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributeswebsite_url). |

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address

The merchant's business address.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The merchant's business address. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

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

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon

A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Conditional | string or null | Alternative text describing the image for accessibility. `alt`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt). |
| `file_id` | Conditional | string or null | Identifier of the file attached as this image. `file_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1file_id). |
| `height` | Conditional | integer or null | Image height in pixels, when known. `height`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight). |
| `source_reference` | Conditional | string or null | Caller-owned reference identifying this attachment within its gallery. `source_reference`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributessource_reference). |
| `url` | Conditional | string or null | URL of the image. `url`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl). |
| `width` | Conditional | integer or null | Image width in pixels, when known. `width`: [declared alternatives](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth). |

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1

anyOf ImageAttachmentPreviousAttributes.

- Optional: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 2

anyOf variant 2.

- Undeclared: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.
- Value shape: null. A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1.file_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1.file_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1file_id).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1.source_reference

Declared alternatives: [ImageAttachmentPreviousAttributes.source_reference](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributessource_reference).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.icon variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo

The merchant's public brand mark.

Field definitions: [shared fields](#merchantreadinessupdatedmerchanteventdatapreviousattributesicon).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1

anyOf ImageAttachmentPreviousAttributes.

- Optional: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 2

anyOf variant 2.

- Undeclared: `alt`, `file_id`, `height`, `source_reference`, `url`, `width`.
- Value shape: null. The merchant's public brand mark. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1.file_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1.file_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages-variant-1-fields-1file_id).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1.source_reference

Declared alternatives: [ImageAttachmentPreviousAttributes.source_reference](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributessource_reference).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.logo variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

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

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness

Whether the merchant can accept payments and receive payouts, and what is still needed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Conditional | Array of object or null | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities). |
| `observed_at` | Conditional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `payments` | Conditional | Alternative shapes (see declared variants) | Readiness to accept payments. `payments`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payments). |
| `payouts` | Conditional | Alternative shapes (see declared variants) | Readiness to receive payouts. `payouts`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payouts). |
| `requirements` | Conditional | Alternative shapes (see declared variants) | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. `requirements`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1requirements). |

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1

anyOf MerchantReadinessPreviousAttributes.

- Optional: `capabilities`, `observed_at`, `payments`, `payouts`, `requirements`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 2

anyOf variant 2.

- Undeclared: `capabilities`, `observed_at`, `payments`, `payouts`, `requirements`.
- Value shape: null. Whether the merchant can accept payments and receive payouts, and what is still needed. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1

anyOf variant 1: Readiness of each payment and money movement capability, with its own status, requirements, and next actions..

- Value shape: Array of object. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 2

anyOf variant 2.

- Value shape: null. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string or null | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1-capability-values). `capability`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1capability). |
| `domain` | Optional | string or null | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. `domain`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1domain). |
| `next_actions` | Optional | Array of object or null | Actions that can remediate or refresh this capability when Flint can suggest one. `next_actions`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions). |
| `requirements` | Optional | Alternative shapes (see declared variants) | Merchant requirements that affect this capability. `requirements`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements). |
| `status` | Optional | string or null | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1status). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1status_reason). |

#### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1 capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.capability

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.capability variant 1

anyOf variant 1: Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness..

- Value shape: string. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: `"accept_card_payments"`, `"save_payment_methods"`, `"accept_affirm_payments"`, `"accept_ach_debit_payments"`, `"receive_payouts"`, `"create_standard_payouts"`, `"manage_payout_destinations"`, `"manage_payout_settings"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.capability variant 2

anyOf variant 2.

- Value shape: null. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.domain

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.domain variant 1

anyOf variant 1: Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts..

- Value shape: string. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.domain variant 2

anyOf variant 2.

- Value shape: null. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1

anyOf variant 1: Actions that can remediate or refresh this capability when Flint can suggest one..

- Value shape: Array of object. Actions that can remediate or refresh this capability when Flint can suggest one. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can remediate or refresh this capability when Flint can suggest one. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Optional | string or null | The kind of step to take. Each value says what the step is and who carries it out. Values: [7 declared values](#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions-variant-1-fields-1-action_type-values). `action_type`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions-variant-1-fields-1action_type). |
| `merchant_account_session` | Optional | Alternative shapes (see declared variants) | Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. `merchant_account_session`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions-variant-1-fields-1merchant_account_session). |
| `owner` | Optional | string or null | Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`. `owner`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions-variant-1-fields-1owner). |
| `required_fields` | Optional | Array of string or null | Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. `required_fields`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions-variant-1-fields-1required_fields). |

#### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1 action_type values

- `"advance_onboarding"`
- `"create_merchant_account_session"`
- `"wait_for_review"`
- `"settle_flint_balance"`
- `"set_tax_category"`
- `"contact_support"`
- `"other"`

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.action_type

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.action_type variant 1

anyOf variant 1: The kind of step to take. Each value says what the step is and who carries it out..

- Value shape: string. The kind of step to take. Each value says what the step is and who carries it out. Values: `"advance_onboarding"`, `"create_merchant_account_session"`, `"wait_for_review"`, `"settle_flint_balance"`, `"set_tax_category"`, `"contact_support"`, `"other"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.action_type variant 2

anyOf variant 2.

- Value shape: null. The kind of step to take. Each value says what the step is and who carries it out. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session

Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged.

Field definitions: [shared fields](CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1

anyOf ReadinessMerchantAccountSessionPreviousAttributes.

- Optional: `collection_strategy`, `components`, `future_requirements`, `targeted_requirements`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session variant 2

anyOf variant 2.

- Undeclared: `collection_strategy`, `components`, `future_requirements`, `targeted_requirements`.
- Value shape: null. Request body for `POST /v1/merchant-account-sessions`, on a `create_merchant_account_session` action. Send it unchanged. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.collection_strategy

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.collection_strategy](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1collection_strategy).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.components

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.components](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1components).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.future_requirements

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.future_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1future_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.owner

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.owner variant 1

anyOf variant 1: Who has to act on this step..

- Value shape: string. Who has to act on this step. Values: `"integrator"`, `"merchant"`, `"flint"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.owner variant 2

anyOf variant 2.

- Value shape: null. Who has to act on this step. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.required_fields

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.required_fields variant 1

anyOf variant 1: Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare..

- Value shape: Array of string. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1.required_fields variant 2

anyOf variant 2.

- Value shape: null. Paths in the action's target request body, using dotted JSON paths from the request root. For advance_onboarding, profile fields use profile.website_url, profile.support_email, profile.support_phone and profile.support_url. Top-level inputs such as country, requested_capabilities and name stay bare. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements

Merchant requirements that affect this capability.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `currently_due`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `disabled_reason` | Conditional | string or null | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1disabled_reason). |
| `due_at` | Conditional | string or null | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. `due_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1due_at). |
| `eventually_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `eventually_due`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `past_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `past_due`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `pending_verification` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `pending_verification`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `rejected_by` | Conditional | string or null | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. `rejected_by`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1rejected_by). |
| `upcoming_due` | Conditional | Array of string or null | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. `upcoming_due`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1upcoming_due). |
| `upcoming_due_at` | Conditional | string or null | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. `upcoming_due_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1upcoming_due_at). |

#### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1

anyOf ReadinessRequirementsPreviousAttributes.

- Optional: `currently_due`, `disabled_reason`, `due_at`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 2

anyOf variant 2.

- Undeclared: `currently_due`, `disabled_reason`, `due_at`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.
- Value shape: null. Merchant requirements that affect this capability. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.currently_due

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.disabled_reason

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.disabled_reason variant 1

anyOf variant 1: Why the account is disabled. Omitted when it isn't..

- Value shape: string. Why the account is disabled. Omitted when it isn't. Values: `"account_attention_required"`, `"account_paused"`, `"account_rejected"`, `"account_requirements_due"`, `"account_under_review"`, `"requirements_past_due"`, `"requirements_pending_verification"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.disabled_reason variant 2

anyOf variant 2.

- Value shape: null. Why the account is disabled. Omitted when it isn't. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.due_at

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.due_at variant 1

anyOf variant 1: Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set..

- Value shape: string. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.eventually_due

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.past_due

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.pending_verification

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.rejected_by

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.rejected_by variant 1

anyOf variant 1: Who rejected the account. Present only when `disabled_reason` is `account_rejected`..

- Value shape: string. Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.rejected_by variant 2

anyOf variant 2.

- Value shape: null. Who rejected the account. Present only when `disabled_reason` is `account_rejected`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due variant 1

anyOf variant 1: Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information..

- Value shape: Array of string. Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due variant 2

anyOf variant 2.

- Value shape: null. Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due_at

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due_at variant 1

anyOf variant 1: Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled..

- Value shape: string. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status variant 1

anyOf variant 1: Current readiness status for this capability..

- Value shape: string. Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status variant 2

anyOf variant 2.

- Value shape: null. Current readiness status for this capability. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status_reason

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status_reason variant 1

anyOf variant 1: Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies..

- Value shape: string. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: `"provisioning"`, `"onboarding_not_started"`, `"requirements_due"`, `"requirements_past_due"`, `"pending_verification"`, `"account_rejected"`, `"disabled_by_platform_policy"`, `"billing_suspended"`, `"platform_review"`, `"processing_not_enabled"`, `"platform_funding_unavailable"`, `"tax_category_required"`, `"service_unavailable"`, `"payment_option_access_not_provisioned"`, `"payment_option_activation_pending"`, `"payment_option_not_in_plan"`, `"payment_option_not_available"`, `"capability_not_active"`, `"other"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.observed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments

Readiness to accept payments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Conditional | Array of object or null | Steps that move this area toward `ready`. Empty when there is nothing to do. `next_actions`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payments-variant-1next_actions). |
| `status` | Conditional | string or null | Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payments-variant-1status). |
| `status_reason` | Conditional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1status_reason). |

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1

anyOf ReadinessAxisPreviousAttributes.

- Optional: `next_actions`, `status`, `status_reason`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 2

anyOf variant 2.

- Undeclared: `next_actions`, `status`, `status_reason`.
- Value shape: null. Readiness to accept payments. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.next_actions

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.next_actions variant 1

anyOf variant 1: Steps that move this area toward `ready`. Empty when there is nothing to do..

- Value shape: Array of object. Steps that move this area toward `ready`. Empty when there is nothing to do. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.next_actions variant 2

anyOf variant 2.

- Value shape: null. Steps that move this area toward `ready`. Empty when there is nothing to do. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.next_actions variant 1.[] fields 1

Field definitions: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.next_actions variant 1.[] fields 1](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1next_actions-variant-1-fields-1).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.status

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.status variant 1

anyOf variant 1: Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`..

- Value shape: string. Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.status_reason

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status_reason](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1status_reason).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts

Readiness to receive payouts.

Field definitions: [shared fields](#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payments).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts variant 1

anyOf ReadinessAxisPreviousAttributes.

- Optional: `next_actions`, `status`, `status_reason`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts variant 2

anyOf variant 2.

- Undeclared: `next_actions`, `status`, `status_reason`.
- Value shape: null. Readiness to receive payouts. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts variant 1.next_actions

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.next_actions](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payments-variant-1next_actions).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts variant 1.status

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments variant 1.status](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1payments-variant-1status).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts variant 1.status_reason

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.status_reason](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1status_reason).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements

Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `currently_due`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `disabled_reason` | Conditional | string or null | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1requirements-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1disabled_reason). |
| `due_at` | Conditional | string or null | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. `due_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1due_at). |
| `eventually_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `eventually_due`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `past_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `past_due`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `pending_verification` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `pending_verification`: [declared alternatives](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements). |
| `rejected_by` | Conditional | string or null | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. `rejected_by`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1rejected_by). |
| `upcoming_due` | Conditional | Array of string or null | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. `upcoming_due`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1upcoming_due). |
| `upcoming_due_at` | Conditional | string or null | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. `upcoming_due_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1upcoming_due_at). |

#### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1

anyOf ReadinessRequirementsPreviousAttributes.

- Optional: `currently_due`, `disabled_reason`, `due_at`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 2

anyOf variant 2.

- Undeclared: `currently_due`, `disabled_reason`, `due_at`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.
- Value shape: null. Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.currently_due

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.disabled_reason

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.disabled_reason](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1disabled_reason).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.due_at

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.due_at](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1due_at).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.eventually_due

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.past_due

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.pending_verification

Declared alternatives: [CheckoutProblemResourcePreviousAttributes.remediation variant 1.next_actions variant 1.[] fields 1.merchant_account_session variant 1.targeted_requirements](../models/CheckoutProblemResourcePreviousAttributes.md#checkoutproblemresourcepreviousattributesremediation-variant-1next_actions-variant-1-fields-1merchant_account_session-variant-1targeted_requirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.rejected_by

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.rejected_by](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1rejected_by).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.upcoming_due

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1upcoming_due).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements variant 1.upcoming_due_at

Declared alternatives: [MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities variant 1.[] fields 1.requirements variant 1.upcoming_due_at](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness-variant-1capabilities-variant-1-fields-1requirements-variant-1upcoming_due_at).

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

anyOf variant 1: Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox Locations do not set the business time zone. Existing resources keep their saved time zone..

- Value shape: string. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox Locations do not set the business time zone. Existing resources keep their saved time zone. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies until the first live Location sets it. Sandbox Locations do not set the business time zone. Existing resources keep their saved time zone. 

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

