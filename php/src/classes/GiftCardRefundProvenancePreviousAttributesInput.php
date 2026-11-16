<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $original_consideration_money
 * @property-read string|\DateTimeInterface|null $original_created_at
 * @property-read GiftCardFundingSourceExternalPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceImportPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceStoreCreditPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $original_source
 * @property-read string|\DateTimeInterface|null|null $original_source_created_at
 * @property-read string|null $refund_allocation_id
 * @property-read string|null $root_gift_card_id
 * @property-read string|null $root_gift_card_load_id
 * @property-read string|null $source_gift_card_id
 * @property-read string|null $source_gift_card_redemption_id
 * @property-read string|null $source_purchase_refund_allocation_id
 * @property-read string|null $source_refund_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRefundProvenancePreviousAttributesInput extends Model {
    /** @param array{'original_consideration_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'original_created_at'?: string|\DateTimeInterface|null, 'original_source'?: GiftCardFundingSourceExternalPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceImportPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceStoreCreditPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'original_source_created_at'?: string|\DateTimeInterface|null|null, 'refund_allocation_id'?: string|null, 'root_gift_card_id'?: string|null, 'root_gift_card_load_id'?: string|null, 'source_gift_card_id'?: string|null, 'source_gift_card_redemption_id'?: string|null, 'source_purchase_refund_allocation_id'?: string|null, 'source_refund_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRefundProvenancePreviousAttributesInput')); }
    /** What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. anyOf[1] (Value): ({@see MoneyValuePreviousAttributesInput} or null). What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. anyOf[1].anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When original_consideration_money is omitted; use hasOriginalConsiderationMoney() or valueOrDefault().
     */
    public function getOriginalConsiderationMoney(): mixed { return $this->get('original_consideration_money'); }
    public function hasOriginalConsiderationMoney(): bool { return $this->has('original_consideration_money'); }
    /** When the original funding load was created. RFC3339 timestamp. anyOf[1] (Value): string. When the original funding load was created. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When original_created_at is omitted; use hasOriginalCreatedAt() or valueOrDefault().
     */
    public function getOriginalCreatedAt(): mixed { return $this->get('original_created_at'); }
    public function hasOriginalCreatedAt(): bool { return $this->has('original_created_at'); }
    /** Where the original funding value came from. anyOf[1] (Value): object and {@see GiftCardFundingSourcePreviousAttributesInput} and ({@see GiftCardFundingSourceExternalPaymentPreviousAttributesInput} or {@see GiftCardFundingSourceFlintPaymentPreviousAttributesInput} or {@see GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput} or {@see GiftCardFundingSourceImportPreviousAttributesInput} or {@see GiftCardFundingSourceAdjustmentPreviousAttributesInput} or {@see GiftCardFundingSourceGiftCardRefundPreviousAttributesInput} or {@see GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput} or {@see GiftCardFundingSourceStoreCreditPreviousAttributesInput}). anyOf[1].funding_source_type (Optional): Alternative shapes (see declared variants) and (string or null). Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". anyOf[1].funding_source_type.anyOf[1] (Value): any.  Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". anyOf[1].funding_source_type.anyOf[2] (Value): null. anyOf[1].funding_source_type.anyOf[1] (Value): string. Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "gift_card_refund", "gift_card_purchase_refund_recovery", "store_credit". anyOf[1].customer_id (Optional): string or null. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. anyOf[1].customer_id.anyOf[1] (Value): string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[1].customer_id.anyOf[2] (Value): null. anyOf[1].external_reference_id (Optional): string or null. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. anyOf[1].external_reference_id.anyOf[1] (Value): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". anyOf[1].external_reference_id.anyOf[2] (Value): null. anyOf[1].order_id (Optional): string or null. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. anyOf[1].order_id.anyOf[1] (Value): string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[1].order_id.anyOf[2] (Value): null. anyOf[1].order_manual_payment_id (Optional): string or null. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. anyOf[1].order_manual_payment_id.anyOf[1] (Value): string. ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255. Example: "omp_01KEZF7C007J18203RBJKB9TYE". anyOf[1].order_manual_payment_id.anyOf[2] (Value): null. anyOf[1].payment_intent_id (Optional): string or null. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. anyOf[1].payment_intent_id.anyOf[1] (Value): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[1].payment_intent_id.anyOf[2] (Value): null. anyOf[1].refund_id (Optional): string or null. Refund that issued this value. Present only when funding_source_type is store_credit. anyOf[1].refund_id.anyOf[1] (Value): string. Refund that issued this value. Present only when funding_source_type is store_credit. minLength: 1. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[1].refund_id.anyOf[2] (Value): null. anyOf[1].anyOf[1] (Value): {@see GiftCardFundingSourceExternalPaymentPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): {@see GiftCardFundingSourceFlintPaymentPreviousAttributesInput}. anyOf[1].anyOf[3] (Value): {@see GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput}. anyOf[1].anyOf[4] (Value): {@see GiftCardFundingSourceImportPreviousAttributesInput}. anyOf[1].anyOf[5] (Value): {@see GiftCardFundingSourceAdjustmentPreviousAttributesInput}. anyOf[1].anyOf[6] (Value): {@see GiftCardFundingSourceGiftCardRefundPreviousAttributesInput}. anyOf[1].anyOf[7] (Value): {@see GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput}. anyOf[1].anyOf[8] (Value): {@see GiftCardFundingSourceStoreCreditPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardFundingSourceExternalPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceFlintManualPaymentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceImportPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceAdjustmentPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardRefundPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributesInput|array<array-key, mixed>|\stdClass|GiftCardFundingSourceStoreCreditPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When original_source is omitted; use hasOriginalSource() or valueOrDefault().
     */
    public function getOriginalSource(): mixed { return $this->get('original_source'); }
    public function hasOriginalSource(): bool { return $this->has('original_source'); }
    /** When the original funding value was received, as recorded on that load. `null` when no source time was recorded. anyOf[1] (Value): string or null. When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null|null
     * @throws SdkError When original_source_created_at is omitted; use hasOriginalSourceCreatedAt() or valueOrDefault().
     */
    public function getOriginalSourceCreatedAt(): mixed { return $this->get('original_source_created_at'); }
    public function hasOriginalSourceCreatedAt(): bool { return $this->has('original_source_created_at'); }
    /** ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. anyOf[1] (Value): string. ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. Example: "rta_01KEZF7C00KQJTFKK6C47RSMB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_allocation_id is omitted; use hasRefundAllocationId() or valueOrDefault().
     */
    public function getRefundAllocationId(): mixed { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. anyOf[1] (Value): string. ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When root_gift_card_id is omitted; use hasRootGiftCardId() or valueOrDefault().
     */
    public function getRootGiftCardId(): mixed { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** ID of the original funding load. It stays the same through any number of replacement refunds. anyOf[1] (Value): string. ID of the original funding load. It stays the same through any number of replacement refunds. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When root_gift_card_load_id is omitted; use hasRootGiftCardLoadId() or valueOrDefault().
     */
    public function getRootGiftCardLoadId(): mixed { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** ID of the gift card the refunded value came from. anyOf[1] (Value): string. ID of the gift card the refunded value came from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_gift_card_id is omitted; use hasSourceGiftCardId() or valueOrDefault().
     */
    public function getSourceGiftCardId(): mixed { return $this->get('source_gift_card_id'); }
    public function hasSourceGiftCardId(): bool { return $this->has('source_gift_card_id'); }
    /** ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. anyOf[1] (Value): string. ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_gift_card_redemption_id is omitted; use hasSourceGiftCardRedemptionId() or valueOrDefault().
     */
    public function getSourceGiftCardRedemptionId(): mixed { return $this->get('source_gift_card_redemption_id'); }
    public function hasSourceGiftCardRedemptionId(): bool { return $this->has('source_gift_card_redemption_id'); }
    /** ID of the gift card purchase refund allocation whose failure created this load. Present only then. anyOf[1] (Value): string. ID of the gift card purchase refund allocation whose failure created this load. Present only then. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_purchase_refund_allocation_id is omitted; use hasSourcePurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getSourcePurchaseRefundAllocationId(): mixed { return $this->get('source_purchase_refund_allocation_id'); }
    public function hasSourcePurchaseRefundAllocationId(): bool { return $this->has('source_purchase_refund_allocation_id'); }
    /** ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. anyOf[1] (Value): string. ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_refund_id is omitted; use hasSourceRefundId() or valueOrDefault().
     */
    public function getSourceRefundId(): mixed { return $this->get('source_refund_id'); }
    public function hasSourceRefundId(): bool { return $this->has('source_refund_id'); }
}
