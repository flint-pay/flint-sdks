[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingProfile

Contact and website details recorded for a merchant during onboarding.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string or null | The merchant's contact email address. `null` when no email address is on file for the merchant. |
| `support_email` | Optional | string | Support email address recorded for onboarding. Omitted when none is recorded. |
| `support_phone` | Optional | string | Support phone number recorded for onboarding. Omitted when none is recorded. |
| `support_url` | Optional | string | Support page recorded for onboarding. Omitted when none is recorded. |
| `website_url` | Optional | string | The business's website recorded for onboarding. Omitted when none is recorded. |

