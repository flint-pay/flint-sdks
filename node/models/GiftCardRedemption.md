[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemption

Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `succeeded` and increase `refunded_money`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capture_mode` | Required | string | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`. |
| `captured_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value captured from the card so far. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `captured_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptioncaptured_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string or null | When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_id` | Required | string | ID of the gift card the value is spent from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Required | string | Unique identifier for this gift card redemption, prefixed `gcr_`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `order_id` | Required | string or null | ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_payment_attempt_id` | Required | string or null | The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptionrefunded_money). |
| `remaining_refundable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `remaining_refundable_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptionremaining_refundable_money). |
| `requested_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested when the redemption was created. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `requested_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptionrequested_money). |
| `reserved_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value held on the card for this redemption while it is reserved. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `reserved_money`: [field definitions](../models/GiftCardRedemption.md#giftcardredemptionreserved_money). |
| `sale_reference` | Required | string or null | Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. maxLength: `255`. |
| `source_type` | Required | string | What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`. |
| `status` | Required | string | Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### GiftCardRedemption.captured_money

The value captured from the card so far. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardRedemption.refunded_money

Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardRedemption.remaining_refundable_money

Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardRedemption.requested_money

The amount requested when the redemption was created. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardRedemption.reserved_money

The value held on the card for this redemption while it is reserved. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

