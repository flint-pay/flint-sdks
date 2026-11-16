[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | ([MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `funding_disputes` | Optional | Array of [GiftCardFundingDisputePreviousAttributes](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributes) or null | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. `funding_disputes`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesfunding_disputes). |
| `gift_card_id` | Optional | string or null | ID of the gift card the load added value to. `gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | Unique identifier for this gift card load, prefixed `gcl_`. `gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesgift_card_load_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesidempotency_key). |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHoldPreviousAttributes](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributes) or null | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. `purchase_refund_value_holds`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds). |
| `purchase_refunds` | Optional | Array of [GiftCardPurchaseRefundAllocationPreviousAttributes](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributes) or null | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. `purchase_refunds`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refunds). |
| `purchase_restoration` | Optional | Alternative shapes (see declared variants) | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. `purchase_restoration`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration). |
| `refund_provenance` | Optional | Alternative shapes (see declared variants) | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. `refund_provenance`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance). |
| `refund_transferred_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. |
| `remaining_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. |
| `reversed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. |
| `source` | Optional | object and Alternative shapes (see declared variants) or null | Where the value came from, with your reference for it. `source`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource). |
| `source_created_at` | Optional | string or null or null | RFC3339 timestamp. `null` when no source time was recorded. `source_created_at`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource_created_at). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The face value the load adds to the card. |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1

anyOf variant 1: Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition..

- Value shape: Array of [GiftCardFundingDisputePreviousAttributes](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributes). Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 2

anyOf variant 2.

- Value shape: null. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `dispute_id` | Optional | string or null | The dispute on the payment that funded this load. `dispute_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesfunding_disputes-variant-1-fields-1dispute_id). |
| `requires_resolution` | Optional | boolean or null | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. `requires_resolution`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesrequires_resolution). |
| `resolution` | Optional | Alternative shapes (see declared variants) or null | The funding disposition recorded for this lost dispute. `null` when you have not created one yet. `resolution`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesresolution). |
| `status` | Optional | string or null | Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`. `status`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.dispute_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.dispute_id variant 1

anyOf variant 1: The dispute on the payment that funded this load..

- Value shape: string. The dispute on the payment that funded this load. The dispute on the payment that funded this load. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute on the payment that funded this load. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.requires_resolution

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.requires_resolution](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesrequires_resolution).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.resolution

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.resolution](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesresolution).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.status

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.status](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesstatus).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the load added value to..

- Value shape: string. ID of the gift card the load added value to. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the load added value to. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id variant 1

anyOf variant 1: Unique identifier for this gift card load, prefixed `gcl_`..

- Value shape: string. Unique identifier for this gift card load, prefixed `gcl_`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card load, prefixed `gcl_`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent..

- Value shape: (string or null). Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1

anyOf variant 1: Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds..

- Value shape: Array of [GiftCardPurchaseRefundValueHoldPreviousAttributes](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributes). Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 2

anyOf variant 2.

- Value shape: null. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the pending purchase refund entry that holds the value. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds-variant-1-fields-1purchase_refund_allocation_id). |
| `refund_id` | Optional | string or null | ID of the pending refund that holds the value. `refund_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds-variant-1-fields-1refund_id). |
| `root_gift_card_id` | Optional | string or null | ID of the original card whose purchase is being refunded. `root_gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds-variant-1-fields-1root_gift_card_id). |
| `root_gift_card_load_id` | Optional | string or null | ID of the original funding load that is being refunded. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds-variant-1-fields-1root_gift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unspent value held. |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.purchase_refund_allocation_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the pending purchase refund entry that holds the value..

- Value shape: string. ID of the pending purchase refund entry that holds the value. ID of the pending purchase refund entry that holds the value. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending purchase refund entry that holds the value. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.refund_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.refund_id variant 1

anyOf variant 1: ID of the pending refund that holds the value..

- Value shape: string. ID of the pending refund that holds the value. ID of the pending refund that holds the value. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending refund that holds the value. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.root_gift_card_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.root_gift_card_id variant 1

anyOf variant 1: ID of the original card whose purchase is being refunded..

- Value shape: string. ID of the original card whose purchase is being refunded. ID of the original card whose purchase is being refunded. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original card whose purchase is being refunded. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.root_gift_card_load_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load that is being refunded..

- Value shape: string. ID of the original funding load that is being refunded. ID of the original funding load that is being refunded. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load that is being refunded. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1

anyOf variant 1: Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold..

- Value shape: Array of [GiftCardPurchaseRefundAllocationPreviousAttributes](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributes). Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 2

anyOf variant 2.

- Value shape: null. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the amount the buyer paid that this refund or reversal returns. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `order_manual_reversal_id` | Optional | string or null | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. `order_manual_reversal_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refunds-variant-1-fields-1order_manual_reversal_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of this entry in the load's purchase refunds. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refunds-variant-1-fields-1purchase_refund_allocation_id). |
| `recovery` | Optional | Alternative shapes (see declared variants) | How the value was restored after the refund failed. `null` when no recovery happened. `recovery`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery). |
| `refund_id` | Optional | string or null or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. `refund_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refunds-variant-1-fields-1refund_id). |
| `status` | Optional | string or null | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributes](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributes) or null | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. `value_allocations`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesvalue_allocations). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unspent face value this entry removes from the load. |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.order_manual_reversal_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.order_manual_reversal_id variant 1

anyOf variant 1: ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment..

- Value shape: string. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.order_manual_reversal_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.purchase_refund_allocation_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of this entry in the load's purchase refunds..

- Value shape: string. ID of this entry in the load's purchase refunds. ID of this entry in the load's purchase refunds. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of this entry in the load's purchase refunds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.recovery

Declared alternatives: [GiftCardPurchaseRefundAllocationPreviousAttributes.recovery](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.refund_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.refund_id variant 1

anyOf variant 1: ID of the refund. `null` when the entry reverses a manual payment, which has no refund..

- Value shape: (string or null). ID of the refund. `null` when the entry reverses a manual payment, which has no refund. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.status

Declared alternatives: [GiftCardPurchaseRefundAllocationPreviousAttributes.status](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesstatus).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.value_allocations

Declared alternatives: [GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesvalue_allocations).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration

Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Conditional | string or null | ID of the original purchase order whose line item sold the gift card. `order_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration-variant-1order_id). |
| `order_line_item_id` | Conditional | string or null | ID of the order line item that sold the gift card. `order_line_item_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration-variant-1order_line_item_id). |
| `original_gift_card_id` | Conditional | string or null | ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. `original_gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration-variant-1original_gift_card_id). |
| `original_gift_card_load_id` | Conditional | string or null | ID of the load on the original card that the refund or reversal removed value from. `original_gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration-variant-1original_gift_card_load_id). |
| `purchase_refund_allocation_id` | Conditional | string or null | ID of the purchase refund entry on the original load whose removed value this load restores. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration-variant-1purchase_refund_allocation_id). |
| `unit_ordinal` | Conditional | integer or null | Which unit of the line item's quantity the card was issued for, starting at 1. `unit_ordinal`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_restoration-variant-1unit_ordinal). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1

anyOf GiftCardPurchaseRestorationPreviousAttributes.

- Optional: `order_id`, `order_line_item_id`, `original_gift_card_id`, `original_gift_card_load_id`, `purchase_refund_allocation_id`, `unit_ordinal`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 2

anyOf variant 2.

- Undeclared: `order_id`, `order_line_item_id`, `original_gift_card_id`, `original_gift_card_load_id`, `purchase_refund_allocation_id`, `unit_ordinal`.
- Value shape: null. Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.order_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.order_id variant 1

anyOf variant 1: ID of the original purchase order whose line item sold the gift card..

- Value shape: string. ID of the original purchase order whose line item sold the gift card. ID of the original purchase order whose line item sold the gift card. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original purchase order whose line item sold the gift card. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.order_line_item_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item that sold the gift card..

- Value shape: string. ID of the order line item that sold the gift card. ID of the order line item that sold the gift card. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item that sold the gift card. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.original_gift_card_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.original_gift_card_id variant 1

anyOf variant 1: ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed..

- Value shape: string. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.original_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.original_gift_card_load_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.original_gift_card_load_id variant 1

anyOf variant 1: ID of the load on the original card that the refund or reversal removed value from..

- Value shape: string. ID of the load on the original card that the refund or reversal removed value from. ID of the load on the original card that the refund or reversal removed value from. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.original_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load on the original card that the refund or reversal removed value from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.purchase_refund_allocation_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the purchase refund entry on the original load whose removed value this load restores..

- Value shape: string. ID of the purchase refund entry on the original load whose removed value this load restores. ID of the purchase refund entry on the original load whose removed value this load restores. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the purchase refund entry on the original load whose removed value this load restores. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.unit_ordinal

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.unit_ordinal variant 1

anyOf variant 1: Which unit of the line item's quantity the card was issued for, starting at 1..

- Value shape: integer. Which unit of the line item's quantity the card was issued for, starting at 1. Which unit of the line item's quantity the card was issued for, starting at 1. Format: `int64`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_restoration variant 1.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. Which unit of the line item's quantity the card was issued for, starting at 1. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance

Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Conditional | ([MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null) or null | What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. |
| `original_created_at` | Conditional | string or null | When the original funding load was created. RFC3339 timestamp. `original_created_at`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_created_at). |
| `original_source` | Conditional | object and object and Alternative shapes (see declared variants) and Alternative shapes (see declared variants) or null | Where the original funding value came from. `original_source`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source). |
| `original_source_created_at` | Conditional | string or null or null | When the original funding value was received, as recorded on that load. `null` when no source time was recorded. `original_source_created_at`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source_created_at). |
| `refund_allocation_id` | Conditional | string or null | ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. `refund_allocation_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1refund_allocation_id). |
| `root_gift_card_id` | Conditional | string or null | ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. `root_gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1root_gift_card_id). |
| `root_gift_card_load_id` | Conditional | string or null | ID of the original funding load. It stays the same through any number of replacement refunds. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1root_gift_card_load_id). |
| `source_gift_card_id` | Conditional | string or null | ID of the gift card the refunded value came from. `source_gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1source_gift_card_id). |
| `source_gift_card_redemption_id` | Conditional | string or null | ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. `source_gift_card_redemption_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1source_gift_card_redemption_id). |
| `source_purchase_refund_allocation_id` | Conditional | string or null | ID of the gift card purchase refund allocation whose failure created this load. Present only then. `source_purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1source_purchase_refund_allocation_id). |
| `source_refund_id` | Conditional | string or null | ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. `source_refund_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1source_refund_id). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1

anyOf GiftCardRefundProvenancePreviousAttributes.

- Optional: `original_consideration_money`, `original_created_at`, `original_source`, `original_source_created_at`, `refund_allocation_id`, `root_gift_card_id`, `root_gift_card_load_id`, `source_gift_card_id`, `source_gift_card_redemption_id`, `source_purchase_refund_allocation_id`, `source_refund_id`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 2

anyOf variant 2.

- Undeclared: `original_consideration_money`, `original_created_at`, `original_source`, `original_source_created_at`, `refund_allocation_id`, `root_gift_card_id`, `root_gift_card_load_id`, `source_gift_card_id`, `source_gift_card_redemption_id`, `source_purchase_refund_allocation_id`, `source_refund_id`.
- Value shape: null. Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_created_at

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_created_at variant 1

anyOf variant 1: When the original funding load was created. RFC3339 timestamp..

- Value shape: string. When the original funding load was created. RFC3339 timestamp. When the original funding load was created. RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_created_at variant 2

anyOf variant 2.

- Value shape: null. When the original funding load was created. RFC3339 timestamp. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source

Where the original funding value came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Conditional | Alternative shapes (see declared variants) and (string or null) | Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`. `funding_source_type`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-2funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-3funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-4funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-5funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-6funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-7funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-8funding_source_type). |
| `customer_id` | Conditional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id). |
| `external_reference_id` | Conditional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id). |
| `order_id` | Conditional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id). |
| `order_manual_payment_id` | Conditional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id). |
| `payment_intent_id` | Conditional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id). |
| `refund_id` | Conditional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1: `funding_source_type` = `"external_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceExternalPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2: `funding_source_type` = `"flint_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceFlintPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf variant 1; anyOf GiftCardFundingSourceFlintManualPaymentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4: `funding_source_type` = `"import"`

