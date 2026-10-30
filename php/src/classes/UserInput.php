<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $default_merchant_id
 * @property-read string $email
 * @property-read string $first_name
 * @property-read string $last_name
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class UserInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'default_merchant_id'?: string, 'email': string, 'first_name': string, 'last_name': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'user_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UserInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** default_merchant_id
     * @return string
     * @throws SdkError When default_merchant_id is omitted; use hasDefaultMerchantId() or valueOrDefault().
     */
    public function getDefaultMerchantId(): string { return $this->get('default_merchant_id'); }
    public function hasDefaultMerchantId(): bool { return $this->has('default_merchant_id'); }
    /** email
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** first_name
     * @return string
     * @throws SdkError When first_name is omitted; use hasFirstName() or valueOrDefault().
     */
    public function getFirstName(): string { return $this->get('first_name'); }
    public function hasFirstName(): bool { return $this->has('first_name'); }
    /** last_name
     * @return string
     * @throws SdkError When last_name is omitted; use hasLastName() or valueOrDefault().
     */
    public function getLastName(): string { return $this->get('last_name'); }
    public function hasLastName(): bool { return $this->has('last_name'); }
    /** Value enum: "active", "deactivated".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** user_id
     * @return string
     * @throws SdkError When user_id is omitted; use hasUserId() or valueOrDefault().
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
}
