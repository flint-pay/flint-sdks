[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingState

A merchant's onboarding status, profile, next step, requested capabilities, and whether an API key can be issued.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_issue_api_key` | Required | boolean |  |
| `country` | Optional | string | Immutable business country for the selected stable provider-account target. Omitted until the target has selected an effective country. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `default_sandbox_id` | Optional | string |  |
| `merchant_id` | Required | string |  |
| `next_step` | Optional | [OnboardingNextStep](../models/OnboardingNextStep.md#onboardingnextstep) | The next step to move onboarding forward, with who owns it, whether a machine can complete it, and the endpoint to submit to. |
| `profile` | Required | [OnboardingProfile](../models/OnboardingProfile.md#onboardingprofile) | Contact and website details recorded for a merchant during onboarding. |
| `requested_capabilities` | Optional | Array of string | Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. `requested_capabilities`: [declared alternatives](../models/OnboardingState.md#onboardingstaterequested_capabilities). |
| `status` | Required | string | Onboarding workflow status for activation and remediation, not a durable account-readiness boolean. Values: `"complete"`, `"waiting_for_review"`, `"needs_external_action"`, `"needs_input"`. |

### OnboardingState.requested_capabilities

### OnboardingState.requested_capabilities variant 1

oneOf variant 1.

- Value shape: Array of string. Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. minItems: `2`. maxItems: `2`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`.

### OnboardingState.requested_capabilities variant 2

oneOf variant 2.

- Value shape: Array of string. Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. minItems: `3`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_ach_debit_payments"`, `"accept_card_payments"`, `"receive_payouts"`.