anyOf variant 1; anyOf GiftCardFundingSourceImportPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5: `funding_source_type` = `"adjustment"`

anyOf variant 1; anyOf GiftCardFundingSourceAdjustmentPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6

anyOf variant 1; anyOf GiftCardFundingSourceGiftCardRefundPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: .

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7

anyOf variant 1; anyOf GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: .

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8: `funding_source_type` = `"store_credit"`

anyOf variant 1; anyOf GiftCardFundingSourceStoreCreditPreviousAttributes.

- Optional: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 9

anyOf variant 2.

- Undeclared: `funding_source_type`, `customer_id`, `external_reference_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Value shape: null. Where the original funding value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id variant 1

anyOf variant 1: ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`..

- Value shape: string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id variant 1

anyOf variant 1: Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters..

- Value shape: string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id variant 1

anyOf variant 1: ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`..

- Value shape: string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id variant 1

anyOf variant 1: ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`..

- Value shape: string. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id variant 1

anyOf variant 1: The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order..

- Value shape: string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id variant 1

anyOf variant 1: Refund that issued this value. Present only when funding_source_type is store_credit..

- Value shape: string. Refund that issued this value. Present only when funding_source_type is store_credit. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. Refund that issued this value. Present only when funding_source_type is store_credit. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 2.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 3.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 4.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 5.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 6.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 7.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.funding_source_type variant 1

