<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $original_consideration_money
 * @property-read string|null $original_created_at
 * @property-read \stdClass|null $original_source
 * @property-read string|null $original_source_created_at
 * @property-read string|null $refund_allocation_id
 * @property-read string|null $root_gift_card_id
 * @property-read string|null $root_gift_card_load_id
 * @property-read string|null $source_gift_card_id
 * @property-read string|null $source_gift_card_redemption_id
 * @property-read string|null $source_purchase_refund_allocation_id
 * @property-read string|null $source_refund_id
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRefundProvenancePreviousAttributes extends Model {
    /** @param array{'original_consideration_money'?: mixed, 'original_created_at'?: mixed, 'original_source'?: mixed, 'original_source_created_at'?: mixed, 'refund_allocation_id'?: mixed, 'root_gift_card_id'?: mixed, 'root_gift_card_load_id'?: mixed, 'source_gift_card_id'?: mixed, 'source_gift_card_redemption_id'?: mixed, 'source_purchase_refund_allocation_id'?: mixed, 'source_refund_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRefundProvenancePreviousAttributes')); }
    /** What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOriginalConsiderationMoney(): MoneyValuePreviousAttributes|null { return $this->get('original_consideration_money'); }
    public function hasOriginalConsiderationMoney(): bool { return $this->has('original_consideration_money'); }
    /** When the original funding load was created. RFC3339 timestamp. anyOf[1] (Value): string. When the original funding load was created. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalCreatedAt(): string|null { return $this->get('original_created_at'); }
    public function hasOriginalCreatedAt(): bool { return $this->has('original_created_at'); }
    /** Where the original funding value came from. anyOf[1] (Value): object and {@see GiftCardFundingSourcePreviousAttributes} and ({@see GiftCardFundingSourceExternalPaymentPreviousAttributes} or {@see GiftCardFundingSourceFlintPaymentPreviousAttributes} or {@see GiftCardFundingSourceFlintManualPaymentPreviousAttributes} or {@see GiftCardFundingSourceImportPreviousAttributes} or {@see GiftCardFundingSourceAdjustmentPreviousAttributes} or {@see GiftCardFundingSourceGiftCardRefundPreviousAttributes} or {@see GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes} or {@see GiftCardFundingSourceStoreCreditPreviousAttributes}). anyOf[1].funding_source_type (Optional): Alternative shapes (see declared variants) and (string or null). Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". anyOf[1].funding_source_type.anyOf[1] (Value): any.  Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". anyOf[1].funding_source_type.anyOf[2] (Value): null. anyOf[1].funding_source_type.anyOf[1] (Value): string. Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "gift_card_refund", "gift_card_purchase_refund_recovery", "store_credit". anyOf[1].customer_id (Optional): string or null. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. anyOf[1].customer_id.anyOf[1] (Value): string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. anyOf[1].customer_id.anyOf[2] (Value): null. anyOf[1].external_reference_id (Optional): string or null. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. anyOf[1].external_reference_id.anyOf[1] (Value): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. anyOf[1].external_reference_id.anyOf[2] (Value): null. anyOf[1].order_id (Optional): string or null. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. anyOf[1].order_id.anyOf[1] (Value): string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength: 255. anyOf[1].order_id.anyOf[2] (Value): null. anyOf[1].order_manual_payment_id (Optional): string or null. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. anyOf[1].order_manual_payment_id.anyOf[1] (Value): string. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255. anyOf[1].order_manual_payment_id.anyOf[2] (Value): null. anyOf[1].payment_intent_id (Optional): string or null. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. anyOf[1].payment_intent_id.anyOf[1] (Value): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. anyOf[1].payment_intent_id.anyOf[2] (Value): null. anyOf[1].refund_id (Optional): string or null. Refund that issued this value. Present only when funding_source_type is store_credit. anyOf[1].refund_id.anyOf[1] (Value): string. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: 1. anyOf[1].refund_id.anyOf[2] (Value): null. anyOf[1].anyOf[1] (Value): {@see GiftCardFundingSourceExternalPaymentPreviousAttributes}. anyOf[1].anyOf[2] (Value): {@see GiftCardFundingSourceFlintPaymentPreviousAttributes}. anyOf[1].anyOf[3] (Value): {@see GiftCardFundingSourceFlintManualPaymentPreviousAttributes}. anyOf[1].anyOf[4] (Value): {@see GiftCardFundingSourceImportPreviousAttributes}. anyOf[1].anyOf[5] (Value): {@see GiftCardFundingSourceAdjustmentPreviousAttributes}. anyOf[1].anyOf[6] (Value): {@see GiftCardFundingSourceGiftCardRefundPreviousAttributes}. anyOf[1].anyOf[7] (Value): {@see GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes}. anyOf[1].anyOf[8] (Value): {@see GiftCardFundingSourceStoreCreditPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getOriginalSource(): \stdClass|null { return $this->get('original_source'); }
    public function hasOriginalSource(): bool { return $this->has('original_source'); }
    /** When the original funding value was received, as recorded on that load. `null` when no source time was recorded. anyOf[1] (Value): string. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalSourceCreatedAt(): string|null { return $this->get('original_source_created_at'); }
    public function hasOriginalSourceCreatedAt(): bool { return $this->has('original_source_created_at'); }
    /** ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. anyOf[1] (Value): string. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundAllocationId(): string|null { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. anyOf[1] (Value): string. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRootGiftCardId(): string|null { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** ID of the original funding load. It stays the same through any number of replacement refunds. anyOf[1] (Value): string. ID of the original funding load. It stays the same through any number of replacement refunds. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRootGiftCardLoadId(): string|null { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** ID of the gift card the refunded value came from. anyOf[1] (Value): string. ID of the gift card the refunded value came from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceGiftCardId(): string|null { return $this->get('source_gift_card_id'); }
    public function hasSourceGiftCardId(): bool { return $this->has('source_gift_card_id'); }
    /** ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. anyOf[1] (Value): string. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceGiftCardRedemptionId(): string|null { return $this->get('source_gift_card_redemption_id'); }
    public function hasSourceGiftCardRedemptionId(): bool { return $this->has('source_gift_card_redemption_id'); }
    /** ID of the gift card purchase refund allocation whose failure created this load. Present only then. anyOf[1] (Value): string. ID of the gift card purchase refund allocation whose failure created this load. Present only then. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourcePurchaseRefundAllocationId(): string|null { return $this->get('source_purchase_refund_allocation_id'); }
    public function hasSourcePurchaseRefundAllocationId(): bool { return $this->has('source_purchase_refund_allocation_id'); }
    /** ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. anyOf[1] (Value): string. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceRefundId(): string|null { return $this->get('source_refund_id'); }
    public function hasSourceRefundId(): bool { return $this->has('source_refund_id'); }
}
