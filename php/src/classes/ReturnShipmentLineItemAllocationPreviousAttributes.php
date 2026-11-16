<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $quantity
 * @property-read string|null $return_id
 * @property-read string|null $return_line_item_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnShipmentLineItemAllocationPreviousAttributes extends Model {
    /** @param array{'quantity'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnShipmentLineItemAllocationPreviousAttributes')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Return that owns return_line_item_id. anyOf[1] (Value): string. Return that owns return_line_item_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return line whose quantity is allocated to the shipment or package. anyOf[1] (Value): string. Return line whose quantity is allocated to the shipment or package. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
