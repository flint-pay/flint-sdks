<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read list<WorkloadIdentityClaimCondition> $claim_conditions
 * @property-read string $issuer
 * @property-read string $platform
 * @property-read string $subject
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppCredentialWorkloadIdentity extends Model {
    /** @param array{'audience': string, 'claim_conditions': list<mixed>, 'issuer': string, 'platform': string, 'subject': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialWorkloadIdentity')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** Shape $ (Value): Array of {@see WorkloadIdentityClaimCondition}. Bounded value array of top-level scalar conditions checked for every assertion. Shape $[] (Value): {@see WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in the workload's identity token.
     * @return list<WorkloadIdentityClaimCondition>
     */
    public function getClaimConditions(): array { return $this->get('claim_conditions'); }
    public function hasClaimConditions(): bool { return $this->has('claim_conditions'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getIssuer(): string { return $this->get('issuer'); }
    public function hasIssuer(): bool { return $this->has('issuer'); }
    /** Shape $ (Value): string. Computed from the issuer. New platform values may be added. Value enum: "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes", "circleci", "buildkite", "vercel", "fly_io".
     * @return string
     */
    public function getPlatform(): string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
