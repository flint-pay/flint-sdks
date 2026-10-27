<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object|null $consideration_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass> $funding_disputes
 * @property-read string $gift_card_id
 * @property-read string $gift_card_load_id
 * @property-read string|null $idempotency_key
 * @property-read list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass> $purchase_refund_value_holds
 * @property-read list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass> $purchase_refunds
 * @property-read GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass $purchase_restoration
 * @property-read GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass $refund_provenance
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refund_transferred_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $remaining_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reversed_money
 * @property-read GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass $source
 * @property-read string|\DateTimeInterface|null $source_created_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $value_money
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardLoadInput extends Model {
    /** @param array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadInput')); }
    /** Shape $ (Value): {@see MoneyValueInput} or null. Shape $.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Array of {@see GiftCardFundingDisputeInput}. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. Shape $[] (Value): {@see GiftCardFundingDisputeInput}. A dispute on the payment that funded a gift card load, with its status and any loss resolution.
     * @return list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When funding_disputes is omitted; use hasFundingDisputes() or valueOrDefault().
     */
    public function getFundingDisputes(): array { return $this->get('funding_disputes'); }
    public function hasFundingDisputes(): bool { return $this->has('funding_disputes'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** Shape $ (Value): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent.
     * @return string|null
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): Array of {@see GiftCardPurchaseRefundValueHoldInput}. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. Shape $[] (Value): {@see GiftCardPurchaseRefundValueHoldInput}. Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held.
     * @return list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When purchase_refund_value_holds is omitted; use hasPurchaseRefundValueHolds() or valueOrDefault().
     */
    public function getPurchaseRefundValueHolds(): array { return $this->get('purchase_refund_value_holds'); }
    public function hasPurchaseRefundValueHolds(): bool { return $this->has('purchase_refund_value_holds'); }
    /** Shape $ (Value): Array of {@see GiftCardPurchaseRefundAllocationInput}. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. Shape $[] (Value): {@see GiftCardPurchaseRefundAllocationInput}. An entry in a gift card load's purchase refunds.
     * @return list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When purchase_refunds is omitted; use hasPurchaseRefunds() or valueOrDefault().
     */
    public function getPurchaseRefunds(): array { return $this->get('purchase_refunds'); }
    public function hasPurchaseRefunds(): bool { return $this->has('purchase_refunds'); }
    /** Shape $ (Value): {@see GiftCardPurchaseRestorationInput}. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.
     * @return GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When purchase_restoration is omitted; use hasPurchaseRestoration() or valueOrDefault().
     */
    public function getPurchaseRestoration(): mixed { return $this->get('purchase_restoration'); }
    public function hasPurchaseRestoration(): bool { return $this->has('purchase_restoration'); }
    /** Shape $ (Value): {@see GiftCardRefundProvenanceInput}. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund.
     * @return GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund_provenance is omitted; use hasRefundProvenance() or valueOrDefault().
     */
    public function getRefundProvenance(): mixed { return $this->get('refund_provenance'); }
    public function hasRefundProvenance(): bool { return $this->has('refund_provenance'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund_transferred_money is omitted; use hasRefundTransferredMoney() or valueOrDefault().
     */
    public function getRefundTransferredMoney(): mixed { return $this->get('refund_transferred_money'); }
    public function hasRefundTransferredMoney(): bool { return $this->has('refund_transferred_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remaining_money is omitted; use hasRemainingMoney() or valueOrDefault().
     */
    public function getRemainingMoney(): mixed { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reversed_money is omitted; use hasReversedMoney() or valueOrDefault().
     */
    public function getReversedMoney(): mixed { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** Shape $ (Value): {@see GiftCardFundingSourceInput}. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.
     * @return GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When source_created_at is omitted; use hasSourceCreatedAt() or valueOrDefault().
     */
    public function getSourceCreatedAt(): string|\DateTimeInterface|null { return $this->get('source_created_at'); }
    public function hasSourceCreatedAt(): bool { return $this->has('source_created_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
