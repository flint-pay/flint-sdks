<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $test_clock_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TestClocksGetInput extends Model {
    /** @param array{'test_clock_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClocksGetInput')); }
    /** ID of the test clock. Example: "tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
}
