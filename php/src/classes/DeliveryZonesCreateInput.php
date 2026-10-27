<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'configuration': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'country': mixed}|object|array{'state': mixed}|object|array{'postal_code': mixed}|object|array{'radius': mixed}|object, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryZonesCreateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'configuration': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'country': mixed}|object|array{'state': mixed}|object|array{'postal_code': mixed}|object|array{'radius': mixed}|object, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZonesCreateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Create delivery zone.
     * @return array{'configuration': array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|array{'not': mixed}|object|array{'country': mixed}|object|array{'state': mixed}|object|array{'postal_code': mixed}|object|array{'radius': mixed}|object, 'external_reference_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
