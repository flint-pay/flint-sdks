[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardResponse

A response containing `GiftCard` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [GiftCard](../models/GiftCard.md#giftcard) | Resource, collection, or operation result returned by this request. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `data`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardResponse.data

Resource, collection, or operation result returned by this request. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The balance minus reserved value: what can be spent now. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The posted balance, including value reserved for redemptions in progress. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `code_source` | Required | string | Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Values: `"generated"`, `"imported"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. Values: `"USD"`. |
| `customer_id` | Required | string or null | ID of the customer associated with the card. `null` when no customer is associated. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `gift_card_id` | Required | string | Unique identifier for this gift card, prefixed `gc_`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `last_loaded_at` | Required | string or null | RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `last_redeemed_at` | Required | string or null | RFC3339 timestamp. `null` when the card has never been redeemed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `last4` | Required | string | Last four characters of the card's current code. minLength: `4`. maxLength: `4`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `reserved_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `restrictions` | Required | Array of [GiftCardRestriction](../models/GiftCardRestriction.md#giftcardrestriction) | The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. `restrictions[]`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedatarestrictions). |
| `status` | Required | string | Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. Items values: `"adjust_balance"`, `"cash_out"`, `"close"`, `"freeze"`, `"unfreeze"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### GiftCardResponse.data.restrictions[]

A restriction on a gift card, either a merchant freeze or a funding dispute, with its reason or dispute details.

Field definitions: [shared fields](GiftCardRestrictionInput.md#giftcardrestrictioninput).

### GiftCardResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

