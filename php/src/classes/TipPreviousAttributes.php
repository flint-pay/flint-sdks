<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $created_at
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributes|null $effective_amount_money
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $order_tip_id
 * @property-read list<TipPaymentIntentAllocationPreviousAttributes>|null $payment_intent_allocations
 * @property-read float|null $percent
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $settled_amount_money
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read list<TipValueSettlementAllocationPreviousAttributes>|null $value_settlement_allocations
 * Presence-aware response; omitted optional fields return null. */
final class TipPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'effective_amount_money'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'order_tip_id'?: mixed, 'payment_intent_allocations'?: mixed, 'percent'?: mixed, 'refunded_money'?: mixed, 'settled_amount_money'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'value_settlement_allocations'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipPreviousAttributes')); }
    /** Fixed tip amount, when the tip is set as an amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Optional description that stays on the tip for your reporting. anyOf[1] (Value): string. Optional description that stays on the tip for your reporting. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** The tip amount the order collects. For a percent tip, the resolved amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getEffectiveAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('effective_amount_money'); }
    public function hasEffectiveAmountMoney(): bool { return $this->has('effective_amount_money'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Optional name that stays on the tip for your reporting. anyOf[1] (Value): string. Optional name that stays on the tip for your reporting. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the tip, prefixed `tip_`. anyOf[1] (Value): string. ID of the tip, prefixed `tip_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderTipId(): string|null { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. anyOf[1] (Value): Array of {@see TipPaymentIntentAllocationPreviousAttributes}. How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. anyOf[1][] (Value): {@see TipPaymentIntentAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TipPaymentIntentAllocationPreviousAttributes>|null
     */
    public function getPaymentIntentAllocations(): array|null { return $this->get('payment_intent_allocations'); }
    public function hasPaymentIntentAllocations(): bool { return $this->has('payment_intent_allocations'); }
    /** Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. anyOf[1] (Value): number. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** How much of the tip has been refunded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** How much of the tip has been paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSettledAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('settled_amount_money'); }
    public function hasSettledAmountMoney(): bool { return $this->has('settled_amount_money'); }
    /** Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Value enum: "requested", "paid", "partially_refunded", "refunded", "canceled". anyOf[1] (Value): string. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Value enum: "requested", "paid", "partially_refunded", "refunded", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. anyOf[1] (Value): Array of {@see TipValueSettlementAllocationPreviousAttributes}. How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. anyOf[1][] (Value): {@see TipValueSettlementAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TipValueSettlementAllocationPreviousAttributes>|null
     */
    public function getValueSettlementAllocations(): array|null { return $this->get('value_settlement_allocations'); }
    public function hasValueSettlementAllocations(): bool { return $this->has('value_settlement_allocations'); }
}
