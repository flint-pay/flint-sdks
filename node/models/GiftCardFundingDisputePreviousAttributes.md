[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDisputePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `dispute_id` | Optional | string or null | The dispute on the payment that funded this load. `dispute_id`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesdispute_id). |
| `requires_resolution` | Optional | boolean or null | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. `requires_resolution`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesrequires_resolution). |
| `resolution` | Optional | ([GiftCardFundingLossResolutionPreviousAttributes](../models/GiftCardFundingLossResolutionPreviousAttributes.md#giftcardfundinglossresolutionpreviousattributes) or null) or null | The funding disposition recorded for this lost dispute. `null` when you have not created one yet. |
| `status` | Optional | string or null | Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`. `status`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion). |

### GiftCardFundingDisputePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardFundingDisputePreviousAttributes.dispute_id

### GiftCardFundingDisputePreviousAttributes.dispute_id variant 1

anyOf variant 1: The dispute on the payment that funded this load..

- Value shape: string. The dispute on the payment that funded this load. The dispute on the payment that funded this load. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

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

### GiftCardFundingDisputePreviousAttributes.status

### GiftCardFundingDisputePreviousAttributes.status variant 1

anyOf variant 1: Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`..

- Value shape: string. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`.

### GiftCardFundingDisputePreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. 

### GiftCardFundingDisputePreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardFundingDisputePreviousAttributes.version

### GiftCardFundingDisputePreviousAttributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. 

### GiftCardFundingDisputePreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

