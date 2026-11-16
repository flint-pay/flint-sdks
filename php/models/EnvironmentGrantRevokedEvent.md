[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantRevokedEvent

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [EnvironmentGrantRevokedEventData](../models/EnvironmentGrantRevokedEventData.md#environmentgrantrevokedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [EnvironmentGrantRevokedEventSource](../models/EnvironmentGrantRevokedEventSource.md#environmentgrantrevokedeventsource) | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventsource-fields-1). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### EnvironmentGrantRevokedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributes). |

### EnvironmentGrantRevokedEvent.data fields 1.object

Field definitions: [EnvironmentGrantCreatedEvent.data fields 1.object](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata-fields-1object).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](EnvironmentGrantRevokedEventDataPreviousAttributes.md#environmentgrantrevokedeventdatapreviousattributes).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.environment_grant_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.environment_grant_id variant 1

anyOf variant 1: Unique identifier for this environment grant, prefixed `egrt_`..

- Value shape: string. Unique identifier for this environment grant, prefixed `egrt_`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.environment_grant_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this environment grant, prefixed `egrt_`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1

anyOf variant 1: The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope..

- Value shape: Array of [PartnerAppPermissionManifestEntryPreviousAttributes](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributes). The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 2

anyOf variant 2.

- Value shape: null. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | What the permission lets the app do, shown to merchants when they approve the install. `description`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1description). |
| `optional` | Optional | boolean or null | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. `optional`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1optional). |
| `permission_id` | Optional | string or null | The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. `permission_id`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1permission_id). |
| `required_scopes` | Optional | Array of string or null | The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. `required_scopes`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1required_scopes). |
| `title` | Optional | string or null | A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. `title`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1title). |

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.description

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.description variant 1

anyOf variant 1: What the permission lets the app do, shown to merchants when they approve the install..

- Value shape: string. What the permission lets the app do, shown to merchants when they approve the install. What the permission lets the app do, shown to merchants when they approve the install. minLength: `1`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.description variant 2

anyOf variant 2.

- Value shape: null. What the permission lets the app do, shown to merchants when they approve the install. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.optional

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.optional variant 1

anyOf variant 1: Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted..

- Value shape: boolean. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.optional variant 2

anyOf variant 2.

- Value shape: null. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.permission_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.permission_id variant 1

anyOf variant 1: The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope..

- Value shape: string. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`. Example: `"manage_orders"`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.permission_id variant 2

anyOf variant 2.

- Value shape: null. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.required_scopes

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.required_scopes variant 1

anyOf variant 1: The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped..

- Value shape: Array of string. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. Items: minLength: `1`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.required_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.title

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.title variant 1

anyOf variant 1: A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address..

- Value shape: string. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: `1`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.title variant 2

anyOf variant 2.

- Value shape: null. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes variant 1

anyOf variant 1: The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission..

- Value shape: Array of string. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness

The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_requirement_count` | Conditional | integer or null | How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. `blocking_requirement_count`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmerchant_readiness-variant-1blocking_requirement_count). |
| `observed_at` | Conditional | string or null | When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. `observed_at`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesmerchant_readiness-variant-1observed_at). |
| `payments` | Conditional | [PartnerAppMerchantReadinessAxisPreviousAttributes](../models/PartnerAppMerchantReadinessAxisPreviousAttributes.md#partnerappmerchantreadinessaxispreviousattributes) or null | Whether the merchant can take payments in this environment, with the `status` and `status_reason` of `readiness.payments` on the merchant. |
| `payouts` | Conditional | [PartnerAppMerchantReadinessAxisPreviousAttributes](../models/PartnerAppMerchantReadinessAxisPreviousAttributes.md#partnerappmerchantreadinessaxispreviousattributes) or null | Whether the merchant can receive payouts in this environment, with the `status` and `status_reason` of `readiness.payouts` on the merchant. |

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1

anyOf PartnerAppMerchantReadinessPreviousAttributes.

- Optional: `blocking_requirement_count`, `observed_at`, `payments`, `payouts`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 2

anyOf variant 2.

- Undeclared: `blocking_requirement_count`, `observed_at`, `payments`, `payouts`.
- Value shape: null. The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.blocking_requirement_count

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.blocking_requirement_count variant 1

anyOf variant 1: How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names..

- Value shape: integer. How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. Format: `int64`. minimum: `0`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.blocking_requirement_count variant 2

anyOf variant 2.

- Value shape: null. How many distinct requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's mode for the requirement names. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.observed_at

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.observed_at variant 1

anyOf variant 1: When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations..

- Value shape: string. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.merchant_readiness variant 1.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last observed the merchant's account, which the statuses come from. The merchant's own `readiness.observed_at` can be later, because it also covers capability observations. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode variant 1

anyOf variant 1: Environment used for this resource or request..

- Value shape: string. Environment used for this resource or request. Values: `"test"`, `"live"`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.mode variant 2

anyOf variant 2.

- Value shape: null. Environment used for this resource or request. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.partner_app_install_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: ID of the install this grant belongs to..

- Value shape: string. ID of the install this grant belongs to. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. ID of the install this grant belongs to. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits

The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approved_at` | Conditional | string or null | When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. `approved_at`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributespayment_splits-variant-1approved_at). |
| `seller_terms_url` | Conditional | string or null | The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. `seller_terms_url`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributespayment_splits-variant-1seller_terms_url). |

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1

anyOf PartnerEnvironmentGrantPaymentSplitsPreviousAttributes.

- Optional: `approved_at`, `seller_terms_url`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 2

anyOf variant 2.

- Undeclared: `approved_at`, `seller_terms_url`.
- Value shape: null. The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1.approved_at

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1.approved_at variant 1

anyOf variant 1: When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one..

- Value shape: string. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1.approved_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant approved receiving split funds. Authorizing again with the same seller terms keeps it; approving other seller terms, or approving again after the approval ended, sets a new one. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1.seller_terms_url

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1.seller_terms_url variant 1

anyOf variant 1: The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it..

- Value shape: string. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. Format: `uri`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.payment_splits variant 1.seller_terms_url variant 2

anyOf variant 2.

- Value shape: null. The seller terms the merchant approved: the app's seller_terms_url when the merchant authorized it. Changing the app's seller_terms_url doesn't change it. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_by_user_id

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 1

anyOf variant 1: ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke..

- Value shape: string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.revoked_by_user_id variant 2

anyOf variant 2.

- Value shape: null. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.sandbox_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.sandbox_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributessandbox_id).

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the grant is in its lifecycle. Only an active grant gives the app access to its environment..

- Value shape: string. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Values: `"pending_exchange"`, `"active"`, `"revoked"`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. Items values: `"revoke"`.

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. 

### EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### EnvironmentGrantRevokedEvent.source fields 1

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput).

