<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $archived_at
 * @property-read string $audience
 * @property-read list<WorkloadIdentityClaimCondition> $claim_conditions
 * @property-read string $created_at
 * @property-read WorkloadIdentityCreator $created_by
 * @property-read string $issuer
 * @property-read ?string $last_used_at
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $platform
 * @property-read ?string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $status
 * @property-read string $subject
 * @property-read string $subject_match
 * @property-read string $updated_at
 * @property-read int $version
 * @property-read string $workload_identity_id
 * Presence-aware response; omitted optional fields return null. */
final class WorkloadIdentity extends Model {
    /** @param array{'archived_at'?: string, 'audience': string, 'claim_conditions': list<mixed>, 'created_at': string, 'created_by': mixed, 'issuer': string, 'last_used_at'?: string, 'mode': string, 'name': string, 'platform': string, 'sandbox_id'?: string, 'scopes': list<string>, 'status': string, 'subject': string, 'subject_match': string, 'updated_at': string, 'version': int, 'workload_identity_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentity')); }
    /** Time the identity was archived. Omitted before archival. Format: date-time.
     * @return ?string
     */
    public function getArchivedAt(): ?string { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** audience
     * @return string
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** Bounded value array of top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the remaining policy is valid. [] (Value): {@see WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in the workload's identity token.
     * @return list<WorkloadIdentityClaimCondition>
     */
    public function getClaimConditions(): array { return $this->get('claim_conditions'); }
    public function hasClaimConditions(): bool { return $this->has('claim_conditions'); }
    /** Time the identity was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The user or credential that created a workload identity, identified by resource type and ID.
     * @return WorkloadIdentityCreator
     */
    public function getCreatedBy(): WorkloadIdentityCreator { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** issuer
     * @return string
     */
    public function getIssuer(): string { return $this->get('issuer'); }
    public function hasIssuer(): bool { return $this->has('issuer'); }
    /** Most recent use. Omitted before the first use. Format: date-time.
     * @return ?string
     */
    public function getLastUsedAt(): ?string { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Computed from the issuer. New platform values may be added. Value enum: "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes", "circleci", "buildkite", "vercel", "fly_io".
     * @return string
     */
    public function getPlatform(): string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** The sandbox containing this identity. Present only in test mode.
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Complete scope set granted to this identity. Replaced as a whole on PATCH. [] (Value): string.
     * @return list<string>
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** subject
     * @return string
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** Value enum: "exact", "glob".
     * @return string
     */
    public function getSubjectMatch(): string { return $this->get('subject_match'); }
    public function hasSubjectMatch(): bool { return $this->has('subject_match'); }
    /** Time the identity last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Positive concurrency version. Increases on policy and lifecycle changes. Format: int64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** workload_identity_id
     * @return string
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}
