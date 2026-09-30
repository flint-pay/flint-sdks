<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'assignments'?: list<mixed>, 'demands': list<mixed>, 'destination_fingerprint'?: string, 'inventory_routing_source': mixed, 'owner': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'assignments'?: list<mixed>, 'demands': list<mixed>, 'destination_fingerprint'?: string, 'inventory_routing_source': mixed, 'owner': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsCreateInput')); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'assignments'?: list<mixed>, 'demands': list<mixed>, 'destination_fingerprint'?: string, 'inventory_routing_source': mixed, 'owner': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
