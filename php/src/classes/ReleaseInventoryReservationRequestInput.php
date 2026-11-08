<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read list<mixed> $lines
 * Presence-aware input; omitted fields throw when accessed. */
final class ReleaseInventoryReservationRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'lines': list<mixed>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReleaseInventoryReservationRequestInput')); }
    /** Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: 1. maxItems: 100. [] (Value): object and Alternative shapes (see declared variants). [].inventory_reservation_line_id (Required): string. Reservation line this action changes. minLength: 1. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5". [].target_released_from_committed_quantity (Optional): integer. Cumulative whole-number quantity that should have reached this target. Format: int64. minimum: 0. [].target_released_from_held_quantity (Optional): integer. Cumulative whole-number quantity that should have reached this target. Format: int64. minimum: 0. [].anyOf[1] (Value): any. [].anyOf[2] (Value): any.
     * @return list<mixed>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
}
