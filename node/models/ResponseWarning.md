[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResponseWarning

A non-blocking condition reported with a response. The `code` identifies the condition and `severity` says how urgent it is.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string | Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive. Allowed for `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive` warnings. Values: [8 declared values](#responsewarning-capability-values). |
| `code` | Required | string | Warning code. Clients must accept values added in future releases. Values: [13 declared values](#responsewarning-code-values). |
| `due_at` | Optional | string | Time by which the merchant must submit onboarding requirements, as an RFC 3339 UTC timestamp. Present only for merchant_onboarding_deadline or merchant_onboarding_past_due when a submission deadline is set. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline` warnings. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `message` | Required | string | Description of the non-blocking condition. |
| `next_actions` | Optional | Array of [NextAction](../models/NextAction.md#nextaction) | Suggested actions for addressing the warning. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling` warnings. |
| `observed_at` | Optional | string | Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive, when available. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive` warnings. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `previous_stage` | Optional | string | Previous risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for `rule_evaluation_stage_changed` warnings. Values: `"pre_authorization"`, `"post_authorization"`. |
| `promotion_code` | Optional | string | Promotion code that was accepted but did not apply, on a promotion_declined warning, or the code of a removed promotion discount, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings. |
| `reason` | Optional | string | Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the promotion decline reason (for example superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the Promotions reference for the full list. Allowed for `promotion_declined`, `promotion_removed` warnings. Values: [24 declared values](PromotionCandidate.md#promotioncandidate-promotion_decline_reason-values). |
| `removed_scopes` | Optional | Array of string | Requested scopes excluded from the issued API key for api_key_scopes_reduced. Allowed for `api_key_scopes_reduced` warnings. Items values: [96 declared values](APIKey.md#apikey-scopes--values). |
| `resets_at` | Optional | string | End of the original order reservation's usage period, at the start of a New York calendar month, as an RFC 3339 UTC timestamp. Replays preserve this original reset time. Allowed for `external_paid_orders_over_allowance` warnings. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resource_id` | Optional | string | Resource ID, paired with resource_type when the warning identifies a resource. Allowed for `billing_interval_options_same_price`, `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`, `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`, `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | Type of the resource identified by resource_id. Allowed for `billing_interval_options_same_price`, `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`, `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`, `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example: `"order"`. Values: [146 declared values](APIRequestLog.md#apirequestlog-resource_type-values). |
| `severity` | Required | string | Warning severity. Values: `"warning"`, `"critical"`. |
| `stage` | Optional | string | New risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for `rule_evaluation_stage_changed` warnings. Values: `"pre_authorization"`, `"post_authorization"`. |
| `would_have_applied_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount this promotion would have applied had it won, on a promotion_declined warning, or the amount a removed promotion discount applied before removal, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `would_have_applied_money`: [field definitions](../models/ResponseWarning.md#responsewarningwould_have_applied_money). |

#### ResponseWarning capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

#### ResponseWarning code values

- `"billing_interval_options_same_price"`
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
- `"external_paid_orders_over_allowance"`
- `"replacement_codes_unavailable"`

### ResponseWarning.would_have_applied_money

Discount amount this promotion would have applied had it won, on a promotion_declined warning, or the amount a removed promotion discount applied before removal, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

