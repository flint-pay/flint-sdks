[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemWaivedBy

Who waived the adjustment.

Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Optional | string | ID of the actor, when one exists. Merchant reads only. |
| `actor_type` | Required | string | What kind of actor acted. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |

