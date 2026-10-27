<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_reservation_id
 * @property-read array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': string}|object>}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsTransitionInput extends Model {
    /** @param array{'inventory_reservation_id': string, 'Idempotency-Key'?: string, 'body': array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': string}|object>}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsTransitionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): Alternative shapes (see declared variants). The request body for: Transition inventory reservation.
     * @return array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': string}|object>}|object|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}|object>, 'provenance'?: mixed}|object|array{'action': string, 'expected_version'?: string, 'lines': list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
