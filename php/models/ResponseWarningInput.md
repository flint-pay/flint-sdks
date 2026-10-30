[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResponseWarningInput

A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string | Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive. Values: [8 declared values](#responsewarninginput-capability-values). |
| `code` | Required | string | Warning code. Clients must accept values added in future releases. Values: [10 declared values](#responsewarninginput-code-values). |
| `current_deadline_at` | Optional | string | Onboarding requirements deadline for merchant_onboarding_deadline, or merchant_onboarding_past_due when a deadline is set. Format: `date-time`. |
| `message` | Required | string | Description of the non-blocking condition. |
| `next_actions` | Optional | Array of [NextActionInput](../models/NextActionInput.md#nextactioninput) | Suggested actions for addressing the warning. |
| `observed_at` | Optional | string | Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive, when available. Format: `date-time`. |
| `previous_stage` | Optional | string | Previous risk rule evaluation stage for rule_evaluation_stage_changed. Values: `"pre_authorization"`, `"post_authorization"`. |
| `promotion_code` | Optional | string | Promotion code that was accepted but did not apply, on a promotion_declined warning, or the code of a removed promotion discount, on a promotion_removed warning. |
| `reason` | Optional | string | Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the promotion decline reason (for example superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the Promotions reference for the full list. Values: [20 declared values](PromotionCandidateInput.md#promotioncandidateinput-promotion_decline_reason-values). |
| `removed_scopes` | Optional | Array of string | Requested scopes excluded from the issued API key for api_key_scopes_reduced. Items values: [96 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `resource_id` | Optional | string | Resource ID, paired with resource_type when the warning identifies a resource. |
| `resource_type` | Optional | string | Type of the resource identified by resource_id. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `severity` | Required | string | Warning severity. Values: `"warning"`, `"critical"`. |
| `stage` | Optional | string | New risk rule evaluation stage for rule_evaluation_stage_changed. Values: `"pre_authorization"`, `"post_authorization"`. |
| `would_have_applied_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Discount amount this promotion would have applied had it won, on a promotion_declined warning, or the amount a removed promotion discount applied before removal, on a promotion_removed warning. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### ResponseWarningInput capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

#### ResponseWarningInput code values

- `"merchant_onboarding_past_due"`
- `"merchant_onboarding_deadline"`
- `"merchant_capability_pending"`
- `"merchant_capability_inactive"`
- `"payout_settings_reconciling"`
- `"promotion_declined"`
- `"promotion_removed"`
- `"risk_rule_limit_reached"`
- `"rule_evaluation_stage_changed"`
- `"api_key_scopes_reduced"`

