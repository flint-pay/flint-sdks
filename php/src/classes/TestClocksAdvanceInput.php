<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $test_clock_id
 * @property-read array{'expected_version'?: int, 'frozen_at': string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TestClocksAdvanceInput extends Model {
    /** @param array{'test_clock_id': string, 'body': array{'expected_version'?: int, 'frozen_at': string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TestClocksAdvanceInput')); }
    /** ID of the test clock. Example: "tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** The request body for: Advance a test clock. Example: {"expected_version":1,"frozen_at":"2026-12-01T00:00:00Z"}.
     * @return array{'expected_version'?: int, 'frozen_at': string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
