<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $expected_version
 * @property-read list<mixed> $lines
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationTransitionRequestReleaseInput extends Model {
    /** @param array{'action': string, 'expected_version'?: string, 'lines': list<mixed>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationTransitionRequestReleaseInput')); }
    /** Shape $ (Value): string.  Value enum: "release".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): integer string. Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): Array of (object and Alternative shapes (see declared variants)). minItems: 1. maxItems: 100. Shape $[] (Value): object and Alternative shapes (see declared variants). Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned. minLength: 1. Shape $[].target_released_from_committed_quantity (Optional): integer string. Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $[].target_released_from_held_quantity (Optional): integer string. Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape $[].anyOf[1] (Value): any. Shape $[].anyOf[2] (Value): any.
     * @return list<mixed>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
}
