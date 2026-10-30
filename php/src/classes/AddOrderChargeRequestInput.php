<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderChargeRequestInput|array<array-key, mixed>|\stdClass $charge
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class AddOrderChargeRequestInput extends Model {
    /** @param array{'charge': OrderChargeRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddOrderChargeRequestInput')); }
    /** A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.
     * @return OrderChargeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When charge is omitted; use hasCharge() or valueOrDefault().
     */
    public function getCharge(): mixed { return $this->get('charge'); }
    public function hasCharge(): bool { return $this->has('charge'); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
