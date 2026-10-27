[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateAPIKeyRequest

The request body for: Update an API key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when scopes is present, including an empty array. Optional for scalar updates. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `expires_at` | Optional | string or null | Future RFC3339 timestamp. Send null to clear an existing API-key expiration. Format: `date-time`. minLength: `1`. |
| `name` | Optional | string | minLength: `1`. maxLength: `100`. |
| `scopes` | Optional | Array of string | Items values: [95 declared values](APIKey.md#apikey-scopes--values). |

