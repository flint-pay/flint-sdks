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
    /** Shape $ (Value): {@see MoneyValue} or null. Shape $.anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getOriginalConsiderationMoney(): MoneyValue|null { return $this->get('original_consideration_money'); }
    public function hasOriginalConsiderationMoney(): bool { return $this->has('original_consideration_money'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string
     */
    public function getOriginalCreatedAt(): string { return $this->get('original_created_at'); }
    public function hasOriginalCreatedAt(): bool { return $this->has('original_created_at'); }
    /** Shape $ (Value): {@see GiftCardFundingSource}. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Shape $.funding_source_type (Required): string.  Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". Shape $.customer_id (Optional): string. minLength: 1. maxLength: 255. Shape $.external_reference_id (Required): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Shape $.order_id (Optional): string. minLength: 1. maxLength: 255. Shape $.order_manual_payment_id (Optional): string. minLength: 1. maxLength: 255. Shape $.payment_intent_id (Optional): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. Shape $.refund_id (Optional): string. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: 1. Shape $.oneOf[1] (Value): {@see GiftCardFundingSourceExternalPayment}. The `external_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[2] (Value): {@see GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[3] (Value): {@see GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of `GiftCardFundingSource`. Shape $.oneOf[4] (Value): {@see GiftCardFundingSourceImport}. The `import` variant of `GiftCardFundingSource`. Shape $.oneOf[5] (Value): {@see GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`. Shape $.oneOf[6] (Value): {@see GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of `GiftCardFundingSource`. Shape $.oneOf[7] (Value): {@see GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. Shape $.oneOf[8] (Value): {@see GiftCardFundingSourceStoreCredit}. The `store_credit` variant of `GiftCardFundingSource`.
     * @return \stdClass
     */
    public function getOriginalSource(): \stdClass { return $this->get('original_source'); }
    public function hasOriginalSource(): bool { return $this->has('original_source'); }
    /** Shape $ (Value): string or null. Format: date-time.
     * @return string|null
     */
    public function getOriginalSourceCreatedAt(): string|null { return $this->get('original_source_created_at'); }
    public function hasOriginalSourceCreatedAt(): bool { return $this->has('original_source_created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRefundAllocationId(): string { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRootGiftCardId(): string { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRootGiftCardLoadId(): string { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSourceGiftCardId(): string { return $this->get('source_gift_card_id'); }
    public function hasSourceGiftCardId(): bool { return $this->has('source_gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSourceGiftCardRedemptionId(): string { return $this->get('source_gift_card_redemption_id'); }
    public function hasSourceGiftCardRedemptionId(): bool { return $this->has('source_gift_card_redemption_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSourcePurchaseRefundAllocationId(): ?string { return $this->get('source_purchase_refund_allocation_id'); }
    public function hasSourcePurchaseRefundAllocationId(): bool { return $this->has('source_purchase_refund_allocation_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSourceRefundId(): ?string { return $this->get('source_refund_id'); }
    public function hasSourceRefundId(): bool { return $this->has('source_refund_id'); }
}
