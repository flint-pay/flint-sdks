<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read array{'channel'?: string, 'email': string, 'purpose': string}|object|array{'channel': string, 'purpose': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateCustomerVerificationInput extends Model {
    /** @param array{'checkout_session_id': string, 'body': array{'channel'?: string, 'email': string, 'purpose': string}|object|array{'channel': string, 'purpose': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateCustomerVerificationInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** A checkout verification request selected by purpose. Example: {"email":"ada@example.com","purpose":"use_saved_payment_methods"}.
     * @return array{'channel'?: string, 'email': string, 'purpose': string}|object|array{'channel': string, 'purpose': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
