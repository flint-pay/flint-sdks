<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_reservation_id
 * @property-read array{'expected_version'?: int, 'expires_at': string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsUpdateInput extends Model {
    /** @param array{'inventory_reservation_id': string, 'body': array{'expected_version'?: int, 'expires_at': string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsUpdateInput')); }
    /** Flint inventory reservation ID. Example: "invr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** The request body for: Update inventory reservation. Example: {"expected_version":2,"expires_at":"2026-07-22T12:00:00Z"}.
     * @return array{'expected_version'?: int, 'expires_at': string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
