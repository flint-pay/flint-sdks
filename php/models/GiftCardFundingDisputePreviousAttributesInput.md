[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDisputePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `dispute_id` | Optional | string or null | The dispute on the payment that funded this load. `dispute_id`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputdispute_id). |
| `requires_resolution` | Optional | boolean or null | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. `requires_resolution`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputrequires_resolution). |
| `resolution` | Optional | ([GiftCardFundingLossResolutionPreviousAttributesInput](../models/GiftCardFundingLossResolutionPreviousAttributesInput.md#giftcardfundinglossresolutionpreviousattributesinput) or null) or null | The funding disposition recorded for this lost dispute. `null` when you have not created one yet. |
| `status` | Optional | string or null | Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`. `status`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion). |

### GiftCardFundingDisputePreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardFundingDisputePreviousAttributesInput.dispute_id

### GiftCardFundingDisputePreviousAttributesInput.dispute_id variant 1

anyOf variant 1: The dispute on the payment that funded this load..

- Value shape: string. The dispute on the payment that funded this load. The dispute on the payment that funded this load. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### GiftCardFundingDisputePreviousAttributesInput.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute on the payment that funded this load. 

### GiftCardFundingDisputePreviousAttributesInput.requires_resolution

### GiftCardFundingDisputePreviousAttributesInput.requires_resolution variant 1

anyOf variant 1: true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions..

- Value shape: boolean. true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. 

### GiftCardFundingDisputePreviousAttributesInput.requires_resolution variant 2

anyOf variant 2.

- Value shape: null. true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. 

### GiftCardFundingDisputePreviousAttributesInput.status

### GiftCardFundingDisputePreviousAttributesInput.status variant 1

anyOf variant 1: Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`..

- Value shape: string. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`.

### GiftCardFundingDisputePreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. 

### GiftCardFundingDisputePreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardFundingDisputePreviousAttributesInput.version

### GiftCardFundingDisputePreviousAttributesInput.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. 

### GiftCardFundingDisputePreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

