[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentActivityActorInput

The teammate, API key, or app that initiated the action.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `label` | Required | string | Teammate name (or email), API key name, or app name. Empty when a display label was unavailable; use resource_id as a fallback. |
| `resource_id` | Required | string | Flint ID of the identity that initiated the action. Key creators and app installers are not the actor. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Required | string | The acting identity's resource type. Today one of `user` (a teammate acting through Dashboard or a CLI login), `api_key` (an API key, not its creator), `partner_app_install` (an installed partner app, not its installer), or `partner_app` (a partner app acting on its own resources). Accept other resource types. Values: [158 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

