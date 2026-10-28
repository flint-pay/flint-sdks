<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read list<WorkloadIdentityClaimConditionRequestInput|array<array-key, mixed>|\stdClass> $claim_conditions
 * @property-read string $issuer
 * @property-read string $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialWorkloadIdentityRequestInput extends Model {
    /** @param array{'audience'?: string, 'claim_conditions'?: list<WorkloadIdentityClaimConditionRequestInput|array<array-key, mixed>|\stdClass>, 'issuer': string, 'subject': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialWorkloadIdentityRequestInput')); }
    /** Shape $ (Value): string. Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** Shape $ (Value): Array of {@see WorkloadIdentityClaimConditionRequestInput}. Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob requires an exact condition; shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@see WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim in the workload's identity token. Omitted match defaults to exact.
     * @return list<WorkloadIdentityClaimConditionRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When claim_conditions is omitted; use hasClaimConditions() or valueOrDefault().
     */
    public function getClaimConditions(): array { return $this->get('claim_conditions'); }
    public function hasClaimConditions(): bool { return $this->has('claim_conditions'); }
    /** Shape $ (Value): string. Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When issuer is omitted; use hasIssuer() or valueOrDefault().
     */
    public function getIssuer(): string { return $this->get('issuer'); }
    public function hasIssuer(): bool { return $this->has('issuer'); }
    /** Shape $ (Value): string. Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
