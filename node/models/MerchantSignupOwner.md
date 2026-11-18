[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupOwner







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string |  |
| `first_name` | Required | string |  |
| `last_name` | Required | string |  |

### MerchantSignupOwner variant 1

anyOf variant 1: Declared schema MerchantSignupOwner. The person who will own the new merchant, as the platform supplied them..

- Constraints for `email`: The owner's email address, lowercased, at most 254 characters. Flint emails the code here, and it becomes the new merchant's account email and the owner's Flint login. Send an address the owner gave you, never one on a domain you control.
- Constraints for `first_name`: The owner's first name, 1 to 100 characters. It becomes the Flint user's first name when Flint creates the user.
- Constraints for `last_name`: The owner's last name, 1 to 100 characters. It becomes the Flint user's last name when Flint creates the user.

### MerchantSignupOwner variant 2

anyOf variant 2: Declared schema MerchantSignupOwnerRequest. The person who will own the new merchant. Flint emails the code to this address..

- Constraints for `email`: The owner's email address, lowercased, at most 254 characters. Flint emails the code here, and it becomes the new merchant's account email and the owner's Flint login. Send an address the owner gave you, never one on a domain you control. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: `email`. minLength: `3`. maxLength: `254`. Example: `"buyer@example.com"`.
- Constraints for `first_name`: The owner's first name, 1 to 100 characters, without links or email addresses: the code email shows it. minLength: `1`. maxLength: `100`.
- Constraints for `last_name`: The owner's last name, 1 to 100 characters, without links or email addresses: the code email shows it. minLength: `1`. maxLength: `100`.

