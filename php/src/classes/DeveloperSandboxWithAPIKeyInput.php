<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read APIKeyInput|array<array-key, mixed>|\stdClass $api_key
 * @property-read string|\DateTimeInterface $created_at
 * @property-read bool $is_default
 * @property-read string $name
 * @property-read string $sandbox_id
 * @property-read string $secret_key
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperSandboxWithAPIKeyInput extends Model {
    /** @param array{'api_key'?: APIKeyInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'is_default': bool, 'name': string, 'sandbox_id': string, 'secret_key'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperSandboxWithAPIKeyInput')); }
    /** @return APIKeyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When api_key is omitted; use hasApiKey() or valueOrDefault().
     */
    public function getApiKey(): mixed { return $this->get('api_key'); }
    public function hasApiKey(): bool { return $this->has('api_key'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return bool
     * @throws SdkError When is_default is omitted; use hasIsDefault() or valueOrDefault().
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** @return string
     * @throws SdkError When secret_key is omitted; use hasSecretKey() or valueOrDefault().
     */
    public function getSecretKey(): string { return $this->get('secret_key'); }
    public function hasSecretKey(): bool { return $this->has('secret_key'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
