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
    /** @param array{'calculation'?: OrderTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'charge_calculations'?: list<OrderChargeTaxAssignmentInput|array<array-key, mixed>|\stdClass>, 'enabled'?: bool, 'line_item_calculations'?: list<OrderLineItemTaxAssignmentInput|array<array-key, mixed>|\stdClass>, 'location'?: OrderTaxLocationRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxUpdateRequestInput')); }
    /** Shape $ (Value): {@see OrderTaxCalculationRequestInput}. How tax is calculated on an order: automatically, or externally with the tax components you supply.
     * @return OrderTaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): Array of {@see OrderChargeTaxAssignmentInput}. Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. Shape $[] (Value): {@see OrderChargeTaxAssignmentInput}. An externally calculated tax you assign to one order charge.
     * @return list<OrderChargeTaxAssignmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charge_calculations is omitted; use hasChargeCalculations() or valueOrDefault().
     */
    public function getChargeCalculations(): array { return $this->get('charge_calculations'); }
    public function hasChargeCalculations(): bool { return $this->has('charge_calculations'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): Array of {@see OrderLineItemTaxAssignmentInput}. Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. Shape $[] (Value): {@see OrderLineItemTaxAssignmentInput}. An externally calculated tax you assign to one order line item.
     * @return list<OrderLineItemTaxAssignmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_item_calculations is omitted; use hasLineItemCalculations() or valueOrDefault().
     */
    public function getLineItemCalculations(): array { return $this->get('line_item_calculations'); }
    public function hasLineItemCalculations(): bool { return $this->has('line_item_calculations'); }
    /** Shape $ (Value): {@see OrderTaxLocationRequestInput}. The tax location you supply for an order, as a postal code or a full address, with or without an address type.
     * @return OrderTaxLocationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
}
