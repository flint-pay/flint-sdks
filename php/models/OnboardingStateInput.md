[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStateInput

A merchant's onboarding status, profile, next step, requested capabilities, and whether an API key can be issued.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | Business country Flint uses in the selected environment. Before account setup, this is the selected country or the country Flint would use if advance omits it. Omitted when Flint cannot determine a country. Once account setup selects a country, it cannot change. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `default_sandbox_id` | Optional | string | ID of the merchant's default sandbox. Omitted when the merchant has no default sandbox. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `next_step` | Optional | [ReadinessActionInput](../models/ReadinessActionInput.md#readinessactioninput) | The step to take next. Omitted when no step is pending, such as while Flint prepares the sandbox. A step that moves a merchant capability or readiness axis forward, with the party that must do it (`owner`) and any required fields. |
| `profile` | Required | [OnboardingProfileInput](../models/OnboardingProfileInput.md#onboardingprofileinput) | Contact and website details recorded for onboarding. Contact and website details recorded for a merchant during onboarding. |
| `requested_capabilities` | Optional | Array of string | Canonical Flint capability intent persisted on the selected stable provider-account target. The initial merchant-account configuration always includes accept_card_payments and receive_payouts and may also include accept_ach_debit_payments. minItems: `2`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. |
| `status` | Required | string | Onboarding workflow status for activation and remediation, not a durable account-readiness boolean. Values: `"complete"`, `"waiting_for_review"`, `"needs_external_action"`, `"needs_input"`. |

