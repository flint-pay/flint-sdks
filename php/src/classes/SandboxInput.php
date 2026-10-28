<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read bool $is_default
 * @property-read string $name
 * @property-read string $replaced_by_sandbox_id
 * @property-read string $replaces_sandbox_id
 * @property-read string $sandbox_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SandboxInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'is_default': bool, 'name': string, 'replaced_by_sandbox_id'?: string, 'replaces_sandbox_id'?: string, 'sandbox_id': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SandboxInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_default is omitted; use hasIsDefault() or valueOrDefault().
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. ID of the replacement created when this sandbox was reset and archived. Omitted when this sandbox has not been replaced by a reset.
     * @return string
     * @throws SdkError When replaced_by_sandbox_id is omitted; use hasReplacedBySandboxId() or valueOrDefault().
     */
    public function getReplacedBySandboxId(): string { return $this->get('replaced_by_sandbox_id'); }
    public function hasReplacedBySandboxId(): bool { return $this->has('replaced_by_sandbox_id'); }
    /** Shape $ (Value): string. ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not created by a reset.
     * @return string
     * @throws SdkError When replaces_sandbox_id is omitted; use hasReplacesSandboxId() or valueOrDefault().
     */
    public function getReplacesSandboxId(): string { return $this->get('replaces_sandbox_id'); }
    public function hasReplacesSandboxId(): bool { return $this->has('replaces_sandbox_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
