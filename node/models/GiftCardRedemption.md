[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemption

Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capture_mode` | Required | string | Values: `"automatic"`, `"manual"`. |
| `captured_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `captured_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `expires_at` | Required | string or null | When an uncaptured manual reservation expires. null for automatic capture, which posts immediately. Format: `date-time`. |
| `gift_card_id` | Required | string |  |
| `gift_card_redemption_id` | Required | string |  |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `order_id` | Required | string or null |  |
| `order_payment_attempt_id` | Required | string or null | The order payment attempt the redemption belongs to. Set for source_type flint_order; null for external. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptionrefunded_money). |
| `remaining_refundable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `remaining_refundable_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptionremaining_refundable_money). |
| `requested_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `requested_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `reserved_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `reserved_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `sale_reference` | Required | string or null | Your reference for the sale the redemption pays for. Set for source_type external; null for flint_order. maxLength: `255`. |
| `source_type` | Required | string | Values: `"external"`, `"flint_order"`. |
| `status` | Required | string | Values: `"reserved"`, `"captured"`, `"canceled"`, `"expired"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. |

### GiftCardRedemption.captured_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardRedemption.refunded_money

Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardRedemption.remaining_refundable_money

Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardRedemption.requested_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardRedemption.reserved_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

