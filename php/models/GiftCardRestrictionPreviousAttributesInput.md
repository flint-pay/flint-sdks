[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRestrictionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dispute_id` | Optional | string or null | Present only for type funding_dispute. The dispute on the payment that funded value on this card. `dispute_id`: [declared alternatives](../models/GiftCardRestrictionPreviousAttributesInput.md#giftcardrestrictionpreviousattributesinputdispute_id). |
| `dispute_status` | Optional | string or null | Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Values: `"open"`, `"lost"`. `dispute_status`: [declared alternatives](../models/GiftCardRestrictionPreviousAttributesInput.md#giftcardrestrictionpreviousattributesinputdispute_status). |
| `reason` | Optional | string or null | Present only for type merchant_freeze. The merchant's freeze reason. Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. `reason`: [declared alternatives](../models/GiftCardRestrictionPreviousAttributesInput.md#giftcardrestrictionpreviousattributesinputreason). |
| `type` | Optional | string or null | The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Values: `"merchant_freeze"`, `"funding_dispute"`. `type`: [declared alternatives](../models/GiftCardRestrictionPreviousAttributesInput.md#giftcardrestrictionpreviousattributesinputtype). |

### GiftCardRestrictionPreviousAttributesInput.dispute_id

### GiftCardRestrictionPreviousAttributesInput.dispute_id variant 1

anyOf variant 1: Present only for type funding_dispute. The dispute on the payment that funded value on this card..

- Value shape: string. Present only for type funding_dispute. The dispute on the payment that funded value on this card. Present only for type funding_dispute. The dispute on the payment that funded value on this card. pattern: `^du_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### GiftCardRestrictionPreviousAttributesInput.dispute_id variant 2

anyOf variant 2.

- Value shape: null. Present only for type funding_dispute. The dispute on the payment that funded value on this card. 

### GiftCardRestrictionPreviousAttributesInput.dispute_status

### GiftCardRestrictionPreviousAttributesInput.dispute_status variant 1

anyOf variant 1: Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent..

- Value shape: string. Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Values: `"open"`, `"lost"`.

### GiftCardRestrictionPreviousAttributesInput.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. 

### GiftCardRestrictionPreviousAttributesInput.reason

### GiftCardRestrictionPreviousAttributesInput.reason variant 1

anyOf variant 1: Present only for type merchant_freeze. The merchant's freeze reason..

- Value shape: string. Present only for type merchant_freeze. The merchant's freeze reason. Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`.

### GiftCardRestrictionPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Present only for type merchant_freeze. The merchant's freeze reason. 

### GiftCardRestrictionPreviousAttributesInput.type

### GiftCardRestrictionPreviousAttributesInput.type variant 1

anyOf variant 1: The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card..

- Value shape: string. The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Values: `"merchant_freeze"`, `"funding_dispute"`.

### GiftCardRestrictionPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. 

