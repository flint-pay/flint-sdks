<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read bool $is_email_cleared
 * @property-read bool $is_phone_cleared
 * @property-read string|null $phone
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutBuyerContact extends Model {
    /** @param array{'email': string|null, 'is_email_cleared': bool, 'is_phone_cleared': bool, 'phone': string|null, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerContact')); }
    /** Shape $ (Value): string or null. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Format: email. maxLength: 255.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): boolean. True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true.
     * @return bool
     */
    public function getIsEmailCleared(): bool { return $this->get('is_email_cleared'); }
    public function hasIsEmailCleared(): bool { return $this->has('is_email_cleared'); }
    /** Shape $ (Value): boolean. True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true.
     * @return bool
     */
    public function getIsPhoneCleared(): bool { return $this->get('is_phone_cleared'); }
    public function hasIsPhoneCleared(): bool { return $this->has('is_phone_cleared'); }
    /** Shape $ (Value): string or null. Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. pattern: ^\+[1-9][0-9]{1,14}$.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Shape $ (Value): string. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
