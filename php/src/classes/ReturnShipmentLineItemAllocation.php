<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $quantity
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnShipmentLineItemAllocation extends Model {
    /** @param array{'quantity': int, 'return_id': string, 'return_line_item_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnShipmentLineItemAllocation')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Return that owns return_line_item_id.
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return line whose quantity is allocated to the shipment or package. minLength: 1.
     * @return string
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
