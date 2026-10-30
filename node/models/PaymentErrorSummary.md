[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentErrorSummary

A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [22 declared values](ErrorDetail.md#errordetail-failure_code-values). |
| `failed_at` | Required | string | Time the payment attempt concluded in failure. Format: `date-time`. |
| `message` | Required | string | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. |
| `remediation` | Required | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) or null | Guidance for resolving the payment failure before trying to collect again. |

