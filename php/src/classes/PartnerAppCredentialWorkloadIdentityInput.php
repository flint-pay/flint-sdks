<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read list<WorkloadIdentityClaimConditionInput|array<array-key, mixed>|\stdClass> $claim_conditions
 * @property-read string $issuer
 * @property-read string $platform
 * @property-read string $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialWorkloadIdentityInput extends Model {
    /** @param array{'audience': string, 'claim_conditions': list<WorkloadIdentityClaimConditionInput|array<array-key, mixed>|\stdClass>, 'issuer': string, 'platform': string, 'subject': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialWorkloadIdentityInput')); }
    /** audience
     * @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** Bounded value array of top-level scalar conditions checked for every assertion. [] (Value): {@see WorkloadIdentityClaimConditionInput}. A condition matching one top-level scalar claim in the workload's identity token.
     * @return list<WorkloadIdentityClaimConditionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When claim_conditions is omitted; use hasClaimConditions() or valueOrDefault().
     */
    public function getClaimConditions(): array { return $this->get('claim_conditions'); }
    public function hasClaimConditions(): bool { return $this->has('claim_conditions'); }
    /** issuer
     * @return string
     * @throws SdkError When issuer is omitted; use hasIssuer() or valueOrDefault().
     */
    public function getIssuer(): string { return $this->get('issuer'); }
    public function hasIssuer(): bool { return $this->has('issuer'); }
    /** The platform Flint recognizes from the issuer. New platform values may be added. Value enum: "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes", "circleci", "buildkite", "vercel", "fly_io".
     * @return string
     * @throws SdkError When platform is omitted; use hasPlatform() or valueOrDefault().
     */
    public function getPlatform(): string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** subject
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
