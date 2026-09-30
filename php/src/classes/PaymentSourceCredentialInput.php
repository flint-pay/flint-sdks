<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $confirmation_token
 * @property-read string $payment_method_id
 * @property-read string $token
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialInput extends Model {
    /** @param array{'confirmation_token'?: string, 'payment_method_id'?: string, 'token'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialInput')); }
    /** @return string
     * @throws SdkError When confirmation_token is omitted; use hasConfirmationToken() or valueOrDefault().
     */
    public function getConfirmationToken(): string { return $this->get('confirmation_token'); }
    public function hasConfirmationToken(): bool { return $this->has('confirmation_token'); }
    /** @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** @return string
     * @throws SdkError When token is omitted; use hasToken() or valueOrDefault().
     */
    public function getToken(): string { return $this->get('token'); }
    public function hasToken(): bool { return $this->has('token'); }
}
