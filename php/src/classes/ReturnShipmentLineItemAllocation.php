<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $quantity
 * @property-read string $return_line_item_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnShipmentLineItemAllocation extends Model {
    /** @param array{'quantity': string, 'return_line_item_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnShipmentLineItemAllocation')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. Return line whose quantity is allocated to the shipment or package. minLength: 1.
     * @return string
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
