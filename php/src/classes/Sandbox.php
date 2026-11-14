<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $initial_onboarding
 * @property-read bool $is_default
 * @property-read string $name
 * @property-read string|null $reset_failed_at
 * @property-read string $sandbox_id
 * @property-read string $status
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class Sandbox extends Model {
    /** @param array{'created_at': string, 'initial_onboarding': string, 'is_default': bool, 'name': string, 'reset_failed_at': string|null, 'sandbox_id': string, 'status': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Sandbox')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Value enum: "complete", "not_started".
     * @return string
     */
    public function getInitialOnboarding(): string { return $this->get('initial_onboarding'); }
    public function hasInitialOnboarding(): bool { return $this->has('initial_onboarding'); }
    /** Whether this is the merchant's one default sandbox. It can be reset but cannot be archived.
     * @return bool
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Sandbox name. Archiving appends (Archived XXXXXXXX) to free the original name for reuse.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the last reset stopped after repeated failures. Before data deletion starts, the sandbox keeps its previous data and remains usable. Once deletion starts, requests are blocked until you retry the reset or archive a non-default sandbox. Null when no reset has failed or a later reset succeeded. Format: date-time.
     * @return string|null
     */
    public function getResetFailedAt(): string|null { return $this->get('reset_failed_at'); }
    public function hasResetFailedAt(): bool { return $this->has('reset_failed_at'); }
    /** Unique identifier for this sandbox, prefixed `test_`.
     * @return string
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Sandbox availability. Active sandboxes accept test requests. Archived sandboxes are retired, with their API keys revoked; reset preserves an active sandbox and its credentials. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
