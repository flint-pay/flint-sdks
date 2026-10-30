<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $checkout_session_id
 * @property-read array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'method_results'?: list<array{'delivery_choice_group_id': string, 'delivery_method_revision_id': string, 'outcome': mixed}|object>, 'pickup_location_id'?: string, 'tier_key'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateDeliveryQuoteInput extends Model {
    /** @param array{'checkout_session_id': string, 'body': array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'method_results'?: list<array{'delivery_choice_group_id': string, 'delivery_method_revision_id': string, 'outcome': mixed}|object>, 'pickup_location_id'?: string, 'tier_key'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateDeliveryQuoteInput')); }
    /** Flint checkout session ID. Example: "cs_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The request body for: Create delivery quote.
     * @return array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'method_results'?: list<array{'delivery_choice_group_id': string, 'delivery_method_revision_id': string, 'outcome': mixed}|object>, 'pickup_location_id'?: string, 'tier_key'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
