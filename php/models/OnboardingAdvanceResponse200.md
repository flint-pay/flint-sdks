[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingAdvanceResponse200

A response containing `OnboardingState` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OnboardingState](../models/OnboardingState.md#onboardingstate) | A merchant's onboarding status, profile, next step, requested capabilities, and whether an API key can be issued. `data`: [field definitions](../models/OnboardingAdvanceResponse200.md#onboardingadvanceresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OnboardingAdvanceResponse200.data

A merchant's onboarding status, profile, next step, requested capabilities, and whether an API key can be issued.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_issue_api_key` | Required | boolean |  |
| `country` | Optional | string | Immutable business country for the selected stable provider-account target. Omitted until the target has selected an effective country. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `default_sandbox_id` | Optional | string |  |
| `merchant_id` | Required | string |  |
| `next_step` | Optional | [ReadinessAction](../models/ReadinessAction.md#readinessaction) | A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields. |
| `profile` | Required | [OnboardingProfile](../models/OnboardingProfile.md#onboardingprofile) | Contact and website details recorded for a merchant during onboarding. |
| `requested_capabilities` | Optional | Array of string | Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. minItems: `2`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. |
| `status` | Required | string | Onboarding workflow status for activation and remediation, not a durable account-readiness boolean. Values: `"complete"`, `"waiting_for_review"`, `"needs_external_action"`, `"needs_input"`. |

