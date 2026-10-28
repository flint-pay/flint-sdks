<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass $revision
 * Presence-aware input; omitted fields throw when accessed. */
final class PublishReturnPolicyRevisionRequestInput extends Model {
    /** @param array{'expected_version': string, 'revision': ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublishReturnPolicyRevisionRequestInput')); }
    /** Shape $ (Value): integer string. Required current version of the Return policy. A stale value returns VERSION_CONFLICT. Publishing increments the policy version. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): {@see ReturnPolicyRevisionRequestInput}. The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee.
     * @return ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): mixed { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
}
