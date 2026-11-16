[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformApprovedEvent

The `partner_app.platform_approved` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PartnerAppPlatformApprovedEventData](../models/PartnerAppPlatformApprovedEventData.md#partnerappplatformapprovedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"partner_app.platform_approved"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PartnerAppPlatformApprovedEventRequest](../models/PartnerAppPlatformApprovedEventRequest.md#partnerappplatformapprovedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PartnerAppPlatformApprovedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributes). |

### PartnerAppPlatformApprovedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PartnerApp.md#partnerapp).

### PartnerAppPlatformApprovedEvent.data fields 1.object.merchant_action_routing

Field definitions: [PartnerAppResponse.data.merchant_action_routing](../models/PartnerAppResponse.md#partnerappresponsedatamerchant_action_routing).

### PartnerAppPlatformApprovedEvent.data fields 1.object.payment_splits

Field definitions: [PartnerAppResponse.data.payment_splits](../models/PartnerAppResponse.md#partnerappresponsedatapayment_splits).

### PartnerAppPlatformApprovedEvent.data fields 1.object.permission_manifest[]

Field definitions: [PartnerAppResponse.data.permission_manifest[]](../models/PartnerAppResponse.md#partnerappresponsedatapermission_manifest).

### PartnerAppPlatformApprovedEvent.data fields 1.object.platform

Field definitions: [PartnerAppResponse.data.platform](../models/PartnerAppResponse.md#partnerappresponsedataplatform).

### PartnerAppPlatformApprovedEvent.data fields 1.object.platform_profile

Field definitions: [PartnerAppResponse.data.platform_profile](../models/PartnerAppResponse.md#partnerappresponsedataplatform_profile).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PartnerAppPlatformApprovedEventDataPreviousAttributes.md#partnerappplatformapprovedeventdatapreviousattributes).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes variant 1

anyOf variant 1: Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves..

- Value shape: Array of string. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.allowed_scopes variant 2

anyOf variant 2.

- Value shape: null. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version variant 1

anyOf variant 1: Default API version for requests without a Flint-Version header. Shared across live and test environments..

- Value shape: string. Default API version for requests without a Flint-Version header. Shared across live and test environments. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version variant 2

anyOf variant 2.

- Value shape: null. Default API version for requests without a Flint-Version header. Shared across live and test environments. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_changed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous variant 1

anyOf variant 1: Previous API version, present while a supported rollback is available..

- Value shape: string. Previous API version, present while a supported rollback is available. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_previous variant 2

anyOf variant 2.

- Value shape: null. Previous API version, present while a supported rollback is available. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at variant 1

anyOf variant 1: When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward..

- Value shape: string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: `date-time`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.api_version_rollback_expires_at variant 2

anyOf variant 2.

- Value shape: null. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id variant 1

anyOf variant 1: Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change..

- Value shape: string. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_id variant 2

anyOf variant 2.

- Value shape: null. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled variant 1

anyOf variant 1: Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential..

- Value shape: boolean. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at variant 1

anyOf variant 1: When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret..

- Value shape: (string or null). When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. Format: `date-time`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.client_secret_last_used_at variant 2

anyOf variant 2.

- Value shape: null. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions variant 1

anyOf variant 1: IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional..

- Value shape: Array of string. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.default_requested_permissions variant 2

anyOf variant 2.

- Value shape: null. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing

Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Conditional | string or null | When routing switches to the current merchant_action_url. `expires_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesmerchant_action_routing-variant-1expires_at). |
| `url` | Conditional | string or null | The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. `url`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesmerchant_action_routing-variant-1url). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1

anyOf PartnerAppMerchantActionRoutingPreviousAttributes.

- Optional: `expires_at`, `url`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 2

anyOf variant 2.

- Undeclared: `expires_at`, `url`.
- Value shape: null. Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1.expires_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1.expires_at variant 1

anyOf variant 1: When routing switches to the current merchant_action_url..

- Value shape: string. When routing switches to the current merchant_action_url. When routing switches to the current merchant_action_url. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. When routing switches to the current merchant_action_url. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1.url

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1.url variant 1

anyOf variant 1: The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page..

- Value shape: string. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_routing variant 1.url variant 2

anyOf variant 2.

- Value shape: null. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url variant 1

anyOf variant 1: Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set..

- Value shape: string. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.merchant_action_url variant 2

anyOf variant 2.

- Value shape: null. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name variant 1

anyOf variant 1: The app's name, shown to merchants on the consent screen..

- Value shape: string. The app's name, shown to merchants on the consent screen. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The app's name, shown to merchants on the consent screen. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id variant 1

anyOf variant 1: Unique identifier for this partner app, prefixed `papp_`..

- Value shape: string. Unique identifier for this partner app, prefixed `papp_`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this partner app, prefixed `papp_`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.payment_splits

The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `seller_terms_url` | Conditional | string or null | The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. `seller_terms_url`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributespayment_splits-variant-1seller_terms_url). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.payment_splits variant 1

anyOf PartnerAppPaymentSplitsPreviousAttributes.

- Optional: `seller_terms_url`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.payment_splits variant 2

anyOf variant 2.

- Undeclared: `seller_terms_url`.
- Value shape: null. The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.payment_splits variant 1.seller_terms_url

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.payment_splits variant 1.seller_terms_url variant 1

anyOf variant 1: The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it..

- Value shape: string. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.payment_splits variant 1.seller_terms_url variant 2

anyOf variant 2.

- Value shape: null. The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The consent screen links it. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest variant 1

anyOf variant 1: Permissions the app can request from merchants. Each lists the Flint scopes it grants..

- Value shape: Array of [PartnerAppPermissionManifestEntryPreviousAttributes](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributes). Permissions the app can request from merchants. Each lists the Flint scopes it grants. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest variant 2

anyOf variant 2.

- Value shape: null. Permissions the app can request from merchants. Each lists the Flint scopes it grants. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.permission_manifest variant 1.[] fields 1

Field definitions: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform

The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Conditional | Array of object or null | One entry per platform capability, in the same order for every app. `capabilities`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1capabilities). |
| `current_terms` | Conditional | Alternative shapes (see declared variants) | The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. `current_terms`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1current_terms). |
| `limits` | Conditional | Alternative shapes (see declared variants) | The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. `limits`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits). |
| `requirements` | Conditional | Array of string or null | What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`. `requirements`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1requirements). |
| `reserve` | Conditional | Alternative shapes (see declared variants) | The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. `reserve`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1reserve). |
| `status` | Conditional | string or null | Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`. `status`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1status). |
| `terms_acceptance` | Conditional | Alternative shapes (see declared variants) or null | The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. `terms_acceptance`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1terms_acceptance). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1

anyOf PartnerAppPlatformPreviousAttributes.

- Optional: `capabilities`, `current_terms`, `limits`, `requirements`, `reserve`, `status`, `terms_acceptance`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 2

anyOf variant 2.

- Undeclared: `capabilities`, `current_terms`, `limits`, `requirements`, `reserve`, `status`, `terms_acceptance`.
- Value shape: null. The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1

anyOf variant 1: One entry per platform capability, in the same order for every app..

- Value shape: Array of object. One entry per platform capability, in the same order for every app. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 2

anyOf variant 2.

- Value shape: null. One entry per platform capability, in the same order for every app. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string or null | The platform capability. Values: `"platform_fees"`, `"merchant_onboarding"`, `"create_merchants"`, `"payment_splits"`. `capability`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1capabilities-variant-1-fields-1capability). |
| `inactive_reason` | Optional | string or null | Why the capability is inactive. Present only while status is inactive. Values: `"requirements_due"`, `"pending_review"`, `"not_approved"`, `"rejected"`, `"paused"`. `inactive_reason`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1capabilities-variant-1-fields-1inactive_reason). |
| `status` | Optional | string or null | Whether the capability works in live mode. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1capabilities-variant-1-fields-1status). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.capability

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.capability variant 1

anyOf variant 1: The platform capability..

- Value shape: string. The platform capability. Values: `"platform_fees"`, `"merchant_onboarding"`, `"create_merchants"`, `"payment_splits"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.capability variant 2

anyOf variant 2.

- Value shape: null. The platform capability. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.inactive_reason

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.inactive_reason variant 1

anyOf variant 1: Why the capability is inactive. Present only while status is inactive..

- Value shape: string. Why the capability is inactive. Present only while status is inactive. Values: `"requirements_due"`, `"pending_review"`, `"not_approved"`, `"rejected"`, `"paused"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.inactive_reason variant 2

anyOf variant 2.

- Value shape: null. Why the capability is inactive. Present only while status is inactive. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.status

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.status variant 1

anyOf variant 1: Whether the capability works in live mode..

- Value shape: string. Whether the capability works in live mode. Values: `"active"`, `"inactive"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.capabilities variant 1.[] fields 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether the capability works in live mode. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms

The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_due_at` | Conditional | string or null | When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. `acceptance_due_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1current_terms-variant-1acceptance_due_at). |
| `platform_terms_version` | Conditional | string or null | The current platform terms version. Send it as platform_terms_version to accept-platform-terms. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1current_terms-variant-1platform_terms_version). |
| `url` | Conditional | string or null or null | Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. `url`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1current_terms-variant-1url). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1

anyOf PartnerAppPlatformCurrentTermsPreviousAttributes.

- Optional: `acceptance_due_at`, `platform_terms_version`, `url`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 2

anyOf variant 2.

- Undeclared: `acceptance_due_at`, `platform_terms_version`, `url`.
- Value shape: null. The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.acceptance_due_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.acceptance_due_at variant 1

anyOf variant 1: When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required..

- Value shape: string. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.acceptance_due_at variant 2

anyOf variant 2.

- Value shape: null. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.platform_terms_version

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.platform_terms_version variant 1

anyOf variant 1: The current platform terms version. Send it as platform_terms_version to accept-platform-terms..

- Value shape: string. The current platform terms version. Send it as platform_terms_version to accept-platform-terms. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.platform_terms_version variant 2

anyOf variant 2.

- Value shape: null. The current platform terms version. Send it as platform_terms_version to accept-platform-terms. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.url

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.url variant 1

anyOf variant 1: Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text..

- Value shape: (string or null). Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: `uri`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.current_terms variant 1.url variant 2

anyOf variant 2.

- Value shape: null. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits

The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Conditional | integer or null | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. `live_merchant_limit`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1live_merchant_limit). |
| `monthly_volume_limit_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. `monthly_volume_limit_currency_options`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1monthly_volume_limit_currency_options). |
| `usage` | Conditional | Alternative shapes (see declared variants) | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. `usage`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1usage). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1

anyOf PartnerAppPlatformLimitsPreviousAttributes.

- Optional: `live_merchant_limit`, `monthly_volume_limit_currency_options`, `usage`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 2

anyOf variant 2.

- Undeclared: `live_merchant_limit`, `monthly_volume_limit_currency_options`, `usage`.
- Value shape: null. The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.live_merchant_limit

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.live_merchant_limit variant 1

anyOf variant 1: Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install..

- Value shape: integer. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: `int64`. minimum: `1`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.live_merchant_limit variant 2

anyOf variant 2.

- Value shape: null. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.monthly_volume_limit_currency_options

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.monthly_volume_limit_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.monthly_volume_limit_currency_options variant 2

anyOf variant 2.

- Value shape: null. Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage

The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_count` | Conditional | integer or null | Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. `live_merchant_count`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1usage-variant-1live_merchant_count). |
| `monthly_volume_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fee-bearing live volume this calendar month (UTC), keyed by currency code. `monthly_volume_currency_options`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1usage-variant-1monthly_volume_currency_options). |
| `observed_at` | Conditional | string or null | When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. `observed_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1usage-variant-1observed_at). |
| `resets_at` | Conditional | string or null | When the monthly volume starts again from zero: the start of the next calendar month, UTC. `resets_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1limits-variant-1usage-variant-1resets_at). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1

anyOf PartnerAppPlatformUsagePreviousAttributes.

- Optional: `live_merchant_count`, `monthly_volume_currency_options`, `observed_at`, `resets_at`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 2

anyOf variant 2.

- Undeclared: `live_merchant_count`, `monthly_volume_currency_options`, `observed_at`, `resets_at`.
- Value shape: null. The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.live_merchant_count

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.live_merchant_count variant 1

anyOf variant 1: Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked..

- Value shape: integer. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: `int64`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.live_merchant_count variant 2

anyOf variant 2.

- Value shape: null. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.monthly_volume_currency_options

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.monthly_volume_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Fee-bearing live volume this calendar month (UTC), keyed by currency code. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.monthly_volume_currency_options variant 2

anyOf variant 2.

- Value shape: null. Fee-bearing live volume this calendar month (UTC), keyed by currency code. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.observed_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.observed_at variant 1

anyOf variant 1: When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay..

- Value shape: string. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.resets_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.resets_at variant 1

anyOf variant 1: When the monthly volume starts again from zero: the start of the next calendar month, UTC..

- Value shape: string. When the monthly volume starts again from zero: the start of the next calendar month, UTC. When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.limits variant 1.usage variant 1.resets_at variant 2

anyOf variant 2.

- Value shape: null. When the monthly volume starts again from zero: the start of the next calendar month, UTC. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.requirements

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.requirements variant 1

anyOf variant 1: What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met..

- Value shape: Array of string. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.requirements variant 2

anyOf variant 2.

- Value shape: null. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve

The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `percent` | Conditional | number or null | Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. `percent`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1reserve-variant-1percent). |
| `release_delay_seconds` | Conditional | integer or null | How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. `release_delay_seconds`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1reserve-variant-1release_delay_seconds). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1

anyOf PartnerAppPlatformReservePreviousAttributes.

- Optional: `percent`, `release_delay_seconds`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 2

anyOf variant 2.

- Undeclared: `percent`, `release_delay_seconds`.
- Value shape: null. The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1.percent

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1.percent variant 1

anyOf variant 1: Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%..

- Value shape: number. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1.percent variant 2

anyOf variant 2.

- Value shape: null. Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1.release_delay_seconds

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1.release_delay_seconds variant 1

anyOf variant 1: How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days..

- Value shape: integer. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. Format: `int64`. minimum: `0`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.reserve variant 1.release_delay_seconds variant 2

anyOf variant 2.

- Value shape: null. How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.status

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.status variant 1

anyOf variant 1: Where the app is in platform onboarding. No value is final..

- Value shape: string. Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Where the app is in platform onboarding. No value is final. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance

The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Conditional | string or null | When Flint recorded the acceptance. `accepted_at`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1terms_acceptance-variant-1accepted_at). |
| `accepted_by` | Conditional | Alternative shapes (see declared variants) | The credential that accepted: a user for a Dashboard session, or an api_key. `accepted_by`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1terms_acceptance-variant-1accepted_by). |
| `platform_terms_version` | Conditional | string or null | The platform terms version accepted. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform-variant-1terms_acceptance-variant-1platform_terms_version). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1

anyOf variant 1: The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version.; anyOf PartnerAppPlatformTermsAcceptancePreviousAttributes.

- Optional: `accepted_at`, `accepted_by`, `platform_terms_version`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 2, 3

anyOf variant 1: The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version.; anyOf variant 2; anyOf variant 2.

- Undeclared: `accepted_at`, `accepted_by`, `platform_terms_version`.
- Value shape: null. The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_at

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_at variant 1

anyOf variant 1: When Flint recorded the acceptance..

- Value shape: string. When Flint recorded the acceptance. When Flint recorded the acceptance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the acceptance. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_by

The credential that accepted: a user for a Dashboard session, or an api_key.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_by variant 1

anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that accepted: a user for a Dashboard session, or an api_key. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_by variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.accepted_by variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.platform_terms_version

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.platform_terms_version variant 1

anyOf variant 1: The platform terms version accepted..

- Value shape: string. The platform terms version accepted. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform variant 1.terms_acceptance variant 1.platform_terms_version variant 2

anyOf variant 2.

- Value shape: null. The platform terms version accepted. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_fee_cap

The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees.

Field definitions: [shared fields](EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesplatform_fee_cap).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1

anyOf PlatformFeeCapPreviousAttributes.

- Optional: `fixed_fee_currency_options`, `maximum_fee_currency_options`, `percent`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_fee_cap variant 2

anyOf variant 2.

- Undeclared: `fixed_fee_currency_options`, `maximum_fee_currency_options`, `percent`.
- Value shape: null. The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1.fixed_fee_currency_options

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1.fixed_fee_currency_options](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesplatform_fee_cap-variant-1fixed_fee_currency_options).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1.maximum_fee_currency_options

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1.maximum_fee_currency_options](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesplatform_fee_cap-variant-1maximum_fee_currency_options).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1.percent

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.platform_fee_cap variant 1.percent](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesplatform_fee_cap-variant-1percent).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile

What the app told Flint for its platform review. Absent until set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Conditional | integer or null | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. `estimated_merchant_count`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1estimated_merchant_count). |
| `estimated_monthly_volume_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. |
| `merchant_description` | Conditional | string or null | The kinds of merchants the platform serves, in 1 to 500 characters. `merchant_description`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1merchant_description). |
| `merchant_onboarding_description` | Conditional | string or null | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. `merchant_onboarding_description`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1merchant_onboarding_description). |
| `product_description` | Conditional | string or null | What the platform's product does, in 1 to 1,000 characters. `product_description`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1product_description). |
| `support_email` | Conditional | string or null | Where the platform's merchants get support. `support_email`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1support_email). |
| `support_phone` | Conditional | string or null | Support phone number in E.164 format, such as +14155550123. Optional. `support_phone`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1support_phone). |
| `website_url` | Conditional | string or null | The platform's website, as an https URL. `website_url`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1website_url). |

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1

