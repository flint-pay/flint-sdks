<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read ?string $created_at
 * @property-read ?string $description
 * @property-read MoneyValue $effective_amount_money
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
final class BuyerTip extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: string, 'description'?: string, 'effective_amount_money': mixed, 'name'?: string, 'order_tip_id': string, 'payment_intent_allocations': list<mixed>, 'percent'?: float, 'refunded_money': mixed, 'settled_amount_money': mixed, 'status': string, 'updated_at'?: string, 'value_settlement_allocations': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerTip')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getEffectiveAmountMoney(): MoneyValue { return $this->get('effective_amount_money'); }
    public function hasEffectiveAmountMoney(): bool { return $this->has('effective_amount_money'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderTipId(): string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** Shape $ (Value): Array of {@see TipPaymentIntentAllocation}. Shape $[] (Value): {@see TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     * @return list<TipPaymentIntentAllocation>
     */
    public function getPaymentIntentAllocations(): array { return $this->get('payment_intent_allocations'); }
    public function hasPaymentIntentAllocations(): bool { return $this->has('payment_intent_allocations'); }
    /** Shape $ (Value): number. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSettledAmountMoney(): MoneyValue { return $this->get('settled_amount_money'); }
    public function hasSettledAmountMoney(): bool { return $this->has('settled_amount_money'); }
    /** Shape $ (Value): string.  Value enum: "requested", "settled", "partially_refunded", "refunded", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): Array of {@see TipValueSettlementAllocation}. Shape $[] (Value): {@see TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     * @return list<TipValueSettlementAllocation>
     */
    public function getValueSettlementAllocations(): array { return $this->get('value_settlement_allocations'); }
    public function hasValueSettlementAllocations(): bool { return $this->has('value_settlement_allocations'); }
}
