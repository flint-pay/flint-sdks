<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory'?: mixed, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status'?: string, 'timezone': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationsCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory'?: mixed, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status'?: string, 'timezone': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationsCreateInput')); }
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
    /** @return array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory'?: mixed, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status'?: string, 'timezone': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
