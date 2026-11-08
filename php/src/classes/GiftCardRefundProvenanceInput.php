<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object|null $original_consideration_money
 * @property-read string|\DateTimeInterface $original_created_at
 * @property-read array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object $original_source
 * @property-read string|\DateTimeInterface|null $original_source_created_at
 * @property-read string $refund_allocation_id
 * @property-read string $root_gift_card_id
 * @property-read string $root_gift_card_load_id
 * @property-read string $source_gift_card_id
 * @property-read string $source_gift_card_redemption_id
 * @property-read string $source_purchase_refund_allocation_id
 * @property-read string $source_refund_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRefundProvenanceInput extends Model {
    /** @param array{'original_consideration_money': array{'amount': string, 'currency': string}|object|null, 'original_created_at': string|\DateTimeInterface, 'original_source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'original_source_created_at': string|\DateTimeInterface|null, 'refund_allocation_id': string, 'root_gift_card_id': string, 'root_gift_card_load_id': string, 'source_gift_card_id': string, 'source_gift_card_redemption_id': string, 'source_purchase_refund_allocation_id'?: string, 'source_refund_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRefundProvenanceInput')); }
    /** What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When original_consideration_money is omitted; use hasOriginalConsiderationMoney() or valueOrDefault().
     */
    public function getOriginalConsiderationMoney(): mixed { return $this->get('original_consideration_money'); }
    public function hasOriginalConsiderationMoney(): bool { return $this->has('original_consideration_money'); }
    /** When the original funding load was created. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When original_created_at is omitted; use hasOriginalCreatedAt() or valueOrDefault().
     */
    public function getOriginalCreatedAt(): string|\DateTimeInterface { return $this->get('original_created_at'); }
    public function hasOriginalCreatedAt(): bool { return $this->has('original_created_at'); }
    /** Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. funding_source_type (Required): string. Where the value came from. Value enum: "external_payment", "flint_payment", "flint_manual_payment", "import", "adjustment", "store_credit". customer_id (Optional): string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id (Optional): string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent_id (Optional): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". oneOf[1] (Value): {@see GiftCardFundingSourceExternalPaymentInput}. The `external_payment` variant of `GiftCardFundingSource`. oneOf[2] (Value): {@see GiftCardFundingSourceFlintPaymentInput}. The `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@see GiftCardFundingSourceFlintManualPaymentInput}. The `flint_manual_payment` variant of `GiftCardFundingSource`. oneOf[4] (Value): {@see GiftCardFundingSourceImportInput}. The `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@see GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of `GiftCardFundingSource`. oneOf[6] (Value): {@see GiftCardFundingSourceGiftCardRefundInput}. The `gift_card_refund` variant of `GiftCardFundingSource`. oneOf[7] (Value): {@see GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value): {@see GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of `GiftCardFundingSource`.
     * @return array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object
     * @throws SdkError When original_source is omitted; use hasOriginalSource() or valueOrDefault().
     */
    public function getOriginalSource(): mixed { return $this->get('original_source'); }
    public function hasOriginalSource(): bool { return $this->has('original_source'); }
    /** When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When original_source_created_at is omitted; use hasOriginalSourceCreatedAt() or valueOrDefault().
     */
    public function getOriginalSourceCreatedAt(): string|\DateTimeInterface|null { return $this->get('original_source_created_at'); }
    public function hasOriginalSourceCreatedAt(): bool { return $this->has('original_source_created_at'); }
    /** ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. Example: "rta_01KEZF7C00KQJTFKK6C47RSMB8".
     * @return string
     * @throws SdkError When refund_allocation_id is omitted; use hasRefundAllocationId() or valueOrDefault().
     */
    public function getRefundAllocationId(): string { return $this->get('refund_allocation_id'); }
    public function hasRefundAllocationId(): bool { return $this->has('refund_allocation_id'); }
    /** ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When root_gift_card_id is omitted; use hasRootGiftCardId() or valueOrDefault().
     */
    public function getRootGiftCardId(): string { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** ID of the original funding load. It stays the same through any number of replacement refunds. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC".
     * @return string
     * @throws SdkError When root_gift_card_load_id is omitted; use hasRootGiftCardLoadId() or valueOrDefault().
     */
    public function getRootGiftCardLoadId(): string { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** ID of the gift card the refunded value came from. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When source_gift_card_id is omitted; use hasSourceGiftCardId() or valueOrDefault().
     */
    public function getSourceGiftCardId(): string { return $this->get('source_gift_card_id'); }
    public function hasSourceGiftCardId(): bool { return $this->has('source_gift_card_id'); }
    /** ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. Example: "gcr_01KEZF7C002YD2G2J734RRZTWT".
     * @return string
     * @throws SdkError When source_gift_card_redemption_id is omitted; use hasSourceGiftCardRedemptionId() or valueOrDefault().
     */
    public function getSourceGiftCardRedemptionId(): string { return $this->get('source_gift_card_redemption_id'); }
    public function hasSourceGiftCardRedemptionId(): bool { return $this->has('source_gift_card_redemption_id'); }
    /** ID of the gift card purchase refund allocation whose failure created this load. Present only then. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA".
     * @return string
     * @throws SdkError When source_purchase_refund_allocation_id is omitted; use hasSourcePurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getSourcePurchaseRefundAllocationId(): string { return $this->get('source_purchase_refund_allocation_id'); }
    public function hasSourcePurchaseRefundAllocationId(): bool { return $this->has('source_purchase_refund_allocation_id'); }
    /** ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * @return string
     * @throws SdkError When source_refund_id is omitted; use hasSourceRefundId() or valueOrDefault().
     */
    public function getSourceRefundId(): string { return $this->get('source_refund_id'); }
    public function hasSourceRefundId(): bool { return $this->has('source_refund_id'); }
}
