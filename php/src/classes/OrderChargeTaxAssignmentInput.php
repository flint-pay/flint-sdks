<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $order_charge_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderChargeTaxAssignmentInput extends Model {
    /** @param array{'calculation': TaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass, 'order_charge_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderChargeTaxAssignmentInput')); }
    /** The tax you supply for this charge. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.
     * @return TaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** ID of the order charge this tax applies to. minLength: 1. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
}
