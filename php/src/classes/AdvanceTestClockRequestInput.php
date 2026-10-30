<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string|\DateTimeInterface $frozen_at
 * Presence-aware input; omitted fields throw when accessed. */
final class AdvanceTestClockRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'frozen_at': string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AdvanceTestClockRequestInput')); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** The time to move the clock to. It must be later than the clock's current `frozen_at`, and no later than two years after it or two billing intervals of any subscription on the clock that isn't canceled, whichever is earlier. Fractional seconds are truncated. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When frozen_at is omitted; use hasFrozenAt() or valueOrDefault().
     */
    public function getFrozenAt(): string|\DateTimeInterface { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
}
