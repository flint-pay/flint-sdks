[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupOwnerRequestInput

The person who will own the new merchant. Flint emails the code to this address.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | The owner's email address, lowercased, at most 254 characters. Flint emails the code here, and it becomes the new merchant's account email and the owner's Flint login. Send an address the owner gave you, never one on a domain you control. Format: `email`. minLength: `3`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `first_name` | Required | string | The owner's first name, 1 to 100 characters, without links or email addresses: the code email shows it. minLength: `1`. maxLength: `100`. |
| `last_name` | Required | string | The owner's last name, 1 to 100 characters, without links or email addresses: the code email shows it. minLength: `1`. maxLength: `100`. |

