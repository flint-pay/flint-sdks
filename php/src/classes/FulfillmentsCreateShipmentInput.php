<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: mixed, 'packages'?: list<mixed>, 'return_id'?: string, 'return_line_items'?: list<mixed>}|object|array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: mixed, 'packages'?: list<mixed>, 'return_id': string, 'return_line_items': list<mixed>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsCreateShipmentInput extends Model {
    /** @param array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'body': array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: mixed, 'packages'?: list<mixed>, 'return_id'?: string, 'return_line_items'?: list<mixed>}|object|array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: mixed, 'packages'?: list<mixed>, 'return_id': string, 'return_line_items': list<mixed>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsCreateShipmentInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create shipment.
     * @return array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: mixed, 'packages'?: list<mixed>, 'return_id'?: string, 'return_line_items'?: list<mixed>}|object|array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: mixed, 'packages'?: list<mixed>, 'return_id': string, 'return_line_items': list<mixed>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
