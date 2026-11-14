[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateEmailChangeRequest

The request body for: Request a customer email change; Request an email change.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `new_email` | Required | string | The address to change the email to. Flint emails a six-digit code to it. Format: `email`. minLength: `1`. maxLength: `320`. Example: `"buyer@example.com"`. |

