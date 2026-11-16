<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $applied_money
 * @property-read string|null $calculation_basis
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $description
 * @property-read string|null $fulfillment_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|null $name
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read int|float|null $percent
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read OrderCalculatedChargeTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderChargePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'applied_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'calculation_basis'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'description'?: string|null, 'fulfillment_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'order_charge_id'?: string|null, 'order_id'?: string|null, 'percent'?: int|float|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax'?: OrderCalculatedChargeTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderChargePreviousAttributesInput')); }
    /** Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Resolved charge amount after charge discounts and before additive tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When applied_money is omitted; use hasAppliedMoney() or valueOrDefault().
     */
    public function getAppliedMoney(): mixed { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount", "subtotal_post_discount". anyOf[1] (Value): string. The amount a percent charge is calculated from. Value enum: "subtotal_pre_discount", "subtotal_post_discount". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): mixed { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Optional description of the charge. anyOf[1] (Value): string. Optional description of the charge. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. anyOf[1] (Value): string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): mixed { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** What the buyer sees for this charge at checkout and on receipts. anyOf[1] (Value): string. What the buyer sees for this charge at checkout and on receipts. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this order charge, prefixed `och_`. anyOf[1] (Value): string. Unique identifier for this order charge, prefixed `och_`. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): mixed { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Order that owns this charge, including the source order of an invoice snapshot. anyOf[1] (Value): string. Order that owns this charge, including the source order of an invoice snapshot. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. anyOf[1] (Value): number. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Charge amount already refunded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** How tax applies to this charge. anyOf[1] (Value): {@see OrderCalculatedChargeTaxPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderCalculatedChargeTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tax calculated for the charge, including any tax already included in its price. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Applied charge amount plus tax that is not already included in the price. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** What the charge is for. It classifies the charge in reporting and sets its default tax category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee", "rush_fee", "other". anyOf[1] (Value): string. What the charge is for. It classifies the charge in reporting and sets its default tax category. Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee", "rush_fee", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
