<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_policy_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesDeleteInput extends Model {
    /** @param array{'return_policy_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesDeleteInput')); }
    /** Flint return policy id. Example: "rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Optional. The policy's current version. If it changed, the archive fails with 409 VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
