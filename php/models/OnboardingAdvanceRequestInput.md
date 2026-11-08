[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingAdvanceRequestInput

The request body for: Advance onboarding flow.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `profile` | Optional | [OnboardingProfileRequestInput](../models/OnboardingProfileRequestInput.md#onboardingprofilerequestinput) | Contact and website details to record for onboarding. Send only the fields to change. Profile changes return `409 ACTION_NOT_ALLOWED` with reason `managed_externally` while the account is being set up. Once the account is active, support contact and website details can change; changing the email address still returns this error. Contact and website details you submit for a merchant during onboarding. Send null to clear a field. |
| `requested_capabilities` | Optional | Array of string | Exact initial Flint capability set. Include accept_card_payments and receive_payouts together. Optionally include accept_ach_debit_payments, or omit the field to use the card and payout default set. minItems: `2`. maxItems: `3`. uniqueItems: `true`. Items values: `"accept_card_payments"`, `"receive_payouts"`, `"accept_ach_debit_payments"`. |

