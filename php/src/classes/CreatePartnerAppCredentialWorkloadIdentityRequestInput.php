<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $modes
 * @property-read string $name
 * @property-read string $type
 * @property-read PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass $workload_identity
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppCredentialWorkloadIdentityRequestInput extends Model {
    /** @param array{'modes'?: list<string>, 'name'?: string, 'type': string, 'workload_identity': PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppCredentialWorkloadIdentityRequestInput')); }
    /** Modes this credential can mint partner app tokens for, with grant_type=client_credentials or an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or CI deployment so its key can't mint live tokens. A mint for another mode returns 400 unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems: true. [] enum: "live", "test". [] (Value): string.  Value enum: "live", "test".
     * @return list<string>
     * @throws SdkError When modes is omitted; use hasModes() or valueOrDefault().
     */
    public function getModes(): array { return $this->get('modes'); }
    public function hasModes(): bool { return $this->has('modes'); }
    /** Optional name to identify this credential. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Credential type. Value enum: "workload_identity".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** An external OIDC identity whose subject and claim conditions must match exactly the registered policy.
     * @return PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When workload_identity is omitted; use hasWorkloadIdentity() or valueOrDefault().
     */
    public function getWorkloadIdentity(): mixed { return $this->get('workload_identity'); }
    public function hasWorkloadIdentity(): bool { return $this->has('workload_identity'); }
}
