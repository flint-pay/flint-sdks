[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDisputePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `dispute_id` | Optional | string or null | The dispute on the payment that funded this load. `dispute_id`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesdispute_id). |
| `requires_resolution` | Optional | boolean or null | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. `requires_resolution`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesrequires_resolution). |
| `resolution` | Optional | [GiftCardFundingLossResolutionPreviousAttributes](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributes) or null | The funding disposition recorded for this lost dispute. `null` when you have not created one yet. `resolution`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesresolution). |
| `status` | Optional | string or null | Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`. `status`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardFundingDisputePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardFundingDisputePreviousAttributes.dispute_id

### GiftCardFundingDisputePreviousAttributes.dispute_id variant 1

anyOf variant 1: The dispute on the payment that funded this load..

- Value shape: string. The dispute on the payment that funded this load. 

### GiftCardFundingDisputePreviousAttributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute on the payment that funded this load. 

### GiftCardFundingDisputePreviousAttributes.requires_resolution

### GiftCardFundingDisputePreviousAttributes.requires_resolution variant 1

anyOf variant 1: true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions..

- Value shape: boolean. true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. 

### GiftCardFundingDisputePreviousAttributes.requires_resolution variant 2

anyOf variant 2.

- Value shape: null. true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. 

### GiftCardFundingDisputePreviousAttributes.resolution

The funding disposition recorded for this lost dispute. `null` when you have not created one yet.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `disposition` | Conditional | string or null | What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`. `disposition`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesdisposition). |
| `gift_card_funding_disposition_id` | Conditional | string or null | ID of the funding disposition recorded for the lost dispute. `gift_card_funding_disposition_id`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesresolution-variant-1gift_card_funding_disposition_id). |
| `reason_message` | Conditional | string or null | The note you gave when you created the disposition. `reason_message`: [declared alternatives](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesreason_message). |

### GiftCardFundingDisputePreviousAttributes.resolution variant 1: `disposition` = `"honor_value"`

anyOf GiftCardFundingLossResolutionPreviousAttributes.

- Optional: `created_at`, `disposition`, `gift_card_funding_disposition_id`, `reason_message`.

### GiftCardFundingDisputePreviousAttributes.resolution variant 2

anyOf variant 2.

- Undeclared: `created_at`, `disposition`, `gift_card_funding_disposition_id`, `reason_message`.
- Value shape: null. The funding disposition recorded for this lost dispute. `null` when you have not created one yet. 

### GiftCardFundingDisputePreviousAttributes.resolution variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardFundingDisputePreviousAttributes.resolution variant 1.disposition

Declared alternatives: [GiftCardFundingLossResolutionPreviousAttributes.disposition](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesdisposition).

### GiftCardFundingDisputePreviousAttributes.resolution variant 1.gift_card_funding_disposition_id

### GiftCardFundingDisputePreviousAttributes.resolution variant 1.gift_card_funding_disposition_id variant 1

anyOf variant 1: ID of the funding disposition recorded for the lost dispute..

- Value shape: string. ID of the funding disposition recorded for the lost dispute. ID of the funding disposition recorded for the lost dispute. Example: `"gfd_01KEZF7C0077Q8RK3Q4FD2DTW8"`. 

### GiftCardFundingDisputePreviousAttributes.resolution variant 1.gift_card_funding_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the funding disposition recorded for the lost dispute. 

### GiftCardFundingDisputePreviousAttributes.resolution variant 1.reason_message

Declared alternatives: [GiftCardFundingLossResolutionPreviousAttributes.reason_message](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributesreason_message).

### GiftCardFundingDisputePreviousAttributes.status

### GiftCardFundingDisputePreviousAttributes.status variant 1

anyOf variant 1: Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`..

- Value shape: string. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`.

### GiftCardFundingDisputePreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. 

### GiftCardFundingDisputePreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardFundingDisputePreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

