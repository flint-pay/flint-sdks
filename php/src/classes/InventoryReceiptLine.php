<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $disposition
 * @property-read string $inventory_item_id
 * @property-read ?string $inventory_movement_id
 * @property-read string $inventory_receipt_line_id
 * @property-read ?string $inventory_reservation_id
 * @property-read ?string $inventory_reservation_line_id
 * @property-read string $quantity
 * @property-read string $receiving_location_id
 * @property-read ?string $return_disposition_id
 * @property-read ?string $return_line_item_id
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReceiptLine extends Model {
    /** @param array{'disposition': string, 'inventory_item_id': string, 'inventory_movement_id'?: string, 'inventory_receipt_line_id': string, 'inventory_reservation_id'?: string, 'inventory_reservation_line_id'?: string, 'quantity': string, 'receiving_location_id': string, 'return_disposition_id'?: string, 'return_line_item_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptLine')); }
    /** Shape $ (Value): string. sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined add on-hand stock to the matching condition bucket. lost records returned units that were lost and changes no stock quantity. Value enum: "sellable", "quality_control", "damaged", "quarantined", "lost".
     * @return string
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInventoryMovementId(): ?string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryReceiptLineId(): string { return $this->get('inventory_receipt_line_id'); }
    public function hasInventoryReceiptLineId(): bool { return $this->has('inventory_receipt_line_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInventoryReservationId(): ?string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInventoryReservationLineId(): ?string { return $this->get('inventory_reservation_line_id'); }
    public function hasInventoryReservationLineId(): bool { return $this->has('inventory_reservation_line_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnDispositionId(): ?string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
