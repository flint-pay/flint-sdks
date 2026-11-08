[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerAccessLinkRequestInput

Optional destination to return to from the hosted customer account.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_url` | Optional | string | Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: `uri`. minLength: `1`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

