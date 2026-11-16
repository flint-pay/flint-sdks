[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnActorPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Optional | string or null | ID of the actor, when one exists. Merchant reads only. `actor_id`: [declared alternatives](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributesactor_id). |
| `actor_type` | Optional | string or null | What kind of actor acted. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. `actor_type`: [declared alternatives](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributesactor_type). |

### ReturnActorPreviousAttributes.actor_id

### ReturnActorPreviousAttributes.actor_id variant 1

anyOf variant 1: ID of the actor, when one exists. Merchant reads only..

- Value shape: string. ID of the actor, when one exists. Merchant reads only. ID of the actor, when one exists. Merchant reads only. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### ReturnActorPreviousAttributes.actor_id variant 2

anyOf variant 2.

- Value shape: null. ID of the actor, when one exists. Merchant reads only. 

### ReturnActorPreviousAttributes.actor_type

### ReturnActorPreviousAttributes.actor_type variant 1

anyOf variant 1: What kind of actor acted..

- Value shape: string. What kind of actor acted. What kind of actor acted. Example: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`.

### ReturnActorPreviousAttributes.actor_type variant 2

anyOf variant 2.

- Value shape: null. What kind of actor acted. 

