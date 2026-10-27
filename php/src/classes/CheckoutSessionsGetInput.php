<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsGetInput extends Model {
    /** @param array{'checkout_session_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "invoice", "order", "payment_intents", "payment_link". Shape $[] (Value): string.  Value enum: "customer", "invoice", "order", "payment_intents", "payment_link".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
