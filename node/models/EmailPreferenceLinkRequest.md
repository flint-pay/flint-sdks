[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailPreferenceLinkRequest

The request body for: Look up an email preference link; Unsubscribe an email preference link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `token` | Required | string | The signed token from the email's preference link, as the `flint_email_preference_token` the hosted preference page receives. It points to one sent email, which fixes the email address, the preference, the merchant, and the mode. A token that is malformed, unrecognized, from a closed sandbox, or from another merchant or mode than the calling key returns 404. minLength: `1`. |

