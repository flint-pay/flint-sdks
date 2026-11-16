[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadUpdatedInstalledMerchantsEventInput

The `gift_card_load.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_load.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardLoadCreatedInstalledMerchantsEventInput.md#giftcardloadcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributes). |

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [GiftCardLoadCreatedInstalledMerchantsEventInput.data.object](../models/GiftCardLoadCreatedInstalledMerchantsEventInput.md#giftcardloadcreatedinstalledmerchantseventinputdataobject).

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | ([MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `funding_disputes` | Optional | Array of [GiftCardFundingDisputePreviousAttributesInput](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinput) or null | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. `funding_disputes`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesfunding_disputes). |
| `gift_card_id` | Optional | string or null | ID of the gift card the load added value to. `gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | Unique identifier for this gift card load, prefixed `gcl_`. `gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_load_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHoldPreviousAttributesInput](../models/GiftCardPurchaseRefundValueHoldPreviousAttributesInput.md#giftcardpurchaserefundvalueholdpreviousattributesinput) or null | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. `purchase_refund_value_holds`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributespurchase_refund_value_holds). |
| `purchase_refunds` | Optional | Array of [GiftCardPurchaseRefundAllocationPreviousAttributesInput](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinput) or null | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. `purchase_refunds`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributespurchase_refunds). |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestorationPreviousAttributesInput](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinput) or null | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. |
| `refund_provenance` | Optional | [GiftCardRefundProvenancePreviousAttributesInput](../models/GiftCardRefundProvenancePreviousAttributesInput.md#giftcardrefundprovenancepreviousattributesinput) or null | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. |
| `refund_transferred_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. |
| `remaining_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. |
| `reversed_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. |
| `source` | Optional | [GiftCardFundingSourcePreviousAttributesInput](../models/GiftCardFundingSourcePreviousAttributesInput.md#giftcardfundingsourcepreviousattributesinput) or null | Where the value came from, with your reference for it. |
| `source_created_at` | Optional | string or null or null | RFC3339 timestamp. `null` when no source time was recorded. `source_created_at`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributessource_created_at). |
| `value_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The face value the load adds to the card. |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion). |

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.funding_disputes

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.funding_disputes variant 1

anyOf variant 1: Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition..

- Value shape: Array of [GiftCardFundingDisputePreviousAttributesInput](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinput). Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.funding_disputes variant 2

anyOf variant 2.

- Value shape: null. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the load added value to..

- Value shape: string. ID of the gift card the load added value to. ID of the gift card the load added value to. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the load added value to. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_load_id

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_load_id variant 1

anyOf variant 1: Unique identifier for this gift card load, prefixed `gcl_`..

- Value shape: string. Unique identifier for this gift card load, prefixed `gcl_`. Unique identifier for this gift card load, prefixed `gcl_`. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card load, prefixed `gcl_`. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 1

anyOf variant 1: Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent..

- Value shape: (string or null). Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.purchase_refund_value_holds

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.purchase_refund_value_holds variant 1

anyOf variant 1: Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds..

- Value shape: Array of [GiftCardPurchaseRefundValueHoldPreviousAttributesInput](../models/GiftCardPurchaseRefundValueHoldPreviousAttributesInput.md#giftcardpurchaserefundvalueholdpreviousattributesinput). Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.purchase_refund_value_holds variant 2

anyOf variant 2.

- Value shape: null. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.purchase_refunds

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.purchase_refunds variant 1

anyOf variant 1: Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold..

- Value shape: Array of [GiftCardPurchaseRefundAllocationPreviousAttributesInput](../models/GiftCardPurchaseRefundAllocationPreviousAttributesInput.md#giftcardpurchaserefundallocationpreviousattributesinput). Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.purchase_refunds variant 2

anyOf variant 2.

- Value shape: null. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.source_created_at

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.source_created_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no source time was recorded..

- Value shape: (string or null). RFC3339 timestamp. `null` when no source time was recorded. RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.source_created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no source time was recorded. 

### GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributesInput.version](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion).

### GiftCardLoadUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

