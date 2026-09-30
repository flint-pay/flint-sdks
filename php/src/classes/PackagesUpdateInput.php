<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $package_id
 * @property-read array{'buyer_notification_behavior'?: string, 'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float, ...}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float, ...}|object|null, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesUpdateInput extends Model {
    /** @param array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float, ...}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float, ...}|object|null, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesUpdateInput')); }
    /** @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
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
    /** @return array{'buyer_notification_behavior'?: string, 'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float, ...}|object|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float, ...}|object|null, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
