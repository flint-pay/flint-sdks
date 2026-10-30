<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsDeleteLineItemParams extends Model {
    /** @param array{'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsDeleteLineItemParams')); }
    /** Optional version of the parent Return. Supply exactly once. A stale value returns VERSION_CONFLICT with the current Return version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
