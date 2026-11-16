[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingLossResolutionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `disposition` | Optional | string or null | What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`. `disposition`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributesInput.md#giftcardfundinglossresolutionpreviousattributesinputdisposition). |
| `gift_card_funding_disposition_id` | Optional | string or null | ID of the funding disposition recorded for the lost dispute. `gift_card_funding_disposition_id`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributesInput.md#giftcardfundinglossresolutionpreviousattributesinputgift_card_funding_disposition_id). |
| `reason_message` | Optional | string or null | The note you gave when you created the disposition. `reason_message`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributesInput.md#giftcardfundinglossresolutionpreviousattributesinputreason_message). |

### GiftCardFundingLossResolutionPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardFundingLossResolutionPreviousAttributesInput.disposition

### GiftCardFundingLossResolutionPreviousAttributesInput.disposition variant 1

anyOf variant 1: What the merchant decided about the card's value after the funding payment lost a dispute..

- Value shape: string. What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`.

### GiftCardFundingLossResolutionPreviousAttributesInput.disposition variant 2

anyOf variant 2.

- Value shape: null. What the merchant decided about the card's value after the funding payment lost a dispute. 

### GiftCardFundingLossResolutionPreviousAttributesInput.gift_card_funding_disposition_id

### GiftCardFundingLossResolutionPreviousAttributesInput.gift_card_funding_disposition_id variant 1

anyOf variant 1: ID of the funding disposition recorded for the lost dispute..

- Value shape: string. ID of the funding disposition recorded for the lost dispute. ID of the funding disposition recorded for the lost dispute. Example: `"gfd_01KEZF7C0077Q8RK3Q4FD2DTW8"`. 

### GiftCardFundingLossResolutionPreviousAttributesInput.gift_card_funding_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the funding disposition recorded for the lost dispute. 

### GiftCardFundingLossResolutionPreviousAttributesInput.reason_message

### GiftCardFundingLossResolutionPreviousAttributesInput.reason_message variant 1

anyOf variant 1: The note you gave when you created the disposition..

- Value shape: string. The note you gave when you created the disposition. 

### GiftCardFundingLossResolutionPreviousAttributesInput.reason_message variant 2

anyOf variant 2.

- Value shape: null. The note you gave when you created the disposition. 

