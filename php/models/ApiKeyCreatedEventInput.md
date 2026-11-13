[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApiKeyCreatedEventInput

The `api_key.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"api_key.created"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ApiKeyCreatedEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ApiKeyCreatedEventInput.md#apikeycreatedeventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ApiKeyCreatedEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Required | string | Unique identifier for this api key, prefixed `key_`. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `key_prefix` | Required | string |  |
| `last_used_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string | maxLength: `100`. |
| `partner_app_install_id` | Required | string or null | The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `revoked_at` | Optional | string | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `status` | Required | string | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### ApiKeyCreatedEventInput.request

The originating request. `null` when the event has no originating request ID.

Field definitions: [shared fields](WebhookEventRequest.md#webhookeventrequest).

