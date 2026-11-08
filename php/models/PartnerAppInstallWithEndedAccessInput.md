[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallWithEndedAccessInput

The connected app install and the API keys and webhook endpoints ended by this request.

A merchant's authorization of a partner application.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `environment_grants` | Optional | Array of [PartnerEnvironmentGrantInput](../models/PartnerEnvironmentGrantInput.md#partnerenvironmentgrantinput) |  |
| `installed_by_user_id` | Optional | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `partner_app_id` | Required | string | Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Required | string | Unique identifier for this partner app install, prefixed `pinst_`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `partner_app_name` | Required | string | The app’s current name. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `revoked_by` | Optional | string | Values: `"merchant"`, `"partner_app"`. |
| `revoked_by_user_id` | Optional | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `status` | Required | string | Values: `"pending_exchange"`, `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `deleted_webhook_endpoint_ids` | Required | Array of string | Webhook endpoints this request deleted because they were linked to this install. Sandbox endpoints stop receiving events immediately and are removed within seconds. Empty when no endpoints ended. maxItems: `50`. Items: pattern: `^whep_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `revoked_api_key_ids` | Required | Array of string | API keys this request revoked because they were linked to this install, live keys first. Empty when no keys ended or a previous request already revoked them. maxItems: `50`. Items: pattern: `^key_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |

