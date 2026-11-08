<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $attendee_name
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketsUpdateParams extends Model {
    /** @param array{'attendee_name': string|null, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketsUpdateParams')); }
    /** The attendee name, 1 to 200 characters after surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 200.
     * @return string|null
     * @throws SdkError When attendee_name is omitted; use hasAttendeeName() or valueOrDefault().
     */
    public function getAttendeeName(): string|null { return $this->get('attendee_name'); }
    public function hasAttendeeName(): bool { return $this->has('attendee_name'); }
    /** The ticket version last read. The change applies only while the ticket is at this version; a stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
