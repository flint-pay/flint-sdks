<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $workload_identity_id
 * @property-read array{'claim_conditions'?: list<mixed>, 'expected_version'?: int, 'name'?: string, 'scopes'?: list<string>, 'status'?: string, 'subject'?: string, 'subject_match'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentitiesUpdateInput extends Model {
    /** @param array{'workload_identity_id': string, 'body': array{'claim_conditions'?: list<mixed>, 'expected_version'?: int, 'name'?: string, 'scopes'?: list<string>, 'status'?: string, 'subject'?: string, 'subject_match'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentitiesUpdateInput')); }
    /** Flint workload identity ID. Example: "wid_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
    /** The request body for: Update a workload identity. Example: {"expected_version":1,"name":"Release deploy","status":"inactive"}.
     * @return array{'claim_conditions'?: list<mixed>, 'expected_version'?: int, 'name'?: string, 'scopes'?: list<string>, 'status'?: string, 'subject'?: string, 'subject_match'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
