[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelSubscriptionRequest

Cancellation timing and the optional reason and comment recorded with the request.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_immediately` | Optional | boolean | When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due, instead of that charge. An active subscription with an expired renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel immediately when the store allows buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial continues until trial_end_at. |
| `cancellation_comment` | Optional | string | Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only merchant credentials read. minLength: `1`. maxLength: `500`. |
| `cancellation_reason_code` | Optional | string | Optional. Why the subscription is being canceled. When the store lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one of them; merchant credentials may send any code. Recorded in cancellation_details.reason_code. Values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `initiated_by` | Optional | string | Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution only; this does not apply the store's buyer limits. To enforce them, use a customer session on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in cancellation_details.requested_by and cancellation_reason. Default: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`. |

