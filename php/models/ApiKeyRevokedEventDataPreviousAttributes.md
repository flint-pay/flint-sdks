[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApiKeyRevokedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Optional | string or null | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. `access`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesaccess). |
| `api_key_id` | Optional | string or null | Unique identifier for this api key, prefixed `key_`. `api_key_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesapi_key_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_by` | Optional | Alternative shapes (see declared variants) | Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. `created_by`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `key_prefix` | Optional | string or null | The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. `key_prefix`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributeskey_prefix). |
| `last_used_at` | Optional | string or null | RFC3339 timestamp. `last_used_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `name` | Optional | string or null | The label the key was given, 1 to 100 characters. `name`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesname). |
| `partner_app_install_id` | Optional | string or null or null | The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. `partner_app_install_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributespartner_app_install_id). |
| `revoked_at` | Optional | string or null | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. `revoked_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesrevoked_at). |
| `sandbox_id` | Optional | string or null | ID of the sandbox this resource belongs to. `sandbox_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributessandbox_id). |
| `scopes` | Optional | Array of string or null | The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). `scopes`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesscopes). |
| `status` | Optional | string or null | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. `status`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`. `supported_actions`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### ApiKeyRevokedEventDataPreviousAttributes.access

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.access](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesaccess).

### ApiKeyRevokedEventDataPreviousAttributes.api_key_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.api_key_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesapi_key_id).

### ApiKeyRevokedEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEventDataPreviousAttributes.created_by

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### ApiKeyRevokedEventDataPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEventDataPreviousAttributes.key_prefix

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.key_prefix](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributeskey_prefix).

### ApiKeyRevokedEventDataPreviousAttributes.last_used_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### ApiKeyRevokedEventDataPreviousAttributes.name

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.name](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesname).

### ApiKeyRevokedEventDataPreviousAttributes.partner_app_install_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.partner_app_install_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributespartner_app_install_id).

### ApiKeyRevokedEventDataPreviousAttributes.revoked_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.revoked_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesrevoked_at).

### ApiKeyRevokedEventDataPreviousAttributes.sandbox_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.sandbox_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributessandbox_id).

### ApiKeyRevokedEventDataPreviousAttributes.scopes

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.scopes](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesscopes).

### ApiKeyRevokedEventDataPreviousAttributes.status

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.status](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesstatus).

### ApiKeyRevokedEventDataPreviousAttributes.supported_actions

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.supported_actions](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributessupported_actions).

### ApiKeyRevokedEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

