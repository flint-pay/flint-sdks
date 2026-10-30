<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $package_id
 * @property-read array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesUpdateInput extends Model {
    /** @param array{'package_id': string, 'body': array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesUpdateInput')); }
    /** Flint package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** The request body for: Update package. Example: {"expected_delivery_at":"2026-05-16T18:00:00Z","expected_version":1,"metadata":{"box":"small","packed_by":"warehouse-a"},"tracking_number":"1Z999AA10987654321","tracking_url":"https://track.example.com/1Z999AA10987654321"}.
     * @return array{'carrier'?: string|null, 'dimensions'?: array{'height': int|float, 'length': int|float, 'unit': string, 'width': int|float}|object|null, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': int|float}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
