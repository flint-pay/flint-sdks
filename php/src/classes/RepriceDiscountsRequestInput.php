<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class RepriceDiscountsRequestInput extends Model {
    /** @param array{'expected_version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RepriceDiscountsRequestInput')); }
    /** Shape $ (Value): integer string. Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
