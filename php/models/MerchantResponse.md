[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantResponse

A response containing `Merchant` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Merchant](../models/Merchant.md#merchant) | Resource, collection, or operation result returned by this request. The business accepting payments. `data`: [field definitions](../models/MerchantResponse.md#merchantresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantResponse.data

Resource, collection, or operation result returned by this request. The business accepting payments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | The merchant's business address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/MerchantResponse.md#merchantresponsedataaddress). |
| `api_version` | Optional | string | Default API version for requests without a Flint-Version header. Shared across live and test environments. |
| `api_version_changed_at` | Optional | string | When the merchant's default API version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `api_version_pinned_at` | Optional | string | When the merchant's default API version was first set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `api_version_previous` | Optional | string | Previous API version, present while a supported rollback is available. |
| `api_version_rollback_expires_at` | Optional | string | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `business_name` | Optional | string | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. |
| `business_type` | Optional | string | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `email` | Required | string or null | The account's contact email address. A new account starts with the sign-up email. `null` when none is set. |
| `icon` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata. `icon`: [field definitions](../models/MerchantResponse.md#merchantresponsedataicon). |
| `logo` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) | The merchant's public brand mark. An image attached to a resource, with its display properties and attachment metadata. `logo`: [field definitions](../models/MerchantResponse.md#merchantresponsedatalogo). |
| `merchant_id` | Required | string | Stable identifier of the merchant. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `phone` | Optional | string | The account's contact phone number, in international format such as +12125551234. |
| `readiness` | Required | [MerchantReadiness](../models/MerchantReadiness.md#merchantreadiness) | Whether the merchant can accept payments and receive payouts, and what is still needed. A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements. `readiness`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadiness). |
| `status` | Required | string | Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. |
| `support_email` | Optional | string | Support email address shown to buyers, for example on receipts and checkout. |
| `support_phone` | Optional | string | Support phone number shown to buyers, in international format such as +12125551234. |
| `support_url` | Optional | string | Support page shown to buyers. |
| `timezone` | Optional | string | Business IANA time zone, such as America/New_York. Used for invoice deadlines, new locations, notifications, and reporting when a request omits its time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time zone. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: `int64`. minimum: `1`. |
| `website_url` | Optional | string | The business's website. |

### MerchantResponse.data.address

The merchant's business address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### MerchantResponse.data.icon

A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. An image attached to a resource, with its display properties and attachment metadata.

Field definitions: [shared fields](ImageAttachmentInput.md#imageattachmentinput).

### MerchantResponse.data.logo

The merchant's public brand mark. An image attached to a resource, with its display properties and attachment metadata.

Field definitions: [shared fields](ImageAttachmentInput.md#imageattachmentinput).

### MerchantResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### MerchantResponse.data.readiness

Whether the merchant can accept payments and receive payouts, and what is still needed. A merchant's readiness to accept payments and receive payouts, with per-capability status and outstanding requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [CapabilityReadiness](../models/CapabilityReadiness.md#capabilityreadiness) | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. |
| `observed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payments` | Required | [ReadinessAxis](../models/ReadinessAxis.md#readinessaxis) | Readiness to accept payments. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `payouts` | Required | [ReadinessAxis](../models/ReadinessAxis.md#readinessaxis) | Readiness to receive payouts. Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it. |
| `requirements` | Required | [ReadinessRequirements](../models/ReadinessRequirements.md#readinessrequirements) | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. `requirements`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadinessrequirements). |

### MerchantResponse.data.readiness.requirements

Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `disabled_reason` | Optional | string | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#merchantresponsedatareadinessrequirements-disabled_reason-values). |
| `due_at` | Optional | string | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `eventually_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `past_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `pending_verification` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `rejected_by` | Optional | string | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. |

#### MerchantResponse.data.readiness.requirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### MerchantResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

