[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OnboardingLaunchRecommendedPolicy

The recommended collection strategy and future-requirement behavior for launching embedded onboarding.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Required | string | Values: `"upfront"`, `"incremental"`. |
| `future_requirements` | Required | string | Values: `"omit"`, `"include"`. |

