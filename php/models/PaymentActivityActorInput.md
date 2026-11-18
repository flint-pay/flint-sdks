[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentActivityActorInput

The merchant identity that initiated the action. Labels are recorded with the activity and do not change when the identity is renamed or removed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `label` | Required | string | Recorded teammate name (or email), API key name, or app name. Empty when a display label was unavailable; use resource_id as a fallback. |
| `resource_id` | Required | string | Flint ID of the identity that initiated the action. Key creators and app installers are not the actor. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Required | string and [ResourceTypeInput](../models/ResourceTypeInput.md#resourcetypeinput) | The acting resource type: a teammate, API key, partner app installation, or partner app. Example: `"user"`. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. The acting resource type: a teammate, API key, partner app installation, or partner app. Example: `"user"`. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: `"user"`, `"api_key"`, `"partner_app_install"`, `"partner_app"`. |

