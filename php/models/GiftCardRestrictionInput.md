[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRestrictionInput

A restriction on a gift card, either a merchant freeze or a funding dispute, with its reason or dispute details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Optional | string | Present only for type funding_dispute. The dispute on the payment that funded value on this card. pattern: `^du_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `dispute_status` | Optional | string | Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Values: `"open"`, `"lost"`. |
| `reason` | Optional | string | Present only for type merchant_freeze. The merchant's freeze reason. Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |
| `type` | Required | string | The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Values: `"merchant_freeze"`, `"funding_dispute"`. |

