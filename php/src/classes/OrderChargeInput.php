<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $applied_money
 * @property-read string $calculation_basis
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $fulfillment_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $order_charge_id
 * @property-read int|float $percent
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderChargeInput extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'applied_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'calculation_basis'?: string, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'order_charge_id': string, 'percent'?: int|float, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax'?: OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderChargeInput')); }
    /** Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When applied_money is omitted; use hasAppliedMoney() or valueOrDefault().
     */
    public function getAppliedMoney(): mixed { return $this->get('applied_money'); }
    public function hasAppliedMoney(): bool { return $this->has('applied_money'); }
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount".
     * @return string
     * @throws SdkError When calculation_basis is omitted; use hasCalculationBasis() or valueOrDefault().
     */
    public function getCalculationBasis(): string { return $this->get('calculation_basis'); }
    public function hasCalculationBasis(): bool { return $this->has('calculation_basis'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** description
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** fulfillment_id
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** order_charge_id
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable.
     * @return OrderCalculatedChargeTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
