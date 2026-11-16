[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingLossResolutionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `disposition` | Optional | string or null | What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`. `disposition`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesdisposition). |
| `gift_card_funding_disposition_id` | Optional | string or null | ID of the funding disposition recorded for the lost dispute. `gift_card_funding_disposition_id`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesgift_card_funding_disposition_id). |
| `reason_message` | Optional | string or null | The note you gave when you created the disposition. `reason_message`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesreason_message). |

### GiftCardFundingLossResolutionPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardFundingLossResolutionPreviousAttributes.disposition

### GiftCardFundingLossResolutionPreviousAttributes.disposition variant 1

anyOf variant 1: What the merchant decided about the card's value after the funding payment lost a dispute..

- Value shape: string. What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`.

### GiftCardFundingLossResolutionPreviousAttributes.disposition variant 2

anyOf variant 2.

- Value shape: null. What the merchant decided about the card's value after the funding payment lost a dispute. 

### GiftCardFundingLossResolutionPreviousAttributes.gift_card_funding_disposition_id

### GiftCardFundingLossResolutionPreviousAttributes.gift_card_funding_disposition_id variant 1

anyOf variant 1: ID of the funding disposition recorded for the lost dispute..

- Value shape: string. ID of the funding disposition recorded for the lost dispute. 

### GiftCardFundingLossResolutionPreviousAttributes.gift_card_funding_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the funding disposition recorded for the lost dispute. 

### GiftCardFundingLossResolutionPreviousAttributes.reason_message

### GiftCardFundingLossResolutionPreviousAttributes.reason_message variant 1

anyOf variant 1: The note you gave when you created the disposition..

- Value shape: string. The note you gave when you created the disposition. 

### GiftCardFundingLossResolutionPreviousAttributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. The note you gave when you created the disposition. 

