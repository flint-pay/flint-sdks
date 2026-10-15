<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read string $delivery_quote_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsGetDeliveryQuoteInput extends Model {
    /** @param array{'checkout_session_id': string, 'delivery_quote_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsGetDeliveryQuoteInput')); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
}
