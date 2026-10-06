<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read bool $is_email_cleared
 * @property-read bool $is_phone_cleared
 * @property-read string|null $phone
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutBuyerContact extends Model {
    /** @param array{'email': string|null, 'is_email_cleared': bool, 'is_phone_cleared': bool, 'phone': string|null, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerContact')); }
    /** @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return bool
     * @throws SdkError When is_email_cleared is omitted; use hasIsEmailCleared() or valueOrDefault().
     */
    public function getIsEmailCleared(): bool { return $this->get('is_email_cleared'); }
    public function hasIsEmailCleared(): bool { return $this->has('is_email_cleared'); }
    /** @return bool
     * @throws SdkError When is_phone_cleared is omitted; use hasIsPhoneCleared() or valueOrDefault().
     */
    public function getIsPhoneCleared(): bool { return $this->get('is_phone_cleared'); }
    public function hasIsPhoneCleared(): bool { return $this->has('is_phone_cleared'); }
    /** @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
