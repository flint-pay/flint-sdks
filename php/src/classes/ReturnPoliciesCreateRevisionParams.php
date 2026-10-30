<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read mixed $revision
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesCreateRevisionParams extends Model {
    /** @param array{'expected_version': int, 'revision': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesCreateRevisionParams')); }
    /** Required current version of the Return policy. A stale value returns VERSION_CONFLICT. Publishing increments the policy version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee.
     * @return mixed
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): mixed { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
}
