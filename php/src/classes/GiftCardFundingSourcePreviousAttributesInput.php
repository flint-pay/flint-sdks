<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $customer_id
 * @property-read string|null $external_reference_id
 * @property-read string|null $funding_source_type
 * @property-read string|null $order_id
 * @property-read string|null $order_manual_payment_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $refund_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingSourcePreviousAttributesInput extends Model {
    /** @param GiftCardFundingSourceExternalPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceImportPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceStoreCreditPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingSourcePreviousAttributesInput')); }
    /** ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. anyOf[1] (Value): string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. anyOf[1] (Value): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "gift_card_refund", "gift_card_purchase_refund_recovery", "store_credit". anyOf[1] (Value): string. Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "gift_card_refund", "gift_card_purchase_refund_recovery", "store_credit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When funding_source_type is omitted; use hasFundingSourceType() or valueOrDefault().
     */
    public function getFundingSourceType(): mixed { return $this->get('funding_source_type'); }
    public function hasFundingSourceType(): bool { return $this->has('funding_source_type'); }
    /** ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. anyOf[1] (Value): string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. anyOf[1] (Value): string. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255. Example: "omp_01KEZF7C007J18203RBJKB9TYE". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_manual_payment_id is omitted; use hasOrderManualPaymentId() or valueOrDefault().
     */
    public function getOrderManualPaymentId(): mixed { return $this->get('order_manual_payment_id'); }
    public function hasOrderManualPaymentId(): bool { return $this->has('order_manual_payment_id'); }
    /** The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. anyOf[1] (Value): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Refund that issued this value. Present only when funding_source_type is store_credit. anyOf[1] (Value): string. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
}
