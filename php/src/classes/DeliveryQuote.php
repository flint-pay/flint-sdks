<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $basis_delivery_quote_id
 * @property-read ?string $basis_delivery_selection_id
 * @property-read DeliveryQuoteBuyerLocationAddress|DeliveryQuoteBuyerLocationCoordinate|\stdClass|null $buyer_location
 * @property-read list<string> $buyer_reasons
 * @property-read ?string $checkout_session_id
 * @property-read list<DeliveryQuoteChoiceGroupResource> $choice_groups
 * @property-read string $created_at
 * @property-read string $delivery_quote_id
 * @property-read ?string $delivery_quote_version
 * @property-read string|null $delivery_revocation_id
 * @property-read ?Address $destination_address
 * @property-read ?string $eligibility_context_version
 * @property-read string $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read ?list<DeliveryMerchantDiagnostic> $merchant_diagnostics
 * @property-read ?list<DeliveryQuoteMethodResource> $methods
 * @property-read ?string $order_id
 * @property-read ?list<DeliveryPendingCallerRateRequest> $pending_caller_rate_requests
 * @property-read ?string $revocation_reason
 * @property-read ?string $revoked_at
 * @property-read bool $selection_required
 * @property-read ?string $stale_reason
 * @property-read string $status
 * @property-read ?string $superseded_by_delivery_quote_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuote extends Model {
    /** @param array{'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: mixed, 'buyer_reasons': list<string>, 'checkout_session_id'?: string, 'choice_groups': list<mixed>, 'created_at': string, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_revocation_id': string|null, 'destination_address'?: mixed, 'eligibility_context_version'?: string, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'merchant_diagnostics'?: list<mixed>, 'methods'?: list<mixed>, 'order_id'?: string, 'pending_caller_rate_requests'?: list<mixed>, 'revocation_reason'?: string, 'revoked_at'?: string, 'selection_required': bool, 'stale_reason'?: string, 'status': string, 'superseded_by_delivery_quote_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuote')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBasisDeliveryQuoteId(): ?string { return $this->get('basis_delivery_quote_id'); }
    public function hasBasisDeliveryQuoteId(): bool { return $this->has('basis_delivery_quote_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBasisDeliverySelectionId(): ?string { return $this->get('basis_delivery_selection_id'); }
    public function hasBasisDeliverySelectionId(): bool { return $this->has('basis_delivery_selection_id'); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationResource}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.
     * @return DeliveryQuoteBuyerLocationAddress|DeliveryQuoteBuyerLocationCoordinate|\stdClass|null
     */
    public function getBuyerLocation(): DeliveryQuoteBuyerLocationAddress|DeliveryQuoteBuyerLocationCoordinate|\stdClass|null { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): Array of string. Buyer-safe reasons no delivery option was available. Merchant configuration details are never included. [] enum: "address_required", "address_incomplete", "outside_delivery_area", "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable". Shape $[] (Value): string.  Value enum: "address_required", "address_incomplete", "outside_delivery_area", "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable".
     * @return list<string>
     */
    public function getBuyerReasons(): array { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /** Shape $ (Value): string. Always present with an API key or dashboard credential.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteChoiceGroupResource}. Shape $[] (Value): {@see DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.
     * @return list<DeliveryQuoteChoiceGroupResource>
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** Shape $ (Value): string. When Flint created this quote. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Shape $ (Value): integer string. Version of the order's delivery details evaluated by this quote. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getDeliveryQuoteVersion(): ?string { return $this->get('delivery_quote_version'); }
    public function hasDeliveryQuoteVersion(): bool { return $this->has('delivery_quote_version'); }
    /** Shape $ (Value): string or null. The delivery revocation that revoked this quote, or null when no revocation applies.
     * @return string|null
     */
    public function getDeliveryRevocationId(): string|null { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** Shape $ (Value): {@see Address}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getDestinationAddress(): ?Address { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): integer string. Version of the checkout eligibility context evaluated by this quote. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getEligibilityContextVersion(): ?string { return $this->get('eligibility_context_version'); }
    public function hasEligibilityContextVersion(): bool { return $this->has('eligibility_context_version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return string
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): string. Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value from every response. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirement}. Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. Shape $[] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see DeliveryMerchantDiagnostic}. Always present with an API key or dashboard credential. Shape $[] (Value): {@see DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.
     * @return ?list<DeliveryMerchantDiagnostic>
     */
    public function getMerchantDiagnostics(): ?array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteMethodResource}. Shape $[] (Value): {@see DeliveryQuoteMethodResource}. A delivery method offered in a delivery quote, with its name, type, display position, and revision.
     * @return ?list<DeliveryQuoteMethodResource>
     */
    public function getMethods(): ?array { return $this->get('methods'); }
    public function hasMethods(): bool { return $this->has('methods'); }
    /** Shape $ (Value): string. Always present with an API key or dashboard credential.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of {@see DeliveryPendingCallerRateRequest}. Shape $[] (Value): {@see DeliveryPendingCallerRateRequest}. A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.
     * @return ?list<DeliveryPendingCallerRateRequest>
     */
    public function getPendingCallerRateRequests(): ?array { return $this->get('pending_caller_rate_requests'); }
    public function hasPendingCallerRateRequests(): bool { return $this->has('pending_caller_rate_requests'); }
    /** Shape $ (Value): string. Why the quote was revoked: the reason on the delivery revocation that fenced a dependency this quote used. Present when status is revoked. Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return ?string
     */
    public function getRevocationReason(): ?string { return $this->get('revocation_reason'); }
    public function hasRevocationReason(): bool { return $this->has('revocation_reason'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getRevokedAt(): ?string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getSelectionRequired(): bool { return $this->get('selection_required'); }
    public function hasSelectionRequired(): bool { return $this->has('selection_required'); }
    /** Shape $ (Value): string.  Value enum: "checkout_changed", "selection_changed", "eligibility_changed", "inventory_changed", "authority_changed", "superseded_by_priced_quote".
     * @return ?string
     */
    public function getStaleReason(): ?string { return $this->get('stale_reason'); }
    public function hasStaleReason(): bool { return $this->has('stale_reason'); }
    /** Shape $ (Value): string. Whether the quote can be selected now, derived from the current checkout or renewal order on every read. Value enum: "active", "consumed", "stale", "expired", "revoked".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. The priced delivery quote that replaced this quote. Its basis_delivery_quote_id names this quote.
     * @return ?string
     */
    public function getSupersededByDeliveryQuoteId(): ?string { return $this->get('superseded_by_delivery_quote_id'); }
    public function hasSupersededByDeliveryQuoteId(): bool { return $this->has('superseded_by_delivery_quote_id'); }
}
