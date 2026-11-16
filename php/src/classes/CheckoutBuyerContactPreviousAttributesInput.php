<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read bool|null $is_email_cleared
 * @property-read bool|null $is_phone_cleared
 * @property-read string|null $phone
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutBuyerContactPreviousAttributesInput extends Model {
    /** @param array{'email'?: string|null, 'is_email_cleared'?: bool|null, 'is_phone_cleared'?: bool|null, 'phone'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerContactPreviousAttributesInput')); }
    /** Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. anyOf[1] (Value): string. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Format: email. maxLength: 255. Example: "buyer@example.com". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. anyOf[1] (Value): boolean. True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_email_cleared is omitted; use hasIsEmailCleared() or valueOrDefault().
     */
    public function getIsEmailCleared(): mixed { return $this->get('is_email_cleared'); }
    public function hasIsEmailCleared(): bool { return $this->has('is_email_cleared'); }
    /** True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. anyOf[1] (Value): boolean. True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_phone_cleared is omitted; use hasIsPhoneCleared() or valueOrDefault().
     */
    public function getIsPhoneCleared(): mixed { return $this->get('is_phone_cleared'); }
    public function hasIsPhoneCleared(): bool { return $this->has('is_phone_cleared'); }
    /** Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. anyOf[1] (Value): string. Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. pattern: ^\+[1-9][0-9]{1,14}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): mixed { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** When the buyer last changed the saved checkout contact. Omitted on order buyer contact. anyOf[1] (Value): string. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
