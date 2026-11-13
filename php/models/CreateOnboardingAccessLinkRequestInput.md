[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOnboardingAccessLinkRequestInput

Where Flint's hosted onboarding page sends the person when they exit, finish, or open a used or expired link.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_url` | Required | string | An absolute https URL without credentials, up to 2,048 characters. Query strings and fragments are allowed. For a partner app install token, its origin must be the origin of the app's merchant_action_url or of one of its redirect URIs. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

