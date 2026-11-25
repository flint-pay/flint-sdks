[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApiKeyRevokedEvent

The `api_key.revoked` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"api_key.revoked"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ApiKeyRevokedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributes). |

### ApiKeyRevokedEvent.data.object

Field definitions: [ApiKeyCreatedEvent.data.object](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdataobject).

### ApiKeyRevokedEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string or null | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. `access`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesaccess). |
| `api_key_id` | Optional | string or null | Unique identifier for this api key, prefixed `key_`. `api_key_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesapi_key_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `created_by` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. |
| `created_by_user_id` | Optional | string or null | The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. `created_by_user_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_by_user_id). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `key_prefix` | Optional | string or null | The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. `key_prefix`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributeskey_prefix). |
| `last_used_at` | Optional | string or null | RFC3339 timestamp. `last_used_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `name` | Optional | string or null | The label the key was given, 1 to 100 characters. `name`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesname). |
| `partner_app_install_id` | Optional | string or null | The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. `partner_app_install_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributespartner_app_install_id). |
| `revoked_at` | Optional | string or null | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. `revoked_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesrevoked_at). |
| `sandbox_id` | Optional | string or null | ID of the sandbox this resource belongs to. `sandbox_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributessandbox_id). |
| `scopes` | Optional | Array of string or null | The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: [105 declared values](APIKey.md#apikey-scopes--values). `scopes`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesscopes). |
| `status` | Optional | string or null | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. `status`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesversion). |

### ApiKeyRevokedEvent.data.previous_attributes.access

### ApiKeyRevokedEvent.data.previous_attributes.access variant 1

anyOf variant 1: Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key..

- Value shape: string. Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`.

### ApiKeyRevokedEvent.data.previous_attributes.access variant 2

anyOf variant 2.

- Value shape: null. Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. 

### ApiKeyRevokedEvent.data.previous_attributes.api_key_id

### ApiKeyRevokedEvent.data.previous_attributes.api_key_id variant 1

anyOf variant 1: Unique identifier for this api key, prefixed `key_`..

- Value shape: string. Unique identifier for this api key, prefixed `key_`. Unique identifier for this api key, prefixed `key_`. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. 

### ApiKeyRevokedEvent.data.previous_attributes.api_key_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this api key, prefixed `key_`. 

### ApiKeyRevokedEvent.data.previous_attributes.created_at

### ApiKeyRevokedEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: RFC3339 timestamp..

- Value shape: string. RFC3339 timestamp. RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ApiKeyRevokedEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. 

### ApiKeyRevokedEvent.data.previous_attributes.created_by_user_id

### ApiKeyRevokedEvent.data.previous_attributes.created_by_user_id variant 1

anyOf variant 1: The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request..

- Value shape: string. The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. pattern: `^usr_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### ApiKeyRevokedEvent.data.previous_attributes.created_by_user_id variant 2

anyOf variant 2.

- Value shape: null. The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. 

### ApiKeyRevokedEvent.data.previous_attributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ApiKeyRevokedEvent.data.previous_attributes.key_prefix

### ApiKeyRevokedEvent.data.previous_attributes.key_prefix variant 1

anyOf variant 1: The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns..

- Value shape: string. The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. 

### ApiKeyRevokedEvent.data.previous_attributes.key_prefix variant 2

anyOf variant 2.

- Value shape: null. The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. 

### ApiKeyRevokedEvent.data.previous_attributes.last_used_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ApiKeyRevokedEvent.data.previous_attributes.merchant_id

### ApiKeyRevokedEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: ID of the merchant this resource belongs to..

- Value shape: string. ID of the merchant this resource belongs to. ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ApiKeyRevokedEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the merchant this resource belongs to. 

### ApiKeyRevokedEvent.data.previous_attributes.name

### ApiKeyRevokedEvent.data.previous_attributes.name variant 1

anyOf variant 1: The label the key was given, 1 to 100 characters..

- Value shape: string. The label the key was given, 1 to 100 characters. The label the key was given, 1 to 100 characters. maxLength: `100`. 

### ApiKeyRevokedEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The label the key was given, 1 to 100 characters. 

### ApiKeyRevokedEvent.data.previous_attributes.partner_app_install_id

### ApiKeyRevokedEvent.data.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes..

- Value shape: string. The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. 

### ApiKeyRevokedEvent.data.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. 

### ApiKeyRevokedEvent.data.previous_attributes.revoked_at

### ApiKeyRevokedEvent.data.previous_attributes.revoked_at variant 1

anyOf variant 1: When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time..

- Value shape: string. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ApiKeyRevokedEvent.data.previous_attributes.revoked_at variant 2

anyOf variant 2.

- Value shape: null. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. 

### ApiKeyRevokedEvent.data.previous_attributes.sandbox_id

### ApiKeyRevokedEvent.data.previous_attributes.sandbox_id variant 1

anyOf variant 1: ID of the sandbox this resource belongs to..

- Value shape: string. ID of the sandbox this resource belongs to. ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. 

