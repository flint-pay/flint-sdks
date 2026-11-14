<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_return_policy_version
 * @property-read ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass $revision
 * Presence-aware input; omitted fields throw when accessed. */
final class PublishReturnPolicyRevisionRequestInput extends Model {
    /** @param array{'expected_return_policy_version': int, 'revision': ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublishReturnPolicyRevisionRequestInput')); }
    /** Required current version of the Return policy. A stale value returns VERSION_CONFLICT. Publishing increments the policy version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_return_policy_version is omitted; use hasExpectedReturnPolicyVersion() or valueOrDefault().
     */
    public function getExpectedReturnPolicyVersion(): int { return $this->get('expected_return_policy_version'); }
    public function hasExpectedReturnPolicyVersion(): bool { return $this->has('expected_return_policy_version'); }
    /** The revision with the complete rules. A field you leave out doesn't carry over from the previous revision. The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee.
     * @return ReturnPolicyRevisionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): mixed { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
}
