<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_policy_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesGetInput extends Model {
    /** @param array{'return_policy_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesGetInput')); }
    /** Flint return policy id. Example: "rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Supported expansions: current_revision. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. Pass expand=current_revision. [] enum: "current_revision". Value enum: "current_revision". anyOf[1] (Value): Array of string.  [] enum: "current_revision". anyOf[1][] (Value): string.  Value enum: "current_revision". anyOf[2] (Value): string.  Value enum: "current_revision".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
