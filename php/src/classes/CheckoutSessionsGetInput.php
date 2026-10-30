<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsGetInput extends Model {
    /** @param array{'checkout_session_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsGetInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Supported expansions: customer, invoice, order, payment_intents, payment_link. Expansion requires checkouts.checkout_sessions.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer", "invoice", "order", "payment_intents", "payment_link". Value enum: "customer", "invoice", "order", "payment_intents", "payment_link". anyOf[1] (Value): Array of string.  [] enum: "customer", "invoice", "order", "payment_intents", "payment_link". anyOf[1][] (Value): string.  Value enum: "customer", "invoice", "order", "payment_intents", "payment_link". anyOf[2] (Value): string.  Value enum: "customer", "invoice", "order", "payment_intents", "payment_link".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
