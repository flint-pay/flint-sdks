[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActor

Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Optional | string |  |
| `actor_type` | Required | string | Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |

