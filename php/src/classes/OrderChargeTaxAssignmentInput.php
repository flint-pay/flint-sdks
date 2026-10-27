<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $order_charge_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderChargeTaxAssignmentInput extends Model {
    /** @param array{'calculation': TaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'order_charge_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderChargeTaxAssignmentInput')); }
    /** Shape $ (Value): {@see TaxCalculationRequestInput}. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.
     * @return TaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
}
