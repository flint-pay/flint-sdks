<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $order_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemTaxAssignmentInput extends Model {
    /** @param array{'calculation': TaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'order_line_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemTaxAssignmentInput')); }
    /** Shape $ (Value): {@see TaxCalculationRequestInput}. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.
     * @return TaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
}
