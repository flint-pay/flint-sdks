<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_reservation_id
 * @property-read array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string, ...}|object>, 'provenance': array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed, ...}|object, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsConsumeInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string, ...}|object>, 'provenance': array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed, ...}|object, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsConsumeInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string, ...}|object>, 'provenance': array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed, ...}|object, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
