<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read bool $is_default
 * @property-read string $name
 * @property-read ?string $replaced_by_sandbox_id
 * @property-read ?string $replaces_sandbox_id
 * @property-read string $sandbox_id
 * @property-read string $status
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class DeveloperSandbox extends Model {
    /** @param array{'created_at'?: string, 'is_default': bool, 'name': string, 'replaced_by_sandbox_id'?: string, 'replaces_sandbox_id'?: string, 'sandbox_id': string, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperSandbox')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. ID of the replacement created when this sandbox was reset and archived. Omitted when this sandbox has not been replaced by a reset.
     * @return ?string
     */
    public function getReplacedBySandboxId(): ?string { return $this->get('replaced_by_sandbox_id'); }
    public function hasReplacedBySandboxId(): bool { return $this->has('replaced_by_sandbox_id'); }
    /** Shape $ (Value): string. ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not created by a reset.
     * @return ?string
     */
    public function getReplacesSandboxId(): ?string { return $this->get('replaces_sandbox_id'); }
    public function hasReplacesSandboxId(): bool { return $this->has('replaces_sandbox_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
