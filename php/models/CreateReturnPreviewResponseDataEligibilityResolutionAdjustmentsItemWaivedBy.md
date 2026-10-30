[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemWaivedBy

Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Optional | string |  |
| `actor_type` | Required | string | Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |

