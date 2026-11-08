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
    /** ID of the inventory item the stock is for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Movement this line wrote. Absent when the line wrote none. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** Unique identifier for this inventory receipt line, prefixed `invrecln_`. Example: "invrecln_01KEZF7C00CN4N90YY8T10462F".
     * @return string
     * @throws SdkError When inventory_receipt_line_id is omitted; use hasInventoryReceiptLineId() or valueOrDefault().
     */
    public function getInventoryReceiptLineId(): string { return $this->get('inventory_receipt_line_id'); }
    public function hasInventoryReceiptLineId(): bool { return $this->has('inventory_receipt_line_id'); }
    /** ID of the reservation whose consumed stock these units came from. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** ID of the consumed reservation line these units came from. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
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
    /** ID of the Location that receives the units. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** ID of the Return line item these units belong to. Absent when the line isn't linked to a Return. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
