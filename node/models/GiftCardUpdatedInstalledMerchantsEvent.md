[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardUpdatedInstalledMerchantsEvent

The `gift_card.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardCreatedInstalledMerchantsEvent.md#giftcardcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributes). |

### GiftCardUpdatedInstalledMerchantsEvent.data.object

Field definitions: [GiftCardCreatedInstalledMerchantsEvent.data.object](../models/GiftCardCreatedInstalledMerchantsEvent.md#giftcardcreatedinstalledmerchantseventdataobject).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The balance minus reserved value: what can be spent now. `available_money`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesavailable_money). |
| `balance_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The posted balance, including value reserved for redemptions in progress. `balance_money`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesbalance_money). |
| `code_source` | Optional | string or null | Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`. `code_source`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributescode_source). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. Values: `"USD"`. `currency`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributescurrency). |
| `customer_id` | Optional | string or null | ID of the customer associated with the card. `null` when no customer is associated. `customer_id`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `null` when none is set. `external_reference_id`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `gift_card_id` | Optional | string or null | Unique identifier for this gift card, prefixed `gc_`. `gift_card_id`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesgift_card_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `last_loaded_at` | Optional | string or null | RFC3339 timestamp. `null` when no value has been loaded onto the card. `last_loaded_at`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributeslast_loaded_at). |
| `last_redeemed_at` | Optional | string or null | RFC3339 timestamp. `null` when the card has never been redeemed. `last_redeemed_at`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributeslast_redeemed_at). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributeslast4). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `reserved_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. `reserved_money`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesreserved_money). |
| `restrictions` | Optional | Array of [GiftCardRestrictionPreviousAttributes](../models/GiftCardRestrictionPreviousAttributes.md#giftcardrestrictionpreviousattributes) or null | The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. `restrictions`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesrestrictions). |
| `status` | Optional | string or null | Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. `status`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`. `supported_actions`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEvent.md#giftcardupdatedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion). |

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.available_money

The balance minus reserved value: what can be spent now.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.available_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.available_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The balance minus reserved value: what can be spent now. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.available_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.available_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_money

The posted balance, including value reserved for redemptions in progress.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The posted balance, including value reserved for redemptions in progress. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.balance_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.code_source

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.code_source variant 1

anyOf variant 1: Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated..

- Value shape: string. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.code_source variant 2

anyOf variant 2.

- Value shape: null. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.currency

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. Values: `"USD"`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer associated with the card. `null` when no customer is associated..

- Value shape: string. ID of the customer associated with the card. `null` when no customer is associated. ID of the customer associated with the card. `null` when no customer is associated. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer associated with the card. `null` when no customer is associated. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when none is set..

- Value shape: string. Caller-owned identifier for this resource in an external system. `null` when none is set. Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when none is set. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: Unique identifier for this gift card, prefixed `gc_`..

- Value shape: string. Unique identifier for this gift card, prefixed `gc_`. Unique identifier for this gift card, prefixed `gc_`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card, prefixed `gc_`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last_loaded_at

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last_loaded_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no value has been loaded onto the card..

- Value shape: string. RFC3339 timestamp. `null` when no value has been loaded onto the card. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last_loaded_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no value has been loaded onto the card. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last_redeemed_at

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last_redeemed_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when the card has never been redeemed..

- Value shape: string. RFC3339 timestamp. `null` when the card has never been redeemed. RFC3339 timestamp. `null` when the card has never been redeemed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last_redeemed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when the card has never been redeemed. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last4

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. Last four characters of the card's current code. minLength: `4`. maxLength: `4`. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money

Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.restrictions

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.restrictions variant 1

anyOf variant 1: The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition..

- Value shape: Array of [GiftCardRestrictionPreviousAttributes](../models/GiftCardRestrictionPreviousAttributes.md#giftcardrestrictionpreviousattributes). The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.restrictions variant 2

anyOf variant 2.

- Value shape: null. The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the card is in its lifecycle. Only an `active` card can be spent..

- Value shape: string. Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the card is in its lifecycle. Only an `active` card can be spent. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available..

- Value shape: Array of string. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`.

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. 

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.version](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion).

### GiftCardUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

