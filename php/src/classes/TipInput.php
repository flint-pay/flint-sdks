<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $effective_amount_money
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $order_tip_id
 * @property-read list<TipPaymentIntentAllocationInput|array<array-key, mixed>|\stdClass> $payment_intent_allocations
 * @property-read int|float $percent
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $settled_amount_money
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class TipInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'effective_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string>|\stdClass, 'name'?: string, 'order_tip_id': string, 'payment_intent_allocations'?: list<TipPaymentIntentAllocationInput|array<array-key, mixed>|\stdClass>, 'percent'?: int|float, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'settled_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When effective_amount_money is omitted; use hasEffectiveAmountMoney() or valueOrDefault().
     */
    public function getEffectiveAmountMoney(): mixed { return $this->get('effective_amount_money'); }
    public function hasEffectiveAmountMoney(): bool { return $this->has('effective_amount_money'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
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
    /** @return list<TipPaymentIntentAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intent_allocations is omitted; use hasPaymentIntentAllocations() or valueOrDefault().
     */
    public function getPaymentIntentAllocations(): array { return $this->get('payment_intent_allocations'); }
    public function hasPaymentIntentAllocations(): bool { return $this->has('payment_intent_allocations'); }
    /** @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settled_amount_money is omitted; use hasSettledAmountMoney() or valueOrDefault().
     */
    public function getSettledAmountMoney(): mixed { return $this->get('settled_amount_money'); }
    public function hasSettledAmountMoney(): bool { return $this->has('settled_amount_money'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
