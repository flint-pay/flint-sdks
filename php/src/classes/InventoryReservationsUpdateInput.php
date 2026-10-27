<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_reservation_id
 * @property-read array{'expected_version'?: string, 'expires_at': string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsUpdateInput extends Model {
    /** @param array{'inventory_reservation_id': string, 'Idempotency-Key'?: string, 'body': array{'expected_version'?: string, 'expires_at': string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsUpdateInput')); }
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
    /** Shape $ (Value): object. The request body for: Update inventory reservation.
     * @return array{'expected_version'?: string, 'expires_at': string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
