[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupEmailPreferencesRequestInput

The request body for: Look up email preferences.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address to look up. Matched after trimming surrounding whitespace and ignoring case, the way Flint matches unsubscribes. minLength: `1`. maxLength: `320`. |

