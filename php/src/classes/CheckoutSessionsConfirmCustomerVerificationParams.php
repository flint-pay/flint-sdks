<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read bool $remember_buyer
 * @property-read string $remembered_buyer_token
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsConfirmCustomerVerificationParams extends Model {
    /** @param array{'code': string, 'remember_buyer'?: bool, 'remembered_buyer_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsConfirmCustomerVerificationParams')); }
    /** The six-digit code from the email or the text. minLength: 6. maxLength: 6. pattern: ^[0-9]{6}$.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Remember this buyer after a right code. Defaults to false. Accepted without issuing a token until the required notice email is configured.
     * @return bool
     * @throws SdkError When remember_buyer is omitted; use hasRememberBuyer() or valueOrDefault().
     */
    public function getRememberBuyer(): bool { return $this->get('remember_buyer'); }
    public function hasRememberBuyer(): bool { return $this->has('remember_buyer'); }
    /** Token this device already holds, if any. A right code for the same email resets its unconfirmed steps; a different email ends it. With remember_buyer, Flint returns a replacement token. minLength: 47. maxLength: 47. pattern: ^rbt_[A-Za-z0-9_-]{43}$.
     * @return string
     * @throws SdkError When remembered_buyer_token is omitted; use hasRememberedBuyerToken() or valueOrDefault().
     */
    public function getRememberedBuyerToken(): string { return $this->get('remembered_buyer_token'); }
    public function hasRememberedBuyerToken(): bool { return $this->has('remembered_buyer_token'); }
}
