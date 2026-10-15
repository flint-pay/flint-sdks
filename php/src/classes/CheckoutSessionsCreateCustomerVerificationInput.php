<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read array{'channel'?: string, 'email'?: string, 'purpose': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateCustomerVerificationInput extends Model {
    /** @param array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'body': array{'channel'?: string, 'email'?: string, 'purpose': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateCustomerVerificationInput')); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return array{'channel'?: string, 'email'?: string, 'purpose': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
