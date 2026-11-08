[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActor

Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Optional | string | ID of the actor, when one exists. Merchant reads only. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `actor_type` | Required | string | What kind of actor acted. Example: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |

