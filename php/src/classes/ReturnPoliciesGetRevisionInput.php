<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_policy_id
 * @property-read string $return_policy_revision_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesGetRevisionInput extends Model {
    /** @param array{'return_policy_id': string, 'return_policy_revision_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesGetRevisionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
}
