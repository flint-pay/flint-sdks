<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $admission_code
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketsCheckInParams extends Model {
    /** @param array{'admission_code'?: string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketsCheckInParams')); }
    /** The 16-character Crockford base32 admission code scanned at the door. Spaces, hyphens and ASCII lowercase are normalized. Omit it to check the ticket in manually. minLength: 16.
     * @return string
     * @throws SdkError When admission_code is omitted; use hasAdmissionCode() or valueOrDefault().
     */
    public function getAdmissionCode(): string { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
    /** The ticket version last read. The change applies only while the ticket is at this version; a stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
