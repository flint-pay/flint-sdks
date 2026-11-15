[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationCandidateInput

A delivery method revision to price in a delivery rate evaluation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | The method being priced. It stays the same when the method is edited, so use it to choose a service or price list. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Required | string | The exact method revision being priced. Echo it in the method's result. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `execution_legs` | Required | Array of [DeliveryRateEvaluationExecutionLegInput](../models/DeliveryRateEvaluationExecutionLegInput.md#deliveryrateevaluationexecutionleginput) | One entry per origin Location the items leave from. |
| `pricing` | Required | [DeliveryRateEvaluationPricingInput](../models/DeliveryRateEvaluationPricingInput.md#deliveryrateevaluationpricinginput) | Totals for the choice group that a rate calculation reads. Totals for a choice group that a delivery rate calculation reads. |

