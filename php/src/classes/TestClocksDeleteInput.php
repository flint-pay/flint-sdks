<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $test_clock_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class TestClocksDeleteInput extends Model {
    /** @param array{'test_clock_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClocksDeleteInput')); }
    /** ID of the test clock. Example: "tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** Optional version most recently read. A stale value returns 409 VERSION_CONFLICT with the current version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
