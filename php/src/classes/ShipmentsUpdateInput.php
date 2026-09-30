<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $shipment_id
 * @property-read array{'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsUpdateInput extends Model {
    /** @param array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsUpdateInput')); }
    /** @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
