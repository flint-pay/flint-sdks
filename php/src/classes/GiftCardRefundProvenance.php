<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue|null $original_consideration_money
 * @property-read string $original_created_at
 * @property-read \stdClass $original_source
 * @property-read string|null $original_source_created_at
 * @property-read string $refund_allocation_id
 * @property-read string $root_gift_card_id
 * @property-read string $root_gift_card_load_id
 * @property-read string $source_gift_card_id
 * @property-read string $source_gift_card_redemption_id
 * @property-read ?string $source_purchase_refund_allocation_id
 * @property-read ?string $source_refund_id
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRefundProvenance extends Model {
    /** @param array{'original_consideration_money': mixed, 'original_created_at': string, 'original_source': \stdClass, 'original_source_created_at': string|null, 'refund_allocation_id': string, 'root_gift_card_id': string, 'root_gift_card_load_id': string, 'source_gift_card_id': string, 'source_gift_card_redemption_id': string, 'source_purchase_refund_allocation_id'?: string, 'source_refund_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRefundProvenance')); }
    /**  anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getOriginalConsiderationMoney(): MoneyValue|null { return $this->get('original_consideration_money'); }
    public function hasOriginalConsiderationMoney(): bool { return $this->has('original_consideration_money'); }
    /** Format: date-time.
     * @return string
     */
    public function getOriginalCreatedAt(): string { return $this->get('original_created_at'); }
    public function hasOriginalCreatedAt(): bool { return $this->has('original_created_at'); }
    /** Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. funding_source_type (Required): string.  Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". customer_id (Optional): string. minLength: 1. maxLength: 255. external_reference_id (Required): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. order_id (Optional): string. minLength: 1. maxLength: 255. order_manual_payment_id (Optional): string. minLength: 1. maxLength: 255. payment_intent_id (Optional): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. refund_id (Optional): string. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: 1. oneOf[1] (Value): {@see GiftCardFundingSourceExternalPayment}. The `external_payment` variant of `GiftCardFundingSource`. oneOf[2] (Value): {@see GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@see GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of `GiftCardFundingSource`. oneOf[4] (Value): {@see GiftCardFundingSourceImport}. The `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@see GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`. oneOf[6] (Value): {@see GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of `GiftCardFundingSource`. oneOf[7] (Value): {@see GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value): {@see GiftCardFundingSourceStoreCredit}. The `store_credit` variant of `GiftCardFundingSource`.
     * @return \stdClass
     */
    public function getOriginalSource(): \stdClass { return $this->get('original_source'); }
    public function hasOriginalSource(): bool { return $this->has('original_source'); }
    /** Format: date-time.
     * @return string|null
     */
    public function getOriginalSourceCreatedAt(): string|null { return $this->get('original_source_created_at'); }
    public function hasOriginalSourceCreatedAt(): bool { return $this->has('original_source_created_at'); }
    /** refund_allocation_id
     * @return string
     */
    public function getRefundAllocationId(): string { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** root_gift_card_id
     * @return string
     */
    public function getRootGiftCardId(): string { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** root_gift_card_load_id
     * @return string
     */
    public function getRootGiftCardLoadId(): string { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** source_gift_card_id
     * @return string
     */
    public function getSourceGiftCardId(): string { return $this->get('source_gift_card_id'); }
    public function hasSourceGiftCardId(): bool { return $this->has('source_gift_card_id'); }
    /** source_gift_card_redemption_id
     * @return string
     */
    public function getSourceGiftCardRedemptionId(): string { return $this->get('source_gift_card_redemption_id'); }
    public function hasSourceGiftCardRedemptionId(): bool { return $this->has('source_gift_card_redemption_id'); }
    /** source_purchase_refund_allocation_id
     * @return ?string
     */
    public function getSourcePurchaseRefundAllocationId(): ?string { return $this->get('source_purchase_refund_allocation_id'); }
    public function hasSourcePurchaseRefundAllocationId(): bool { return $this->has('source_purchase_refund_allocation_id'); }
    /** source_refund_id
     * @return ?string
     */
    public function getSourceRefundId(): ?string { return $this->get('source_refund_id'); }
    public function hasSourceRefundId(): bool { return $this->has('source_refund_id'); }
}
