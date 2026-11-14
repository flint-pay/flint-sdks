[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupOwnerInput

The person who will own the new merchant, as the platform supplied them.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | The owner's email address, lowercased, at most 254 characters. Flint emails the code here, and it becomes the new merchant's account email and the owner's Flint login. Send an address the owner gave you, never one on a domain you control. |
| `first_name` | Required | string | The owner's first name, 1 to 100 characters. It becomes the Flint user's first name when Flint creates the user. |
| `last_name` | Required | string | The owner's last name, 1 to 100 characters. It becomes the Flint user's last name when Flint creates the user. |

