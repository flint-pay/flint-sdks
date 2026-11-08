<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $customer_id
 * @property-read string $external_reference_id
 * @property-read string $funding_source_type
 * @property-read ?string $order_id
 * @property-read ?string $order_manual_payment_id
 * @property-read ?string $payment_intent_id
 * @property-read ?string $refund_id
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardLoadSourceGiftCardPurchaseRefundRecovery extends Model {
    /** @param array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'order_manual_payment_id'?: string, 'payment_intent_id'?: string, 'refund_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadSourceGiftCardPurchaseRefundRecovery')); }
    /** ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Where the value came from. Value enum: "gift_card_purchase_refund_recovery".
     * @return string
     */
    public function getFundingSourceType(): string { return $this->get('funding_source_type'); }
    public function hasFundingSourceType(): bool { return $this->has('funding_source_type'); }
    /** ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getOrderManualPaymentId(): ?string { return $this->get('order_manual_payment_id'); }
    public function hasOrderManualPaymentId(): bool { return $this->has('order_manual_payment_id'); }
    /** The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Refund that issued this value. Present only when funding_source_type is store_credit. minLength: 1.
     * @return ?string
     */
    public function getRefundId(): ?string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
}
