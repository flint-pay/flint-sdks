[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The balance minus reserved value: what can be spent now. |
| `balance_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The posted balance, including value reserved for redemptions in progress. |
| `code_source` | Optional | string or null | Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`. `code_source`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributescode_source). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. Values: `"USD"`. `currency`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributescurrency). |
| `customer_id` | Optional | string or null or null | ID of the customer associated with the card. `null` when no customer is associated. `customer_id`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributescustomer_id). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. `null` when none is set. `external_reference_id`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `gift_card_id` | Optional | string or null | Unique identifier for this gift card, prefixed `gc_`. `gift_card_id`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `last_loaded_at` | Optional | string or null or null | RFC3339 timestamp. `null` when no value has been loaded onto the card. `last_loaded_at`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributeslast_loaded_at). |
| `last_redeemed_at` | Optional | string or null or null | RFC3339 timestamp. `null` when the card has never been redeemed. `last_redeemed_at`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributeslast_redeemed_at). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributeslast4). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `reserved_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. |
| `restrictions` | Optional | Array of [GiftCardRestriction](../models/GiftCardRestriction.md#giftcardrestriction) or null | The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. `restrictions`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesrestrictions). |
| `status` | Optional | string or null | Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. `status`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`. `supported_actions`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardUpdatedMerchantEventDataPreviousAttributes.code_source

### GiftCardUpdatedMerchantEventDataPreviousAttributes.code_source variant 1

anyOf variant 1: Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated..

- Value shape: string. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`.

### GiftCardUpdatedMerchantEventDataPreviousAttributes.code_source variant 2

anyOf variant 2.

- Value shape: null. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardUpdatedMerchantEventDataPreviousAttributes.currency

### GiftCardUpdatedMerchantEventDataPreviousAttributes.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Values: `"USD"`.

### GiftCardUpdatedMerchantEventDataPreviousAttributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.customer_id

### GiftCardUpdatedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer associated with the card. `null` when no customer is associated..

- Value shape: (string or null). ID of the customer associated with the card. `null` when no customer is associated. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer associated with the card. `null` when no customer is associated. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.external_reference_id

### GiftCardUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when none is set..

- Value shape: (string or null). Caller-owned identifier for this resource in an external system. `null` when none is set. Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: `1`. maxLength: `255`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when none is set. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.gift_card_id

### GiftCardUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 1

anyOf variant 1: Unique identifier for this gift card, prefixed `gc_`..

- Value shape: string. Unique identifier for this gift card, prefixed `gc_`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card, prefixed `gc_`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last_loaded_at

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last_loaded_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no value has been loaded onto the card..

- Value shape: (string or null). RFC3339 timestamp. `null` when no value has been loaded onto the card. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: `date-time`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last_loaded_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no value has been loaded onto the card. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last_redeemed_at

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last_redeemed_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when the card has never been redeemed..

- Value shape: (string or null). RFC3339 timestamp. `null` when the card has never been redeemed. RFC3339 timestamp. `null` when the card has never been redeemed. Format: `date-time`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last_redeemed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when the card has never been redeemed. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last4

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. Last four characters of the card's current code. minLength: `4`. maxLength: `4`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### GiftCardUpdatedMerchantEventDataPreviousAttributes.restrictions

### GiftCardUpdatedMerchantEventDataPreviousAttributes.restrictions variant 1

anyOf variant 1: The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition..

- Value shape: Array of [GiftCardRestriction](../models/GiftCardRestriction.md#giftcardrestriction). The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.restrictions variant 2

anyOf variant 2.

- Value shape: null. The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.restrictions variant 1.[] fields 1

Field definitions: [GiftCardResponse.data.restrictions[]](../models/GiftCardResponse.md#giftcardresponsedatarestrictions).

### GiftCardUpdatedMerchantEventDataPreviousAttributes.status

### GiftCardUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the card is in its lifecycle. Only an `active` card can be spent..

- Value shape: string. Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`.

### GiftCardUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the card is in its lifecycle. Only an `active` card can be spent. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.supported_actions

### GiftCardUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available..

- Value shape: Array of string. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`.

### GiftCardUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardUpdatedMerchantEventDataPreviousAttributes.version

### GiftCardUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. 

### GiftCardUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

