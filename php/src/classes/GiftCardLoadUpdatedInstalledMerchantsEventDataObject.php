<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue|null $consideration_money
 * @property-read string $created_at
 * @property-read list<GiftCardFundingDispute> $funding_disputes
 * @property-read string $gift_card_id
 * @property-read string $gift_card_load_id
 * @property-read string|null $idempotency_key
 * @property-read ?list<GiftCardPurchaseRefundValueHold> $purchase_refund_value_holds
 * @property-read list<GiftCardPurchaseRefundAllocation> $purchase_refunds
 * @property-read ?GiftCardPurchaseRestoration $purchase_restoration
 * @property-read ?GiftCardRefundProvenance $refund_provenance
 * @property-read ?MoneyValue $refund_transferred_money
 * @property-read MoneyValue $remaining_money
 * @property-read MoneyValue $reversed_money
 * @property-read GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceExternalPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceFlintPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceFlintManualPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceImport|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceAdjustment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceGiftCardRefund|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceGiftCardPurchaseRefundRecovery|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceStoreCredit|\stdClass $source
 * @property-read string|null $source_created_at
 * @property-read MoneyValue $value_money
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardLoadUpdatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'consideration_money': mixed, 'created_at': string, 'funding_disputes': list<mixed>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<mixed>, 'purchase_refunds': list<mixed>, 'purchase_restoration'?: mixed, 'refund_provenance'?: mixed, 'refund_transferred_money'?: mixed, 'remaining_money': mixed, 'reversed_money': mixed, 'source': mixed, 'source_created_at': string|null, 'value_money': mixed, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadUpdatedInstalledMerchantsEventDataObject')); }
    /**  anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getConsiderationMoney(): MoneyValue|null { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. [] (Value): {@see GiftCardFundingDispute}. A dispute on the payment that funded a gift card load, with its status and any loss resolution.
     * @return list<GiftCardFundingDispute>
     */
    public function getFundingDisputes(): array { return $this->get('funding_disputes'); }
    public function hasFundingDisputes(): bool { return $this->has('funding_disputes'); }
    /** gift_card_id
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** gift_card_load_id
     * @return string
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. [] (Value): {@see GiftCardPurchaseRefundValueHold}. Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held.
     * @return ?list<GiftCardPurchaseRefundValueHold>
     */
    public function getPurchaseRefundValueHolds(): ?array { return $this->get('purchase_refund_value_holds'); }
    public function hasPurchaseRefundValueHolds(): bool { return $this->has('purchase_refund_value_holds'); }
    /** Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. [] (Value): {@see GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
     * @return list<GiftCardPurchaseRefundAllocation>
     */
    public function getPurchaseRefunds(): array { return $this->get('purchase_refunds'); }
    public function hasPurchaseRefunds(): bool { return $this->has('purchase_refunds'); }
    /** Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.
     * @return ?GiftCardPurchaseRestoration
     */
    public function getPurchaseRestoration(): ?GiftCardPurchaseRestoration { return $this->get('purchase_restoration'); }
    public function hasPurchaseRestoration(): bool { return $this->has('purchase_restoration'); }
    /** Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund.
     * @return ?GiftCardRefundProvenance
     */
    public function getRefundProvenance(): ?GiftCardRefundProvenance { return $this->get('refund_provenance'); }
    public function hasRefundProvenance(): bool { return $this->has('refund_provenance'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRefundTransferredMoney(): ?MoneyValue { return $this->get('refund_transferred_money'); }
    public function hasRefundTransferredMoney(): bool { return $this->has('refund_transferred_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRemainingMoney(): MoneyValue { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReversedMoney(): MoneyValue { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.
     * @return GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceExternalPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceFlintPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceFlintManualPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceImport|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceAdjustment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceGiftCardRefund|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceGiftCardPurchaseRefundRecovery|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceStoreCredit|\stdClass
     */
    public function getSource(): GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceExternalPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceFlintPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceFlintManualPayment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceImport|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceAdjustment|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceGiftCardRefund|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceGiftCardPurchaseRefundRecovery|GiftCardLoadUpdatedInstalledMerchantsEventDataObjectSourceStoreCredit|\stdClass { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getSourceCreatedAt(): string|null { return $this->get('source_created_at'); }
    public function hasSourceCreatedAt(): bool { return $this->has('source_created_at'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getValueMoney(): MoneyValue { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
