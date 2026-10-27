[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperInitialAPIKeyRequest

The request body for: Create onboarding API key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | minLength: `1`. maxLength: `100`. |
| `sandbox_id` | Optional | string | minLength: `1`. |
| `scopes` | Optional | Array of string | Items: minLength: `1`. |

