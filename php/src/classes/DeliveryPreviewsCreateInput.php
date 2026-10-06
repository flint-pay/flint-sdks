<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'mode': string, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object|array{'buyer_location'?: mixed, 'checkout_session_id': string, 'expected_delivery_selection_id'?: string|null, 'maximum_distance'?: mixed, 'mode': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPreviewsCreateInput extends Model {
    /** @param array{'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'mode': string, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object|array{'buyer_location'?: mixed, 'checkout_session_id': string, 'expected_delivery_selection_id'?: string|null, 'maximum_distance'?: mixed, 'mode': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateInput')); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-ID is omitted; use hasXCheckoutSessionId() or valueOrDefault().
     */
    public function getXCheckoutSessionId(): string { return $this->get('X-Checkout-Session-ID'); }
    public function hasXCheckoutSessionId(): bool { return $this->has('X-Checkout-Session-ID'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-Secret is omitted; use hasXCheckoutSessionSecret() or valueOrDefault().
     */
    public function getXCheckoutSessionSecret(): string { return $this->get('X-Checkout-Session-Secret'); }
    public function hasXCheckoutSessionSecret(): bool { return $this->has('X-Checkout-Session-Secret'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'mode': string, 'pickup_location_id'?: string, 'pricing_context'?: array<array-key, string>|\stdClass}|object|array{'buyer_location'?: mixed, 'checkout_session_id': string, 'expected_delivery_selection_id'?: string|null, 'maximum_distance'?: mixed, 'mode': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
