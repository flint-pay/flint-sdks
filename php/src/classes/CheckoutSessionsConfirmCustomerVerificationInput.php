<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read string $checkout_session_customer_verification_id
 * @property-read array{'code': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsConfirmCustomerVerificationInput extends Model {
    /** @param array{'checkout_session_id': string, 'checkout_session_customer_verification_id': string, 'body': array{'code': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsConfirmCustomerVerificationInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The checkout_session_customer_verification_id the code request returned. Example: "cscv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_customer_verification_id is omitted; use hasCheckoutSessionCustomerVerificationId() or valueOrDefault().
     */
    public function getCheckoutSessionCustomerVerificationId(): string { return $this->get('checkout_session_customer_verification_id'); }
    public function hasCheckoutSessionCustomerVerificationId(): bool { return $this->has('checkout_session_customer_verification_id'); }
    /** The code the buyer typed. Example: {"code":"482913"}.
     * @return array{'code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