anyOf group 1 variant 1.

- Value shape: any. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.funding_source_type variant 2, 4, 6, 8

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2; anyOf group 4 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.funding_source_type variant 7

anyOf group 4 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 8.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source_created_at

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source_created_at variant 1

anyOf variant 1: When the original funding value was received, as recorded on that load. `null` when no source time was recorded..

- Value shape: (string or null). When the original funding value was received, as recorded on that load. `null` when no source time was recorded. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source_created_at variant 2

anyOf variant 2.

- Value shape: null. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.refund_allocation_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.refund_allocation_id variant 1

anyOf variant 1: ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it..

- Value shape: string. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.root_gift_card_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.root_gift_card_id variant 1

anyOf variant 1: ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds..

- Value shape: string. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.root_gift_card_load_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load. It stays the same through any number of replacement refunds..

- Value shape: string. ID of the original funding load. It stays the same through any number of replacement refunds. ID of the original funding load. It stays the same through any number of replacement refunds. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load. It stays the same through any number of replacement refunds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_gift_card_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_gift_card_id variant 1

anyOf variant 1: ID of the gift card the refunded value came from..

- Value shape: string. ID of the gift card the refunded value came from. ID of the gift card the refunded value came from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the refunded value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_gift_card_redemption_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it..

- Value shape: string. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_purchase_refund_allocation_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the gift card purchase refund allocation whose failure created this load. Present only then..

