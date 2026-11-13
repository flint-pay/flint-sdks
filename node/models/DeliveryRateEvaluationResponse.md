[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationResponse

The JSON object a delivery rate callback returns with a 2xx status. Flint rejects the whole response, and every method in it, when it has unknown fields or trailing data, its delivery_rate_evaluation_id differs from the request's, or ttl_seconds is out of range.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_evaluation_id` | Required | string | The request's delivery_rate_evaluation_id. Example: `"dreval_01KEZF7C00X0Q3Z075W9W90ZGC"`. |
| `method_results` | Required | Array of [DeliveryRateEvaluationMethodOutcome](../models/DeliveryRateEvaluationMethodOutcome.md#deliveryrateevaluationmethodoutcome) | One result per candidate. A candidate whose result is missing, duplicated, or invalid becomes cannot_calculate with callback_result_invalid; results for other method revisions are ignored. |
| `ttl_seconds` | Optional | integer | How long Flint may reuse this response for the same checkout when no outcome is available, from 0 to 300 seconds. Defaults to 120. A response with a cannot_calculate outcome is reused for at most 30 seconds, and a response with an available outcome is never reused. Format: `int64`. minimum: `0`. maximum: `300`. |

