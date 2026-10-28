<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read string $checkout_session_customer_verification_id
 * @property-read array{'code': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsConfirmCustomerVerificationInput extends Model {
    /** @param array{'checkout_session_id': string, 'checkout_session_customer_verification_id': string, 'Idempotency-Key'?: string, 'body': array{'code': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsConfirmCustomerVerificationInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When checkout_session_customer_verification_id is omitted; use hasCheckoutSessionCustomerVerificationId() or valueOrDefault().
     */
    public function getCheckoutSessionCustomerVerificationId(): string { return $this->get('checkout_session_customer_verification_id'); }
    public function hasCheckoutSessionCustomerVerificationId(): bool { return $this->has('checkout_session_customer_verification_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The code the buyer typed.
     * @return array{'code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
