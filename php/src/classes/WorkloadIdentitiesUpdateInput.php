<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $workload_identity_id
 * @property-read array{'claim_conditions'?: list<mixed>, 'expected_version'?: string, 'name'?: string, 'scopes'?: list<string>, 'status'?: string, 'subject'?: string, 'subject_match'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentitiesUpdateInput extends Model {
    /** @param array{'workload_identity_id': string, 'Idempotency-Key'?: string, 'body': array{'claim_conditions'?: list<mixed>, 'expected_version'?: string, 'name'?: string, 'scopes'?: list<string>, 'status'?: string, 'subject'?: string, 'subject_match'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentitiesUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update a workload identity.
     * @return array{'claim_conditions'?: list<mixed>, 'expected_version'?: string, 'name'?: string, 'scopes'?: list<string>, 'status'?: string, 'subject'?: string, 'subject_match'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
