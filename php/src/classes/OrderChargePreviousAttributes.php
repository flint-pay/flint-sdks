<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read MoneyValuePreviousAttributes|null $applied_money
 * @property-read string|null $calculation_basis
 * @property-read string|null $created_at
 * @property-read string|null $description
 * @property-read string|null $fulfillment_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read float|null $percent
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read OrderCalculatedChargeTaxPreviousAttributes|null $tax
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class OrderChargePreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'applied_money'?: mixed, 'calculation_basis'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'fulfillment_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'order_charge_id'?: mixed, 'order_id'?: mixed, 'percent'?: mixed, 'refunded_money'?: mixed, 'tax'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderChargePreviousAttributes')); }
    /** Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Resolved charge amount after charge discounts and before additive tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAppliedMoney(): MoneyValuePreviousAttributes|null { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount", "subtotal_post_discount". anyOf[1] (Value): string. The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount", "subtotal_post_discount". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCalculationBasis(): string|null { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Optional description of the charge. anyOf[1] (Value): string. Optional description of the charge. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. anyOf[1] (Value): string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** What the buyer sees for this charge at checkout and on receipts. anyOf[1] (Value): string. What the buyer sees for this charge at checkout and on receipts. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this order charge, prefixed `och_`. anyOf[1] (Value): string. Unique identifier for this order charge, prefixed `och_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Order that owns this charge, including the source order of an invoice snapshot. anyOf[1] (Value): string. Order that owns this charge, including the source order of an invoice snapshot. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. anyOf[1] (Value): number. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Charge amount already refunded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** How tax applies to this charge. anyOf[1] (Value): {@see OrderCalculatedChargeTaxPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderCalculatedChargeTaxPreviousAttributes|null
     */
    public function getTax(): OrderCalculatedChargeTaxPreviousAttributes|null { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tax calculated for the charge, including any tax already included in its price. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Applied charge amount plus tax that is not already included in the price. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** What the charge is for. It classifies the charge in reporting and sets its default tax category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee", "rush_fee", "other". anyOf[1] (Value): string. What the charge is for. It classifies the charge in reporting and sets its default tax category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee", "rush_fee", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
