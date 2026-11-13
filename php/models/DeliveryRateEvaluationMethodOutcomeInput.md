[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationMethodOutcomeInput

The outcome for one candidate in a delivery rate evaluation response.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_revision_id` | Required | string | The candidate's delivery_method_revision_id. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `outcome` | Required | [DeliveryRateEvaluationOutcomeInput](../models/DeliveryRateEvaluationOutcomeInput.md#deliveryrateevaluationoutcomeinput) | The method's outcome, selected by type. A method's outcome in a delivery rate evaluation response, selected by `type`: available with a price and delivery window, unavailable with a reason, or cannot calculate. |

