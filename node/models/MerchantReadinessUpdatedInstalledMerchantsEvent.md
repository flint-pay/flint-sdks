[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedInstalledMerchantsEvent

The `merchant.readiness_updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"merchant.readiness_updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### MerchantReadinessUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookMerchant](../models/WebhookMerchant.md#webhookmerchant) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`. `object`: [field definitions](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributes). |

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `banners`, `timezone_inferred`.

Field definitions: [shared fields](WebhookMerchant.md#webhookmerchant).

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CancelOrderEditResult.order.metadata](../models/CancelOrderEditResult.md#cancelordereditresultordermetadata).

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The merchant's business address. |
| `api_version` | Optional | string or null | Default API version for requests without a Flint-Version header. Shared across live and test environments. `api_version`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version). |
| `api_version_changed_at` | Optional | string or null | When the merchant's default API version last changed. `api_version_changed_at`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_changed_at). |
| `api_version_pinned_at` | Optional | string or null | When the merchant's default API version was first set. `api_version_pinned_at`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_pinned_at). |
| `api_version_previous` | Optional | string or null | Previous API version, present while a supported rollback is available. `api_version_previous`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_previous). |
| `api_version_rollback_expires_at` | Optional | string or null | When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. `api_version_rollback_expires_at`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesapi_version_rollback_expires_at). |
| `business_name` | Optional | string or null | Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. `business_name`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesbusiness_name). |
| `business_type` | Optional | string or null | Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`. `business_type`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesbusiness_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `email` | Optional | string or null | The account's contact email address. A new account starts with the sign-up email. `null` when none is set. `email`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesemail). |
| `icon` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | A square image, at least 128 by 128 pixels, shown where the store needs a small mark: browser tabs and compact headers. |
| `logo` | Optional | [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | The merchant's public brand mark. |
| `merchant_id` | Optional | string or null | Stable identifier of the merchant. `merchant_id`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `phone` | Optional | string or null | The account's contact phone number, in international format such as +12125551234. `phone`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesphone). |
| `readiness` | Optional | [MerchantReadinessPreviousAttributes](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributes) or null | Whether the merchant can accept payments and receive payouts, and what is still needed. |
| `status` | Optional | string or null | Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`. `status`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `support_email` | Optional | string or null | Support email address shown to buyers, for example on receipts and checkout. `support_email`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributessupport_email). |
| `support_phone` | Optional | string or null | Support phone number shown to buyers, in international format such as +12125551234. `support_phone`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributessupport_phone). |
| `support_url` | Optional | string or null | Support page shown to buyers. `support_url`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributessupport_url). |
| `timezone` | Optional | string or null | Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone. `timezone`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributestimezone). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. `version`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributesversion). |
| `website_url` | Optional | string or null | The business's website. `website_url`: [declared alternatives](../models/MerchantReadinessUpdatedInstalledMerchantsEvent.md#merchantreadinessupdatedinstalledmerchantseventdataprevious_attributeswebsite_url). |

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version variant 1

anyOf variant 1: Default API version for requests without a Flint-Version header. Shared across live and test environments..

- Value shape: string. Default API version for requests without a Flint-Version header. Shared across live and test environments. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version variant 2

anyOf variant 2.

- Value shape: null. Default API version for requests without a Flint-Version header. Shared across live and test environments. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_changed_at

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_changed_at variant 1

anyOf variant 1: When the merchant's default API version last changed..

- Value shape: string. When the merchant's default API version last changed. When the merchant's default API version last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_changed_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant's default API version last changed. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_pinned_at

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_pinned_at variant 1

anyOf variant 1: When the merchant's default API version was first set..

- Value shape: string. When the merchant's default API version was first set. When the merchant's default API version was first set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_pinned_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant's default API version was first set. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_previous

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_previous variant 1

anyOf variant 1: Previous API version, present while a supported rollback is available..

- Value shape: string. Previous API version, present while a supported rollback is available. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_previous variant 2

anyOf variant 2.

- Value shape: null. Previous API version, present while a supported rollback is available. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_rollback_expires_at

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_rollback_expires_at variant 1

anyOf variant 1: When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward..

- Value shape: string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.api_version_rollback_expires_at variant 2

anyOf variant 2.

- Value shape: null. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.business_name

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.business_name variant 1

anyOf variant 1: Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins..

- Value shape: string. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.business_name variant 2

anyOf variant 2.

- Value shape: null. Business name buyers see on checkout, payment links, and receipts. Once the merchant starts verification, it stays in sync with the business name on the live Stripe account: a change on either side applies, and the latest change wins. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.business_type

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.business_type variant 1

anyOf variant 1: Merchant's business type.
- `other`: A business type Flint does not map yet..

- Value shape: string. Merchant's business type. - `other`: A business type Flint does not map yet. Values: `"individual"`, `"company"`, `"non_profit"`, `"government_entity"`, `"other"`.

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.business_type variant 2

anyOf variant 2.

- Value shape: null. Merchant's business type. - `other`: A business type Flint does not map yet. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.email

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.email variant 1

anyOf variant 1: The account's contact email address. A new account starts with the sign-up email. `null` when none is set..

- Value shape: string. The account's contact email address. A new account starts with the sign-up email. `null` when none is set. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.email variant 2

anyOf variant 2.

- Value shape: null. The account's contact email address. A new account starts with the sign-up email. `null` when none is set. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Stable identifier of the merchant..

- Value shape: string. Stable identifier of the merchant. Stable identifier of the merchant. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the merchant. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.phone

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.phone variant 1

anyOf variant 1: The account's contact phone number, in international format such as +12125551234..

- Value shape: string. The account's contact phone number, in international format such as +12125551234. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.phone variant 2

anyOf variant 2.

- Value shape: null. The account's contact phone number, in international format such as +12125551234. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether Flint lets the account operate. `readiness` says whether payments and payouts are available..

- Value shape: string. Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. Values: `"active"`, `"suspended"`, `"restricted"`, `"closed"`.

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether Flint lets the account operate. `readiness` says whether payments and payouts are available. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_email

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_email variant 1

anyOf variant 1: Support email address shown to buyers, for example on receipts and checkout..

- Value shape: string. Support email address shown to buyers, for example on receipts and checkout. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_email variant 2

anyOf variant 2.

- Value shape: null. Support email address shown to buyers, for example on receipts and checkout. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_phone

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_phone variant 1

anyOf variant 1: Support phone number shown to buyers, in international format such as +12125551234..

- Value shape: string. Support phone number shown to buyers, in international format such as +12125551234. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_phone variant 2

anyOf variant 2.

- Value shape: null. Support phone number shown to buyers, in international format such as +12125551234. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_url

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_url variant 1

anyOf variant 1: Support page shown to buyers..

- Value shape: string. Support page shown to buyers. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.support_url variant 2

anyOf variant 2.

- Value shape: null. Support page shown to buyers. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.timezone

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.timezone variant 1

anyOf variant 1: Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone..

- Value shape: string. Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant returns a zone inferred from live business geography when one is available, and omits the field otherwise. Existing resources keep their saved time zone. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.version

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not..

- Value shape: integer. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. Format: `int64`. minimum: `1`. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Merchant version. Profile, status, and API version changes advance this version, including business name and business type changes synced from the payment provider. Readiness updates alone do not. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.website_url

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.website_url variant 1

anyOf variant 1: The business's website..

- Value shape: string. The business's website. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.data.previous_attributes.website_url variant 2

anyOf variant 2.

- Value shape: null. The business's website. 

### MerchantReadinessUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

