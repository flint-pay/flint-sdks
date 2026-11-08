[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SaveMeGiftCardRequestInput

The request body for: Save a gift card to your account.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Conditional | string | The gift card's code. Spaces and hyphens are ignored. minLength: `1`. |
| `credential_type` | Required | string | The proof that the buyer can use the card: its code, or the private recipient link they received. Values: `"code"`, `"recipient_access"`. |
| `grant_id` | Conditional | string | ID of the recipient access grant, from the path of the private recipient link. minLength: `1`. Example: `"gcg_01KEZF7C00BTDW4CJQTB38Q828"`. |
| `recipient_access_token` | Conditional | string | Token from the fragment of the private recipient link. minLength: `1`. |

### SaveMeGiftCardRequestInput variant 1: `credential_type` = `"code"`

oneOf with credential_type: "code": The `code` variant of `SaveMeGiftCardRequest`..

- Condition: not (at least one(present(`grant_id`); present(`recipient_access_token`))).
- Required: `code`.
- Optional: `grant_id`, `recipient_access_token`.
- Constraints for `credential_type`: Values: `"code"`.

### SaveMeGiftCardRequestInput variant 2: `credential_type` = `"recipient_access"`

oneOf with credential_type: "recipient_access": The `recipient_access` variant of `SaveMeGiftCardRequest`..

- Condition: not (present(`code`)).
- Required: `grant_id`, `recipient_access_token`.
- Optional: `code`.
- Constraints for `credential_type`: Values: `"recipient_access"`.

