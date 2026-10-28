<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderChargeRequestInput|array<array-key, mixed>|\stdClass $charge
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class AddOrderChargeRequestInput extends Model {
    /** @param array{'charge': OrderChargeRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddOrderChargeRequestInput')); }
    /** Shape $ (Value): {@see OrderChargeRequestInput}. A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.
     * @return OrderChargeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When charge is omitted; use hasCharge() or valueOrDefault().
     */
    public function getCharge(): mixed { return $this->get('charge'); }
    public function hasCharge(): bool { return $this->has('charge'); }
    /** Shape $ (Value): integer string. Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
