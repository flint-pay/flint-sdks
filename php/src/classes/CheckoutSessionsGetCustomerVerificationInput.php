<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read string $checkout_session_customer_verification_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsGetCustomerVerificationInput extends Model {
    /** @param array{'checkout_session_id': string, 'checkout_session_customer_verification_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsGetCustomerVerificationInput')); }
    /** Flint checkout session ID. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Flint checkout verification code request ID. Example: "cscv_01KEZF7C00XW14W2FCVD5PH3Z9".
     * @return string
     * @throws SdkError When checkout_session_customer_verification_id is omitted; use hasCheckoutSessionCustomerVerificationId() or valueOrDefault().
     */
    public function getCheckoutSessionCustomerVerificationId(): string { return $this->get('checkout_session_customer_verification_id'); }
    public function hasCheckoutSessionCustomerVerificationId(): bool { return $this->has('checkout_session_customer_verification_id'); }
}
