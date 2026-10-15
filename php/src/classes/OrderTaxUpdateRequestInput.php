<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderTaxCalculationRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read list<OrderChargeTaxAssignmentInput|array<array-key, mixed>|\stdClass> $charge_calculations
 * @property-read bool $enabled
 * @property-read list<OrderLineItemTaxAssignmentInput|array<array-key, mixed>|\stdClass> $line_item_calculations
 * @property-read OrderTaxLocationRequestInput|array<array-key, mixed>|\stdClass $location
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxUpdateRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxUpdateRequestInput')); }
    /** @return OrderTaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** @return list<OrderChargeTaxAssignmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charge_calculations is omitted; use hasChargeCalculations() or valueOrDefault().
     */
    public function getChargeCalculations(): array { return $this->get('charge_calculations'); }
    public function hasChargeCalculations(): bool { return $this->has('charge_calculations'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** @return list<OrderLineItemTaxAssignmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_item_calculations is omitted; use hasLineItemCalculations() or valueOrDefault().
     */
    public function getLineItemCalculations(): array { return $this->get('line_item_calculations'); }
    public function hasLineItemCalculations(): bool { return $this->has('line_item_calculations'); }
    /** @return OrderTaxLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
