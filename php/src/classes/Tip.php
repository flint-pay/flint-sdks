<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $created_at
 * @property-read string $description
 * @property-read MoneyValue $effective_amount_money
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $order_tip_id
 * @property-read list<TipPaymentIntentAllocation> $payment_intent_allocations
 * @property-read float $percent
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $settled_amount_money
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read list<TipValueSettlementAllocation> $value_settlement_allocations
 * Presence-aware response; omitted fields throw when accessed. */
final class Tip extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: string, 'description'?: string, 'effective_amount_money': mixed, 'metadata'?: \stdClass, 'name'?: string, 'order_tip_id': string, 'payment_intent_allocations'?: list<mixed>, 'percent'?: float, 'refunded_money': mixed, 'settled_amount_money': mixed, 'status': string, 'updated_at'?: string, 'value_settlement_allocations'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Tip')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return MoneyValue
     * @throws SdkError When effective_amount_money is omitted; use hasEffectiveAmountMoney() or valueOrDefault().
     */
    public function getEffectiveAmountMoney(): MoneyValue { return $this->get('effective_amount_money'); }
    public function hasEffectiveAmountMoney(): bool { return $this->has('effective_amount_money'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When order_tip_id is omitted; use hasOrderTipId() or valueOrDefault().
     */
    public function getOrderTipId(): string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** @return list<TipPaymentIntentAllocation>
     * @throws SdkError When payment_intent_allocations is omitted; use hasPaymentIntentAllocations() or valueOrDefault().
     */
    public function getPaymentIntentAllocations(): array { return $this->get('payment_intent_allocations'); }
    public function hasPaymentIntentAllocations(): bool { return $this->has('payment_intent_allocations'); }
    /** @return float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValue
     * @throws SdkError When settled_amount_money is omitted; use hasSettledAmountMoney() or valueOrDefault().
     */
    public function getSettledAmountMoney(): MoneyValue { return $this->get('settled_amount_money'); }
    public function hasSettledAmountMoney(): bool { return $this->has('settled_amount_money'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return list<TipValueSettlementAllocation>
     * @throws SdkError When value_settlement_allocations is omitted; use hasValueSettlementAllocations() or valueOrDefault().
     */
    public function getValueSettlementAllocations(): array { return $this->get('value_settlement_allocations'); }
    public function hasValueSettlementAllocations(): bool { return $this->has('value_settlement_allocations'); }
}
