<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_policy_id
 * @property-read array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesUpdateInput extends Model {
    /** @param array{'return_policy_id': string, 'body': array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesUpdateInput')); }
    /** Flint return policy id. Example: "rpol_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** The request body for: Update return policy.
     * @return array{'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
