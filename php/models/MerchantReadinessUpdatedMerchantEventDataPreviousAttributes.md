[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The merchant's business address. `address`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesaddress). |
| `api_version` | Optional | string or null | Default API version for requests without a Flint-Version header. Shared across live and test environments. `api_version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version). |
| `api_version_changed_at` | Optional | string or null | When the merchant's default API version last changed. `api_version_changed_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_changed_at). |
| `api_version_pinned_at` | Optional | string or null | When the merchant's default API version was first set. `api_version_pinned_at`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesapi_version_pinned_at). |
| `api_version_previous` | Optional | string or null | Previous API version, present while a supported rollback is available. `api_version_previous`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_previous). |
| `api_version_rollback_expires_at` | Optional | string or null | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. `api_version_rollback_expires_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesapi_version_rollback_expires_at). |
| `business_name` | Optional | string or null | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. `business_name`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_name). |
| `business_type` | Optional | string or null | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. `business_type`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesbusiness_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `email` | Optional | string or null | The account's contact email address. A new account starts with the sign-up email. `null` when none is set. `email`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesemail). |
| `icon` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. `icon`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesicon). |
| `logo` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The merchant's public brand mark. `logo`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributeslogo). |
| `merchant_id` | Optional | string or null | Stable identifier of the merchant. `merchant_id`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `phone` | Optional | string or null | The account's contact phone number, in international format such as +12125551234. `phone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesphone). |
| `readiness` | Optional | [MerchantReadinessPreviousAttributes](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributes) or null | Whether the merchant can accept payments and receive payouts, and what is still needed. `readiness`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesreadiness). |
| `status` | Optional | string or null | Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. `status`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributesstatus). |
| `support_email` | Optional | string or null | Support email address shown to buyers, for example on receipts and checkout. `support_email`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_email). |
| `support_phone` | Optional | string or null | Support phone number shown to buyers, in international format such as +12125551234. `support_phone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_phone). |
| `support_url` | Optional | string or null | Support page shown to buyers. `support_url`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributessupport_url). |
| `timezone` | Optional | string or null | Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone. `timezone`: [declared alternatives](../models/MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.md#merchantreadinessupdatedmerchanteventdatapreviousattributestimezone). |
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

- Value shape: string. The account's contact email address. A new account starts with the sign-up email. `null` when none is set. 

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
| `capabilities` | Conditional | Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes) or null | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities). |
| `observed_at` | Conditional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `payments` | Conditional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to accept payments. `payments`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayments). |
| `payouts` | Conditional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to receive payouts. `payouts`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayouts). |
| `requirements` | Conditional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. `requirements`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesrequirements). |
| `review_blocks_captures` | Conditional | boolean or null | `review_blocks_captures`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesreview_blocks_captures). |

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1

anyOf MerchantReadinessPreviousAttributes.

- Optional: `capabilities`, `observed_at`, `payments`, `payouts`, `requirements`, `review_blocks_captures`.

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 2

anyOf variant 2.

- Undeclared: `capabilities`, `observed_at`, `payments`, `payouts`, `requirements`, `review_blocks_captures`.
- Value shape: null. Whether the merchant can accept payments and receive payouts, and what is still needed. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.capabilities

Declared alternatives: [MerchantReadinessPreviousAttributes.capabilities](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.observed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payments

Declared alternatives: [MerchantReadinessPreviousAttributes.payments](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayments).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.payouts

Declared alternatives: [MerchantReadinessPreviousAttributes.payouts](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayouts).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.requirements

Declared alternatives: [MerchantReadinessPreviousAttributes.requirements](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesrequirements).

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.readiness variant 1.review_blocks_captures

Declared alternatives: [MerchantReadinessPreviousAttributes.review_blocks_captures](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesreview_blocks_captures).

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

anyOf variant 1: Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone..

- Value shape: string. Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone. 

### MerchantReadinessUpdatedMerchantEventDataPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone. 

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

