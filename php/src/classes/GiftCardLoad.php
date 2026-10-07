<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue|null $consideration_money
 * @property-read string $created_at
 * @property-read list<GiftCardFundingDispute> $funding_disputes
 * @property-read string $gift_card_id
 * @property-read string $gift_card_load_id
 * @property-read string $idempotency_key
 * @property-read list<GiftCardPurchaseRefundValueHold> $purchase_refund_value_holds
 * @property-read list<GiftCardPurchaseRefundAllocation> $purchase_refunds
 * @property-read GiftCardPurchaseRestoration $purchase_restoration
 * @property-read GiftCardRefundProvenance $refund_provenance
 * @property-read MoneyValue $refund_transferred_money
 * @property-read MoneyValue $remaining_money
 * @property-read MoneyValue $reversed_money
 * @property-read \stdClass $source
 * @property-read string|null $source_created_at
 * @property-read MoneyValue $value_money
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardLoad extends Model {
    /** @param array{'consideration_money': mixed, 'created_at': string, 'funding_disputes': list<mixed>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string, 'purchase_refund_value_holds'?: list<mixed>, 'purchase_refunds': list<mixed>, 'purchase_restoration'?: mixed, 'refund_provenance'?: mixed, 'refund_transferred_money'?: mixed, 'remaining_money': mixed, 'reversed_money': mixed, 'source': mixed, 'source_created_at': string|null, 'value_money': mixed, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoad')); }
    /** @return MoneyValue|null
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): MoneyValue|null { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return list<GiftCardFundingDispute>
     * @throws SdkError When funding_disputes is omitted; use hasFundingDisputes() or valueOrDefault().
     */
    public function getFundingDisputes(): array { return $this->get('funding_disputes'); }
    public function hasFundingDisputes(): bool { return $this->has('funding_disputes'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return list<GiftCardPurchaseRefundValueHold>
     * @throws SdkError When purchase_refund_value_holds is omitted; use hasPurchaseRefundValueHolds() or valueOrDefault().
     */
    public function getPurchaseRefundValueHolds(): array { return $this->get('purchase_refund_value_holds'); }
    public function hasPurchaseRefundValueHolds(): bool { return $this->has('purchase_refund_value_holds'); }
    /** @return list<GiftCardPurchaseRefundAllocation>
     * @throws SdkError When purchase_refunds is omitted; use hasPurchaseRefunds() or valueOrDefault().
     */
    public function getPurchaseRefunds(): array { return $this->get('purchase_refunds'); }
    public function hasPurchaseRefunds(): bool { return $this->has('purchase_refunds'); }
    /** @return GiftCardPurchaseRestoration
     * @throws SdkError When purchase_restoration is omitted; use hasPurchaseRestoration() or valueOrDefault().
     */
    public function getPurchaseRestoration(): GiftCardPurchaseRestoration { return $this->get('purchase_restoration'); }
    public function hasPurchaseRestoration(): bool { return $this->has('purchase_restoration'); }
    /** @return GiftCardRefundProvenance
     * @throws SdkError When refund_provenance is omitted; use hasRefundProvenance() or valueOrDefault().
     */
    public function getRefundProvenance(): GiftCardRefundProvenance { return $this->get('refund_provenance'); }
    public function hasRefundProvenance(): bool { return $this->has('refund_provenance'); }
    /** @return MoneyValue
     * @throws SdkError When refund_transferred_money is omitted; use hasRefundTransferredMoney() or valueOrDefault().
     */
    public function getRefundTransferredMoney(): MoneyValue { return $this->get('refund_transferred_money'); }
    public function hasRefundTransferredMoney(): bool { return $this->has('refund_transferred_money'); }
    /** @return MoneyValue
     * @throws SdkError When remaining_money is omitted; use hasRemainingMoney() or valueOrDefault().
     */
    public function getRemainingMoney(): MoneyValue { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
    /** @return MoneyValue
     * @throws SdkError When reversed_money is omitted; use hasReversedMoney() or valueOrDefault().
     */
    public function getReversedMoney(): MoneyValue { return $this->get('reversed_money'); }
    public function hasReversedMoney(): bool { return $this->has('reversed_money'); }
    /** @return \stdClass
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): \stdClass { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** @return string|null
     * @throws SdkError When source_created_at is omitted; use hasSourceCreatedAt() or valueOrDefault().
     */
    public function getSourceCreatedAt(): string|null { return $this->get('source_created_at'); }
    public function hasSourceCreatedAt(): bool { return $this->has('source_created_at'); }
    /** @return MoneyValue
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): MoneyValue { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