- Value shape: string. ID of the gift card purchase refund allocation whose failure created this load. Present only then. ID of the gift card purchase refund allocation whose failure created this load. Present only then. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card purchase refund allocation whose failure created this load. Present only then. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_refund_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_refund_id variant 1

anyOf variant 1: ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it..

- Value shape: string. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.source_refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source

Where the value came from, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string or null | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. `customer_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id). |
| `external_reference_id` | Conditional | string or null | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. `external_reference_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id). |
| `funding_source_type` | Conditional | (string or null) and Alternative shapes (see declared variants) | Where the value came from. Values: [8 declared values](#giftcardloadupdatedmerchanteventdatapreviousattributessource-funding_source_type-values). `funding_source_type`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-1funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-2funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-3funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-4funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-5funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-6funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-7funding_source_type), [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource-variant-8funding_source_type). |
| `order_id` | Conditional | string or null | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. `order_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id). |
| `order_manual_payment_id` | Conditional | string or null | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. `order_manual_payment_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id). |
| `payment_intent_id` | Conditional | string or null | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. `payment_intent_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id). |
| `refund_id` | Conditional | string or null | Refund that issued this value. Present only when funding_source_type is store_credit. `refund_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id). |

#### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1: `funding_source_type` = `"external_payment"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceExternalPaymentPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2: `funding_source_type` = `"flint_payment"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceFlintPaymentPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceFlintManualPaymentPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4: `funding_source_type` = `"import"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceImportPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5: `funding_source_type` = `"adjustment"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceAdjustmentPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6: `funding_source_type` = `"gift_card_refund"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceGiftCardRefundPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8: `funding_source_type` = `"store_credit"`

anyOf GiftCardFundingSourcePreviousAttributes; anyOf GiftCardFundingSourceStoreCreditPreviousAttributes.

- Optional: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 9

anyOf variant 2.

- Undeclared: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Value shape: null. Where the value came from, with your reference for it. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.customer_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.customer_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1customer_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.external_reference_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.external_reference_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1external_reference_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.funding_source_type

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.funding_source_type variant 1

anyOf group 1 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"gift_card_refund"`, `"gift_card_purchase_refund_recovery"`, `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.funding_source_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where the value came from. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.funding_source_type variant 3

anyOf group 2 variant 1: Where the value came from..

- Value shape: string. Where the value came from. Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.funding_source_type variant 5

anyOf group 3 variant 1: Where the value came from..

- Value shape: any. Where the value came from. Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.order_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.order_manual_payment_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.order_manual_payment_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1order_manual_payment_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.payment_intent_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.payment_intent_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1payment_intent_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8.refund_id

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.refund_provenance variant 1.original_source variant 1.refund_id](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesrefund_provenance-variant-1original_source-variant-1refund_id).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no source time was recorded..

- Value shape: (string or null). RFC3339 timestamp. `null` when no source time was recorded. RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no source time was recorded. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

