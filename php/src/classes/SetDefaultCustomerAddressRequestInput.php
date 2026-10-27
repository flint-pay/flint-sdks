<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_for
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class SetDefaultCustomerAddressRequestInput extends Model {
    /** @param array{'default_for': string, 'expected_version'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SetDefaultCustomerAddressRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "billing", "shipping", "both".
     * @return string
     * @throws SdkError When default_for is omitted; use hasDefaultFor() or valueOrDefault().
     */
    public function getDefaultFor(): string { return $this->get('default_for'); }
    public function hasDefaultFor(): bool { return $this->has('default_for'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
