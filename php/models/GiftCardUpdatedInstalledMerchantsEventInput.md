[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardUpdatedInstalledMerchantsEventInput

The `gift_card.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardCreatedInstalledMerchantsEventInput.md#giftcardcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributes). |

### GiftCardUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [GiftCardCreatedInstalledMerchantsEventInput.data.object](../models/GiftCardCreatedInstalledMerchantsEventInput.md#giftcardcreatedinstalledmerchantseventinputdataobject).

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | The balance minus reserved value: what can be spent now. |
| `balance_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | The posted balance, including value reserved for redemptions in progress. |
| `code_source` | Optional | string or null | Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`. `code_source`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributescode_source). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `currency` | Optional | string or null | ISO 4217 currency code. Values: `"USD"`. `currency`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributescurrency). |
| `customer_id` | Optional | string or null or null | ID of the customer associated with the card. `null` when no customer is associated. `customer_id`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `external_reference_id` | Optional | string or null or null | Caller-owned identifier for this resource in an external system. `null` when none is set. `external_reference_id`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `gift_card_id` | Optional | string or null | Unique identifier for this gift card, prefixed `gc_`. `gift_card_id`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_id). |
| `last_loaded_at` | Optional | string or null or null | RFC3339 timestamp. `null` when no value has been loaded onto the card. `last_loaded_at`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributeslast_loaded_at). |
| `last_redeemed_at` | Optional | string or null or null | RFC3339 timestamp. `null` when the card has never been redeemed. `last_redeemed_at`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributeslast_redeemed_at). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributeslast4). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `reserved_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. |
| `restrictions` | Optional | Array of [GiftCardRestrictionInput](../models/GiftCardRestrictionInput.md#giftcardrestrictioninput) or null | The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. `restrictions`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributesrestrictions). |
| `status` | Optional | string or null | Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. `status`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`. `supported_actions`: [declared alternatives](../models/GiftCardUpdatedInstalledMerchantsEventInput.md#giftcardupdatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesversion). |

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.code_source

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.code_source variant 1

anyOf variant 1: Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated..

- Value shape: string. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`.

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.code_source variant 2

anyOf variant 2.

- Value shape: null. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency variant 1

anyOf variant 1: ISO 4217 currency code..

- Value shape: string. ISO 4217 currency code. ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. Values: `"USD"`.

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 currency code. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.customer_id

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer associated with the card. `null` when no customer is associated..

- Value shape: (string or null). ID of the customer associated with the card. `null` when no customer is associated. ID of the customer associated with the card. `null` when no customer is associated. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer associated with the card. `null` when no customer is associated. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. `null` when none is set..

- Value shape: (string or null). Caller-owned identifier for this resource in an external system. `null` when none is set. Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. `null` when none is set. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: Unique identifier for this gift card, prefixed `gc_`..

- Value shape: string. Unique identifier for this gift card, prefixed `gc_`. Unique identifier for this gift card, prefixed `gc_`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card, prefixed `gc_`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last_loaded_at

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last_loaded_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no value has been loaded onto the card..

- Value shape: (string or null). RFC3339 timestamp. `null` when no value has been loaded onto the card. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last_loaded_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no value has been loaded onto the card. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last_redeemed_at

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last_redeemed_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when the card has never been redeemed..

- Value shape: (string or null). RFC3339 timestamp. `null` when the card has never been redeemed. RFC3339 timestamp. `null` when the card has never been redeemed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last_redeemed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when the card has never been redeemed. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last4

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. Last four characters of the card's current code. minLength: `4`. maxLength: `4`. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.restrictions

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.restrictions variant 1

anyOf variant 1: The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition..

- Value shape: Array of [GiftCardRestrictionInput](../models/GiftCardRestrictionInput.md#giftcardrestrictioninput). The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.restrictions variant 2

anyOf variant 2.

- Value shape: null. The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the card is in its lifecycle. Only an `active` card can be spent..

- Value shape: string. Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`.

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the card is in its lifecycle. Only an `active` card can be spent. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available..

- Value shape: Array of string. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`.

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. 

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.version](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesversion).

### GiftCardUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

