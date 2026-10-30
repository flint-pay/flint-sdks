<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?string $default_merchant_id
 * @property-read string $email
 * @property-read string $first_name
 * @property-read string $last_name
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $user_id
 * Presence-aware response; omitted optional fields return null. */
final class User extends Model {
    /** @param array{'created_at'?: string, 'default_merchant_id'?: string, 'email': string, 'first_name': string, 'last_name': string, 'status': string, 'updated_at'?: string, 'user_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('User')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** default_merchant_id
     * @return ?string
     */
    public function getDefaultMerchantId(): ?string { return $this->get('default_merchant_id'); }
    public function hasDefaultMerchantId(): bool { return $this->has('default_merchant_id'); }
    /** email
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** first_name
     * @return string
     */
    public function getFirstName(): string { return $this->get('first_name'); }
    public function hasFirstName(): bool { return $this->has('first_name'); }
    /** last_name
     * @return string
     */
    public function getLastName(): string { return $this->get('last_name'); }
    public function hasLastName(): bool { return $this->has('last_name'); }
    /** Value enum: "active", "deactivated".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** user_id
     * @return string
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
}
