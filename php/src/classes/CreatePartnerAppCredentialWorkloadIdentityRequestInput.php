<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $type
 * @property-read PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass $workload_identity
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppCredentialWorkloadIdentityRequestInput extends Model {
    /** @param array{'name'?: string, 'type': string, 'workload_identity': PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppCredentialWorkloadIdentityRequestInput')); }
    /** Shape $ (Value): string. Optional name to identify this credential. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Credential type. Value enum: "workload_identity".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see PartnerAppCredentialWorkloadIdentityRequestInput}. An external OIDC identity whose subject and claim conditions must match exactly the registered policy.
     * @return PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When workload_identity is omitted; use hasWorkloadIdentity() or valueOrDefault().
     */
    public function getWorkloadIdentity(): mixed { return $this->get('workload_identity'); }
    public function hasWorkloadIdentity(): bool { return $this->has('workload_identity'); }
}
