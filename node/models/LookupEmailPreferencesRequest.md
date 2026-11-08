[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupEmailPreferencesRequest

The request body for: Look up email preferences.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address to look up. Matched after trimming surrounding whitespace and ignoring case, the way Flint matches unsubscribes. minLength: `1`. maxLength: `320`. |