anyOf PartnerAppPlatformProfilePreviousAttributes.

- Optional: `estimated_merchant_count`, `estimated_monthly_volume_money`, `merchant_description`, `merchant_onboarding_description`, `product_description`, `support_email`, `support_phone`, `website_url`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 2

anyOf variant 2.

- Undeclared: `estimated_merchant_count`, `estimated_monthly_volume_money`, `merchant_description`, `merchant_onboarding_description`, `product_description`, `support_email`, `support_phone`, `website_url`.
- Value shape: null. What the app told Flint for its platform review. Absent until set. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.estimated_merchant_count

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.estimated_merchant_count variant 1

anyOf variant 1: Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000..

- Value shape: integer. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.estimated_merchant_count variant 2

anyOf variant 2.

- Value shape: null. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_description

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_description variant 1

anyOf variant 1: The kinds of merchants the platform serves, in 1 to 500 characters..

- Value shape: string. The kinds of merchants the platform serves, in 1 to 500 characters. The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_description variant 2

anyOf variant 2.

- Value shape: null. The kinds of merchants the platform serves, in 1 to 500 characters. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_onboarding_description

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_onboarding_description variant 1

anyOf variant 1: How the platform onboards and monitors its merchants, in 1 to 2,000 characters..

- Value shape: string. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_onboarding_description variant 2

