<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $package_id
 * @property-read string $package_item_id
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesDeleteItemInput extends Model {
    /** @param array{'package_id': string, 'package_item_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesDeleteItemInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When package_item_id is omitted; use hasPackageItemId() or valueOrDefault().
     */
    public function getPackageItemId(): string { return $this->get('package_item_id'); }
    public function hasPackageItemId(): bool { return $this->has('package_item_id'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
}
