<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $initial_onboarding
 * @property-read bool $is_default
 * @property-read string $name
 * @property-read string|\DateTimeInterface|null $reset_failed_at
 * @property-read string $sandbox_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SandboxInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'initial_onboarding': string, 'is_default': bool, 'name': string, 'reset_failed_at': string|\DateTimeInterface|null, 'sandbox_id': string, 'status': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SandboxInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Value enum: "complete", "not_started".
     * @return string
     * @throws SdkError When initial_onboarding is omitted; use hasInitialOnboarding() or valueOrDefault().
     */
    public function getInitialOnboarding(): string { return $this->get('initial_onboarding'); }
    public function hasInitialOnboarding(): bool { return $this->has('initial_onboarding'); }
    /** Whether this is the merchant's one default sandbox. It can be reset but cannot be archived.
     * @return bool
     * @throws SdkError When is_default is omitted; use hasIsDefault() or valueOrDefault().
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Sandbox name. Archiving appends (Archived XXXXXXXX) to free the original name for reuse.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the last reset stopped after repeated failures. Before data deletion starts, the sandbox keeps its previous data and remains usable. Once deletion starts, requests are blocked until you retry the reset or archive a non-default sandbox. Null when no reset has failed or a later reset succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When reset_failed_at is omitted; use hasResetFailedAt() or valueOrDefault().
     */
    public function getResetFailedAt(): string|\DateTimeInterface|null { return $this->get('reset_failed_at'); }
    public function hasResetFailedAt(): bool { return $this->has('reset_failed_at'); }
    /** Unique identifier for this sandbox, prefixed `test_`. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Sandbox availability. Active sandboxes accept test requests. Archived sandboxes are retired, with their API keys revoked; reset preserves an active sandbox and its credentials. Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
