<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $effective_amount_money
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|null $name
 * @property-read string|null $order_tip_id
 * @property-read list<TipPaymentIntentAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $payment_intent_allocations
 * @property-read int|float|null $percent
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $settled_amount_money
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read list<TipValueSettlementAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $value_settlement_allocations
 * Presence-aware input; omitted fields throw when accessed. */
final class TipPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'description'?: string|null, 'effective_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'order_tip_id'?: string|null, 'payment_intent_allocations'?: list<TipPaymentIntentAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'percent'?: int|float|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'settled_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'value_settlement_allocations'?: list<TipValueSettlementAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipPreviousAttributesInput')); }
    /** Fixed tip amount, when the tip is set as an amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Optional description that stays on the tip for your reporting. anyOf[1] (Value): string. Optional description that stays on the tip for your reporting. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** The tip amount the order collects. For a percent tip, the resolved amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When effective_amount_money is omitted; use hasEffectiveAmountMoney() or valueOrDefault().
     */
    public function getEffectiveAmountMoney(): mixed { return $this->get('effective_amount_money'); }
    public function hasEffectiveAmountMoney(): bool { return $this->has('effective_amount_money'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Optional name that stays on the tip for your reporting. anyOf[1] (Value): string. Optional name that stays on the tip for your reporting. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the tip, prefixed `tip_`. anyOf[1] (Value): string. ID of the tip, prefixed `tip_`. Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_tip_id is omitted; use hasOrderTipId() or valueOrDefault().
     */
    public function getOrderTipId(): mixed { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. anyOf[1] (Value): Array of {@see TipPaymentIntentAllocationPreviousAttributesInput}. How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. anyOf[1][] (Value): {@see TipPaymentIntentAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TipPaymentIntentAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When payment_intent_allocations is omitted; use hasPaymentIntentAllocations() or valueOrDefault().
     */
    public function getPaymentIntentAllocations(): mixed { return $this->get('payment_intent_allocations'); }
    public function hasPaymentIntentAllocations(): bool { return $this->has('payment_intent_allocations'); }
    /** Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. anyOf[1] (Value): number. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** How much of the tip has been refunded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** How much of the tip has been paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When settled_amount_money is omitted; use hasSettledAmountMoney() or valueOrDefault().
     */
    public function getSettledAmountMoney(): mixed { return $this->get('settled_amount_money'); }
    public function hasSettledAmountMoney(): bool { return $this->has('settled_amount_money'); }
    /** Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Value enum: "requested", "paid", "partially_refunded", "refunded", "canceled". anyOf[1] (Value): string. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Value enum: "requested", "paid", "partially_refunded", "refunded", "canceled". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. anyOf[1] (Value): Array of {@see TipValueSettlementAllocationPreviousAttributesInput}. How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. anyOf[1][] (Value): {@see TipValueSettlementAllocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TipValueSettlementAllocationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When value_settlement_allocations is omitted; use hasValueSettlementAllocations() or valueOrDefault().
     */
    public function getValueSettlementAllocations(): mixed { return $this->get('value_settlement_allocations'); }
    public function hasValueSettlementAllocations(): bool { return $this->has('value_settlement_allocations'); }
}
