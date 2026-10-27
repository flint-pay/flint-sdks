<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $phone
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutBuyerContactRequestInput extends Model {
    /** @param array{'email'?: string|null, 'phone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerContactRequestInput')); }
    /** Shape $ (Value): string or null. Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string or null. Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