### ApiKeyRevokedEvent.data.previous_attributes.sandbox_id variant 2

anyOf variant 2.

- Value shape: null. ID of the sandbox this resource belongs to. 

### ApiKeyRevokedEvent.data.previous_attributes.scopes

### ApiKeyRevokedEvent.data.previous_attributes.scopes variant 1

anyOf variant 1: The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes..

- Value shape: Array of string. The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: `"accounts.api_keys.read"`, `"accounts.api_keys.write"`, `"accounts.devices.read"`, `"accounts.devices.write"`, `"accounts.workload_identities.read"`, `"accounts.workload_identities.write"`, `"analytics.read"`, `"checkouts.checkout_sessions.read"`, `"checkouts.checkout_sessions.write"`, `"checkouts.payment_links.read"`, `"checkouts.payment_links.write"`, `"checkouts.shops.read"`, `"checkouts.shops.write"`, `"commerce.bundles.read"`, `"commerce.bundles.write"`, `"commerce.catalog.read"`, `"commerce.catalog.write"`, `"commerce.credit_notes.read"`, `"commerce.credit_notes.write"`, `"commerce.delivery.read"`, `"commerce.delivery.write"`, `"commerce.gift_cards.adjustments.write"`, `"commerce.gift_cards.read"`, `"commerce.gift_cards.redemptions.write"`, `"commerce.gift_cards.secrets.write"`, `"commerce.gift_cards.write"`, `"commerce.inventory.allocation.write"`, `"commerce.inventory.policies.write"`, `"commerce.inventory.read"`, `"commerce.inventory.write"`, `"commerce.invoices.read"`, `"commerce.invoices.write"`, `"commerce.license_keys.read"`, `"commerce.license_keys.secrets.write"`, `"commerce.license_keys.write"`, `"commerce.orders.read"`, `"commerce.orders.write"`, `"commerce.products.read"`, `"commerce.products.write"`, `"commerce.promotions.read"`, `"commerce.promotions.write"`, `"commerce.refunds.read"`, `"commerce.refunds.tax_overrides.write"`, `"commerce.refunds.write"`, `"commerce.returns.operations.write"`, `"commerce.returns.policies.write"`, `"commerce.returns.read"`, `"commerce.returns.reasons.write"`, `"commerce.returns.resolutions.write"`, `"commerce.returns.write"`, `"commerce.subscription_plans.read"`, `"commerce.subscription_plans.write"`, `"commerce.subscriptions.read"`, `"commerce.subscriptions.write"`, `"commerce.tickets.read"`, `"commerce.tickets.write"`, `"customers.read"`, `"customers.sessions.write"`, `"customers.write"`, `"developer.merchant_signups.read"`, `"developer.merchant_signups.write"`, `"developer.partner_apps.read"`, `"developer.partner_apps.write"`, `"developer.request_logs.read"`, `"developer.request_logs.self.read"`, `"developer.resource_timelines.read"`, `"developer.sandboxes.read"`, `"developer.sandboxes.write"`, `"developer.test_clocks.read"`, `"developer.test_clocks.write"`, `"merchant_billing.read"`, `"merchants.account_sessions.write"`, `"merchants.locations.read"`, `"merchants.locations.write"`, `"merchants.onboarding.read"`, `"merchants.onboarding.write"`, `"merchants.profile.read"`, `"merchants.profile.write"`, `"money_movement.balance_transactions.read"`, `"money_movement.balances.read"`, `"money_movement.payment_splits.read"`, `"money_movement.payout_settings.read"`, `"money_movement.payout_settings.write"`, `"money_movement.payouts.read"`, `"money_movement.payouts.write"`, `"money_movement.platform_fees.read"`, `"payments.disputes.read"`, `"payments.disputes.write"`, `"payments.payment_intents.read"`, `"payments.payment_intents.write"`, `"payments.payment_method_domains.read"`, `"payments.payment_method_domains.write"`, `"payments.payment_methods.read"`, `"payments.payment_methods.write"`, `"payments.readers.read"`, `"payments.readers.write"`, `"reports.read"`, `"reports.write"`, `"risk.controls.write"`, `"risk.read"`, `"risk.reviews.write"`, `"settings.read"`, `"settings.write"`, `"webhooks.read"`, `"webhooks.write"`.

### ApiKeyRevokedEvent.data.previous_attributes.scopes variant 2

anyOf variant 2.

- Value shape: null. The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. 

### ApiKeyRevokedEvent.data.previous_attributes.status

### ApiKeyRevokedEvent.data.previous_attributes.status variant 1

anyOf variant 1: Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at..

- Value shape: string. Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`.

### ApiKeyRevokedEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. 

### ApiKeyRevokedEvent.data.previous_attributes.supported_actions

### ApiKeyRevokedEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`.

### ApiKeyRevokedEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. 

### ApiKeyRevokedEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ApiKeyRevokedEvent.data.previous_attributes.version

### ApiKeyRevokedEvent.data.previous_attributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. 

### ApiKeyRevokedEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

### ApiKeyRevokedEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

