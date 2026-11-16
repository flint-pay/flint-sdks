<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $consideration_money
 * @property-read string|null $created_at
 * @property-read list<GiftCardFundingDispute>|null $funding_disputes
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_load_id
 * @property-read mixed $idempotency_key
 * @property-read list<GiftCardPurchaseRefundValueHold>|null $purchase_refund_value_holds
 * @property-read list<GiftCardPurchaseRefundAllocation>|null $purchase_refunds
 * @property-read GiftCardPurchaseRestoration|null $purchase_restoration
 * @property-read GiftCardRefundProvenance|null $refund_provenance
 * @property-read MoneyValue|null $refund_transferred_money
 * @property-read MoneyValue|null $remaining_money
 * @property-read MoneyValue|null $reversed_money
 * @property-read mixed $source
 * @property-read mixed $source_created_at
 * @property-read MoneyValue|null $value_money
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardLoadUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'consideration_money'?: mixed, 'created_at'?: mixed, 'funding_disputes'?: mixed, 'gift_card_id'?: mixed, 'gift_card_load_id'?: mixed, 'idempotency_key'?: mixed, 'purchase_refund_value_holds'?: mixed, 'purchase_refunds'?: mixed, 'purchase_restoration'?: mixed, 'refund_provenance'?: mixed, 'refund_transferred_money'?: mixed, 'remaining_money'?: mixed, 'reversed_money'?: mixed, 'source'?: mixed, 'source_created_at'?: mixed, 'value_money'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. anyOf[1] (Value): {@see MoneyValue} or null. What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. anyOf[1].anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. anyOf[1] (Value): Array of {@see GiftCardFundingDispute}. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. anyOf[1][] (Value): {@see GiftCardFundingDispute}. A dispute on the payment that funded a gift card load, with its status and any loss resolution. anyOf[2] (Value): null.
     * @return list<GiftCardFundingDispute>|null
     */
    public function getFundingDisputes(): array|null { return $this->get('funding_disputes'); }
    public function hasFundingDisputes(): bool { return $this->has('funding_disputes'); }
    /** ID of the gift card the load added value to. anyOf[1] (Value): string. ID of the gift card the load added value to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Unique identifier for this gift card load, prefixed `gcl_`. anyOf[1] (Value): string. Unique identifier for this gift card load, prefixed `gcl_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardLoadId(): string|null { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. anyOf[1] (Value): string or null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getIdempotencyKey(): mixed { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. anyOf[1] (Value): Array of {@see GiftCardPurchaseRefundValueHold}. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. anyOf[1][] (Value): {@see GiftCardPurchaseRefundValueHold}. Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held. anyOf[2] (Value): null.
     * @return list<GiftCardPurchaseRefundValueHold>|null
     */
    public function getPurchaseRefundValueHolds(): array|null { return $this->get('purchase_refund_value_holds'); }
    public function hasPurchaseRefundValueHolds(): bool { return $this->has('purchase_refund_value_holds'); }
    /** Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. anyOf[1] (Value): Array of {@see GiftCardPurchaseRefundAllocation}. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. anyOf[1][] (Value): {@see GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds. anyOf[2] (Value): null.
     * @return list<GiftCardPurchaseRefundAllocation>|null
     */
    public function getPurchaseRefunds(): array|null { return $this->get('purchase_refunds'); }
    public function hasPurchaseRefunds(): bool { return $this->has('purchase_refunds'); }
    /** Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. anyOf[1] (Value): {@see GiftCardPurchaseRestoration}. Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. anyOf[2] (Value): null.
     * @return GiftCardPurchaseRestoration|null
     */
    public function getPurchaseRestoration(): GiftCardPurchaseRestoration|null { return $this->get('purchase_restoration'); }
    public function hasPurchaseRestoration(): bool { return $this->has('purchase_restoration'); }
    /** Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. anyOf[1] (Value): {@see GiftCardRefundProvenance}. Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. anyOf[2] (Value): null.
     * @return GiftCardRefundProvenance|null
     */
    public function getRefundProvenance(): GiftCardRefundProvenance|null { return $this->get('refund_provenance'); }
    public function hasRefundProvenance(): bool { return $this->has('refund_provenance'); }
    /** The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. anyOf[1] (Value): {@see MoneyValue}. The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getRefundTransferredMoney(): MoneyValue|null { return $this->get('refund_transferred_money'); }
    public function hasRefundTransferredMoney(): bool { return $this->has('refund_transferred_money'); }
    /** The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. anyOf[1] (Value): {@see MoneyValue}. The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getRemainingMoney(): MoneyValue|null { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
    /** The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. anyOf[1] (Value): {@see MoneyValue}. The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getReversedMoney(): MoneyValue|null { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** Where the value came from, with your reference for it. anyOf[1] (Value): {@see GiftCardFundingSource}. Where the value came from, with your reference for it. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** RFC3339 timestamp. `null` when no source time was recorded. anyOf[1] (Value): string or null. RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSourceCreatedAt(): mixed { return $this->get('source_created_at'); }
    public function hasSourceCreatedAt(): bool { return $this->has('source_created_at'); }
    /** The face value the load adds to the card. anyOf[1] (Value): {@see MoneyValue}. The face value the load adds to the card. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getValueMoney(): MoneyValue|null { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
