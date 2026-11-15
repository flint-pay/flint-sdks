<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'inventory_reservation_ids'?: list<string>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuotesCreateInput extends Model {
    /** @param array{'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'inventory_reservation_ids'?: list<string>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuotesCreateInput')); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
    /** The request body for: Create delivery quote.
     * @return array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id'?: string|null, 'inventory_assignments'?: list<array{'demand_key': string, 'inventory_item_id': string, 'location_id': string, 'quantity': int}|object>, 'inventory_reservation_ids'?: list<string>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
