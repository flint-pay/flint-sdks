<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_actor_id
 * @property-read list<array{'disposition': string, 'inventory_item_id': string, 'inventory_reservation_id': string, 'inventory_reservation_line_id': string, 'quantity': int, 'receiving_location_id': string}|object> $lines
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReceiptsCreateParams extends Model {
    /** @param array{'external_actor_id'?: string, 'lines': list<array{'disposition': string, 'inventory_item_id': string, 'inventory_reservation_id': string, 'inventory_reservation_line_id': string, 'quantity': int, 'receiving_location_id': string}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptsCreateParams')); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /**  [] (Value): {@see InventoryReceiptLineRequestInput}. One line of an inventory receipt you supply: a quantity of an item received at a Location with its disposition.
     * @return list<array{'disposition': string, 'inventory_item_id': string, 'inventory_reservation_id': string, 'inventory_reservation_line_id': string, 'quantity': int, 'receiving_location_id': string}|object>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.
     * @return InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}
