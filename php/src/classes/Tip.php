<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read ?string $created_at
 * @property-read ?string $description
 * @property-read MoneyValue $effective_amount_money
 * @property-read ?array<array-key, string> $metadata
 * @property-read ?string $name
 * @property-read string $order_tip_id
 * @property-read list<TipPaymentIntentAllocation> $payment_intent_allocations
 * @property-read ?float $percent
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $settled_amount_money
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read list<TipValueSettlementAllocation> $value_settlement_allocations
 * Presence-aware response; omitted optional fields return null. */
final class Tip extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: string, 'description'?: string, 'effective_amount_money': mixed, 'metadata'?: mixed, 'name'?: string, 'order_tip_id': string, 'payment_intent_allocations': list<mixed>, 'percent'?: float, 'refunded_money': mixed, 'settled_amount_money': mixed, 'status': string, 'updated_at'?: string, 'value_settlement_allocations': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Tip')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getEffectiveAmountMoney(): MoneyValue { return $this->get('effective_amount_money'); }
    public function hasEffectiveAmountMoney(): bool { return $this->has('effective_amount_money'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** order_tip_id
     * @return string
     */
    public function getOrderTipId(): string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /**  [] (Value): {@see TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     * @return list<TipPaymentIntentAllocation>
     */
    public function getPaymentIntentAllocations(): array { return $this->get('payment_intent_allocations'); }
    public function hasPaymentIntentAllocations(): bool { return $this->has('payment_intent_allocations'); }
    /** multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSettledAmountMoney(): MoneyValue { return $this->get('settled_amount_money'); }
    public function hasSettledAmountMoney(): bool { return $this->has('settled_amount_money'); }
    /** Value enum: "requested", "settled", "partially_refunded", "refunded", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /**  [] (Value): {@see TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     * @return list<TipValueSettlementAllocation>
     */
    public function getValueSettlementAllocations(): array { return $this->get('value_settlement_allocations'); }
    public function hasValueSettlementAllocations(): bool { return $this->has('value_settlement_allocations'); }
}
