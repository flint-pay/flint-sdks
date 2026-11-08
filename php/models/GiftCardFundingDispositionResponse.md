[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDispositionResponse

A response containing `GiftCardFundingDisposition` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [GiftCardFundingDisposition](../models/GiftCardFundingDisposition.md#giftcardfundingdisposition) | Resource, collection, or operation result returned by this request. A merchant decision to honor gift card value after its funding payment lost a dispute. `data`: [field definitions](../models/GiftCardFundingDispositionResponse.md#giftcardfundingdispositionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardFundingDispositionResponse.data

Resource, collection, or operation result returned by this request. A merchant decision to honor gift card value after its funding payment lost a dispute.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the disposition was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `disposition` | Required | string | How Flint handles the lost funding. honor_value keeps the affected cards' unspent value spendable and removes the freeze this dispute placed on them. Values: `"honor_value"`. |
| `dispute_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The whole disputed payment amount, which can include consideration for other purchases. It is separate from the original gift card consideration and honored face value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `dispute_id` | Required | string | The lost dispute this disposition resolves. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `gift_card_funding_disposition_id` | Required | string | Stable identifier of the disposition. Example: `"gfd_01KEZF7C0077Q8RK3Q4FD2DTW8"`. |
| `gift_card_ids` | Required | Array of string | Gift cards whose value this disposition honors, including replacement cards that received value from the disputed funding. Items: Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `honored_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unspent value that stays spendable under this disposition, summed across the affected cards, including replacement cards that received value from the disputed funding. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `idempotency_key` | Required | string | The Idempotency-Key sent with the request that created this disposition. |
| `original_gift_card_consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the buyer paid for the gift card value the disputed payment funded, summed across its funding loads. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_intent_id` | Required | string | The disputed payment that funded the gift card value. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `preserved_reserved_value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Part of honored_value_money that pending redemptions held when the disposition was created. It stays reserved for them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason_message` | Required | string | Your reason for honoring the value, from the create request. |

### GiftCardFundingDispositionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

