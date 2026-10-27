[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDispositionInput

A merchant decision to honor gift card value after its funding payment lost a dispute.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the disposition was created. Format: `date-time`. |
| `disposition` | Required | string | How Flint handles the lost funding. honor_value keeps the affected cards' unspent value spendable and removes the freeze this dispute placed on them. Values: `"honor_value"`. |
| `dispute_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The whole disputed payment amount, which can include consideration for other purchases. It is separate from the original gift card consideration and honored face value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `dispute_id` | Required | string | The lost dispute this disposition resolves. |
| `gift_card_funding_disposition_id` | Required | string | Stable identifier of the disposition. |
| `gift_card_ids` | Required | Array of string | Gift cards whose value this disposition honors, including replacement cards that received value from the disputed funding. |
| `honored_value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Unspent value that stays spendable under this disposition, summed across the affected cards, including replacement cards that received value from the disputed funding. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `idempotency_key` | Required | string | The Idempotency-Key sent with the request that created this disposition. |
| `original_gift_card_consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | What the buyer paid for the gift card value the disputed payment funded, summed across its funding loads. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_intent_id` | Required | string | The disputed payment that funded the gift card value. |
| `preserved_reserved_value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Part of honored_value_money that pending redemptions held when the disposition was created. It stays reserved for them. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason_message` | Required | string | Your reason for honoring the value, from the create request. |

