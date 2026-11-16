[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingStartRequestInput

The request body for: Start onboarding flow.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `business_name` | Optional | string | Business name buyers see. Applied only when verification creates a merchant; existing merchants keep their profile. Surrounding whitespace is trimmed. minLength: `1`. maxLength: `120`. |
| `email` | Required | string | Email address to verify. Flint emails a verification code to it. minLength: `1`. |
| `first_name` | Required | string | First name of the person signing up. minLength: `1`. |
| `last_name` | Required | string | Last name of the person signing up. minLength: `1`. |
| `support_email` | Optional | string | Support email shown to buyers. Applied only to a newly created merchant. minLength: `1`. |
| `support_phone` | Optional | string | Support phone shown to buyers, in E.164 format. Applied only to a newly created merchant. minLength: `1`. maxLength: `16`. pattern: `^\+[1-9][0-9]{6,14}$`. |
| `support_url` | Optional | string | Support URL shown to buyers. Applied only to a newly created merchant. minLength: `1`. |
| `website_url` | Optional | string | Public business website URL. Applied only to a newly created merchant. minLength: `1`. |

