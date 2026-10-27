[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperAuthContext

Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Optional | string |  |
| `auth_type` | Required | string | Values: `"api_key"`, `"oauth"`, `"workload_identity"`. |
| `context_id` | Optional | string |  |
| `environment` | Required | string | Values: `"sandbox"`, `"live"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `merchant_id` | Required | string |  |
| `name` | Optional | string |  |
| `oauth_grant_id` | Optional | string |  |
| `oauth_session_id` | Optional | string |  |
| `organization_id` | Optional | string |  |
| `sandbox_id` | Optional | string |  |
| `scopes` | Required | Array of string |  |
| `workload_identity_id` | Optional | string |  |

