<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $archived_at
 * @property-read string $audience
 * @property-read list<WorkloadIdentityClaimConditionInput|array<array-key, mixed>|\stdClass> $claim_conditions
 * @property-read string|\DateTimeInterface $created_at
 * @property-read WorkloadIdentityCreatorInput|array<array-key, mixed>|\stdClass $created_by
 * @property-read string $issuer
 * @property-read string|\DateTimeInterface $last_used_at
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $platform
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $status
 * @property-read string $subject
 * @property-read string $subject_match
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read string $workload_identity_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentityInput extends Model {
    /** @param array{'archived_at'?: string|\DateTimeInterface, 'audience': string, 'claim_conditions': list<WorkloadIdentityClaimConditionInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'created_by': WorkloadIdentityCreatorInput|array<array-key, mixed>|\stdClass, 'issuer': string, 'last_used_at'?: string|\DateTimeInterface, 'mode': string, 'name': string, 'platform': string, 'sandbox_id'?: string, 'scopes': list<string>, 'status': string, 'subject': string, 'subject_match': string, 'updated_at': string|\DateTimeInterface, 'version': string, 'workload_identity_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentityInput')); }
    /** Shape $ (Value): string. Time the identity was archived. Omitted before archival. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When archived_at is omitted; use hasArchivedAt() or valueOrDefault().
     */
    public function getArchivedAt(): string|\DateTimeInterface { return $this->get('archived_at'); }
    public function hasArchivedAt(): bool { return $this->has('archived_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** Shape $ (Value): Array of {@see WorkloadIdentityClaimConditionInput}. Bounded value array of top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the remaining policy is valid. Shape $[] (Value): {@see WorkloadIdentityClaimConditionInput}. A condition matching one top-level scalar claim in the workload's identity token.
     * @return list<WorkloadIdentityClaimConditionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When claim_conditions is omitted; use hasClaimConditions() or valueOrDefault().
     */
    public function getClaimConditions(): array { return $this->get('claim_conditions'); }
    public function hasClaimConditions(): bool { return $this->has('claim_conditions'); }
    /** Shape $ (Value): string. Time the identity was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see WorkloadIdentityCreatorInput}. The user or credential that created a workload identity, identified by resource type and ID.
     * @return WorkloadIdentityCreatorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When issuer is omitted; use hasIssuer() or valueOrDefault().
     */
    public function getIssuer(): string { return $this->get('issuer'); }
    public function hasIssuer(): bool { return $this->has('issuer'); }
    /** Shape $ (Value): string. Most recent use. Omitted before the first use. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When last_used_at is omitted; use hasLastUsedAt() or valueOrDefault().
     */
    public function getLastUsedAt(): string|\DateTimeInterface { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Computed from the issuer. New platform values may be added. Value enum: "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes", "circleci", "buildkite", "vercel", "fly_io".
     * @return string
     * @throws SdkError When platform is omitted; use hasPlatform() or valueOrDefault().
     */
    public function getPlatform(): string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** Shape $ (Value): string. The sandbox containing this identity. Present only in test mode.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): Array of string. Complete scope set granted to this identity. Replaced as a whole on PATCH. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
    /** Shape $ (Value): string.  Value enum: "exact", "glob".
     * @return string
     * @throws SdkError When subject_match is omitted; use hasSubjectMatch() or valueOrDefault().
     */
    public function getSubjectMatch(): string { return $this->get('subject_match'); }
    public function hasSubjectMatch(): bool { return $this->has('subject_match'); }
    /** Shape $ (Value): string. Time the identity last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Positive concurrency version. Increases on policy and lifecycle changes. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}
