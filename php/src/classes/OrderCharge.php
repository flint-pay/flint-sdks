<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read MoneyValue $applied_money
 * @property-read ?string $calculation_basis
 * @property-read ?string $created_at
 * @property-read ?string $description
 * @property-read ?string $fulfillment_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $order_charge_id
 * @property-read ?float $percent
 * @property-read MoneyValue $refunded_money
 * @property-read ?OrderCalculatedChargeTax $tax
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * @property-read string $type
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class OrderCharge extends Model {
    /** @param array{'amount_money'?: mixed, 'applied_money': mixed, 'calculation_basis'?: string, 'created_at'?: string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: \stdClass, 'name': string, 'order_charge_id': string, 'percent'?: float, 'refunded_money': mixed, 'tax'?: mixed, 'tax_money': mixed, 'total_money': mixed, 'type': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCharge')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAppliedMoney(): MoneyValue { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount".
     * @return ?string
     */
    public function getCalculationBasis(): ?string { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
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
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFulfillmentId(): ?string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
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
    /** Shape $ (Value): {@see OrderCalculatedChargeTax}. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable.
     * @return ?OrderCalculatedChargeTax
     */
    public function getTax(): ?OrderCalculatedChargeTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string.  Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
