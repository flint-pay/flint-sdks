[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundWithGiftCardCodesPaymentRefundsItemRefundedPlatformFeeMoney

The platform fee this payment refund returns to you, present when the payment carries a collected platform fee: its share when the refund was created with refund_platform_fee true, 0 when the partner app keeps the fee. Flint returns it once this payment refund succeeds. If this payment refund then fails, Flint doesn't take the returned fee back. See Platform fees.

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Response model.

Fields, types, descriptions and enum values: [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney).

