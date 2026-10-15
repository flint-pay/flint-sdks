<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'inventory_assignments'?: list<mixed>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateDeliveryQuoteInput extends Model {
    /** @param array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'body': array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'inventory_assignments'?: list<mixed>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateDeliveryQuoteInput')); }
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
    /** @return array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'inventory_assignments'?: list<mixed>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
