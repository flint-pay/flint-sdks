<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $disposition
 * @property-read string $inventory_item_id
 * @property-read string $inventory_movement_id
 * @property-read string $inventory_receipt_line_id
 * @property-read string $inventory_reservation_id
 * @property-read string $inventory_reservation_line_id
 * @property-read int $quantity
 * @property-read string $receiving_location_id
 * @property-read string $return_disposition_id
 * @property-read string $return_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReceiptLineInput extends Model {
    /** @param array{'disposition': string, 'inventory_item_id': string, 'inventory_movement_id'?: string, 'inventory_receipt_line_id': string, 'inventory_reservation_id'?: string, 'inventory_reservation_line_id'?: string, 'quantity': int, 'receiving_location_id': string, 'return_disposition_id'?: string, 'return_line_item_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptLineInput')); }
    /** sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined add on-hand stock to the matching condition bucket. lost records returned units that were lost and changes no stock quantity. Value enum: "sellable", "quality_control", "damaged", "quarantined", "lost".
     * @return string
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** inventory_item_id
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** inventory_movement_id
     * @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** inventory_receipt_line_id
     * @return string
     * @throws SdkError When inventory_receipt_line_id is omitted; use hasInventoryReceiptLineId() or valueOrDefault().
     */
    public function getInventoryReceiptLineId(): string { return $this->get('inventory_receipt_line_id'); }
    public function hasInventoryReceiptLineId(): bool { return $this->has('inventory_receipt_line_id'); }
    /** inventory_reservation_id
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** inventory_reservation_line_id
     * @return string
     * @throws SdkError When inventory_reservation_line_id is omitted; use hasInventoryReservationLineId() or valueOrDefault().
     */
    public function getInventoryReservationLineId(): string { return $this->get('inventory_reservation_line_id'); }
    public function hasInventoryReservationLineId(): bool { return $this->has('inventory_reservation_line_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** receiving_location_id
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** return_disposition_id
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** return_line_item_id
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
