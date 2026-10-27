[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingAdvanceRequestInput

The request body for: Advance onboarding flow.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `profile` | Optional | [OnboardingProfileRequestInput](../models/OnboardingProfileRequestInput.md#onboardingprofilerequestinput) | Contact and website details you submit for a merchant during onboarding. Send null to clear a field. |
| `requested_capabilities` | Optional | Array of string | Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. `requested_capabilities`: [declared alternatives](../models/OnboardingAdvanceRequestInput.md#onboardingadvancerequestinputrequested_capabilities). |
| `sandbox_id` | Optional | string | minLength: `1`. |

### OnboardingAdvanceRequestInput.requested_capabilities

### OnboardingAdvanceRequestInput.requested_capabilities variant 1

oneOf variant 1.

- Value shape: Array of string. Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. minItems: `2`. maxItems: `2`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`.

### OnboardingAdvanceRequestInput.requested_capabilities variant 2

oneOf variant 2.

- Value shape: Array of string. Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. minItems: `3`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_ach_debit_payments"`, `"accept_card_payments"`, `"receive_payouts"`.