anyOf variant 2.

- Value shape: null. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.product_description

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.product_description variant 1

anyOf variant 1: What the platform's product does, in 1 to 1,000 characters..

- Value shape: string. What the platform's product does, in 1 to 1,000 characters. What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.product_description variant 2

anyOf variant 2.

- Value shape: null. What the platform's product does, in 1 to 1,000 characters. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_email

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_email variant 1

anyOf variant 1: Where the platform's merchants get support..

- Value shape: string. Where the platform's merchants get support. Where the platform's merchants get support. Format: `email`. maxLength: `320`. Example: `"buyer@example.com"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_email variant 2

anyOf variant 2.

- Value shape: null. Where the platform's merchants get support. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_phone

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_phone variant 1

anyOf variant 1: Support phone number in E.164 format, such as +14155550123. Optional..

- Value shape: string. Support phone number in E.164 format, such as +14155550123. Optional. Support phone number in E.164 format, such as +14155550123. Optional. pattern: `^\+[1-9][0-9]{1,14}$`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_phone variant 2

anyOf variant 2.

- Value shape: null. Support phone number in E.164 format, such as +14155550123. Optional. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.website_url

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.website_url variant 1

anyOf variant 1: The platform's website, as an https URL..

- Value shape: string. The platform's website, as an https URL. The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.website_url variant 2

anyOf variant 2.

- Value shape: null. The platform's website, as an https URL. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.previous_secret_expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris variant 1

anyOf variant 1: Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment..

- Value shape: Array of string. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.redirect_uris variant 2

anyOf variant 2.

- Value shape: null. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the app is in its lifecycle. Only an active app can be installed or used..

- Value shape: string. Where the app is in its lifecycle. Only an active app can be installed or used. Values: `"active"`, `"archived"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the app is in its lifecycle. Only an active app can be installed or used. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed..

- Value shape: Array of string. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. Items values: `"accept_platform_terms"`.

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version variant 1

anyOf variant 1: Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read..

- Value shape: integer. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. 

### PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. 

