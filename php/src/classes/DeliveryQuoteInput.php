<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $basis_delivery_quote_id
 * @property-read string $basis_delivery_selection_id
 * @property-read DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read list<string> $buyer_reasons
 * @property-read string $checkout_session_id
 * @property-read list<DeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass> $choice_groups
 * @property-read string $consumed_by_delivery_selection_id
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_quote_version
 * @property-read DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string $eligibility_context_version
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass> $merchant_diagnostics
 * @property-read list<DeliveryQuoteMethodResourceInput|array<array-key, mixed>|\stdClass> $methods
 * @property-read string $order_id
 * @property-read list<DeliveryPendingCallerRateRequestInput|array<array-key, mixed>|\stdClass> $pending_caller_rate_requests
 * @property-read string $revocation_reason
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read bool $selection_required
 * @property-read string $stale_reason
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuoteInput extends Model {
    /** @param array{'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'buyer_reasons': list<string>, 'checkout_session_id'?: string, 'choice_groups': list<DeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'consumed_by_delivery_selection_id'?: string, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, 'methods'?: list<DeliveryQuoteMethodResourceInput|array<array-key, mixed>|\stdClass>, 'order_id'?: string, 'pending_caller_rate_requests'?: list<DeliveryPendingCallerRateRequestInput|array<array-key, mixed>|\stdClass>, 'revocation_reason'?: string, 'revoked_at'?: string|\DateTimeInterface, 'selection_required': bool, 'stale_reason'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When basis_delivery_quote_id is omitted; use hasBasisDeliveryQuoteId() or valueOrDefault().
     */
    public function getBasisDeliveryQuoteId(): string { return $this->get('basis_delivery_quote_id'); }
    public function hasBasisDeliveryQuoteId(): bool { return $this->has('basis_delivery_quote_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When basis_delivery_selection_id is omitted; use hasBasisDeliverySelectionId() or valueOrDefault().
     */
    public function getBasisDeliverySelectionId(): string { return $this->get('basis_delivery_selection_id'); }
    public function hasBasisDeliverySelectionId(): bool { return $this->has('basis_delivery_selection_id'); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationResourceInput}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.
     * @return DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): Array of string. Buyer-safe reasons no delivery option was available. Merchant configuration details are never included. [] enum: "address_required", "address_incomplete", "outside_delivery_area", "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable". Shape $[] (Value): string.  Value enum: "address_required", "address_incomplete", "outside_delivery_area", "no_pickup_location_nearby", "unavailable_for_these_items", "temporarily_unavailable".
     * @return list<string>
     * @throws SdkError When buyer_reasons is omitted; use hasBuyerReasons() or valueOrDefault().
     */
    public function getBuyerReasons(): array { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /** Shape $ (Value): string. Always present with an API key or dashboard credential.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteChoiceGroupResourceInput}. Shape $[] (Value): {@see DeliveryQuoteChoiceGroupResourceInput}. One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.
     * @return list<DeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When consumed_by_delivery_selection_id is omitted; use hasConsumedByDeliverySelectionId() or valueOrDefault().
     */
    public function getConsumedByDeliverySelectionId(): string { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Shape $ (Value): integer string. Version of the order's delivery details evaluated by this quote. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When delivery_quote_version is omitted; use hasDeliveryQuoteVersion() or valueOrDefault().
     */
    public function getDeliveryQuoteVersion(): string { return $this->get('delivery_quote_version'); }
    public function hasDeliveryQuoteVersion(): bool { return $this->has('delivery_quote_version'); }
    /** Shape $ (Value): {@see DeliveryAddressResourceInput}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): integer string. Version of the checkout eligibility context evaluated by this quote. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When eligibility_context_version is omitted; use hasEligibilityContextVersion() or valueOrDefault().
     */
    public function getEligibilityContextVersion(): string { return $this->get('eligibility_context_version'); }
    public function hasEligibilityContextVersion(): bool { return $this->has('eligibility_context_version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded".
     * @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): string. Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value from every response. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirementInput}. Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. Shape $[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see DeliveryMerchantDiagnosticInput}. Always present with an API key or dashboard credential. Shape $[] (Value): {@see DeliveryMerchantDiagnosticInput}. A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.
     * @return list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteMethodResourceInput}. Shape $[] (Value): {@see DeliveryQuoteMethodResourceInput}. A delivery method offered in a delivery quote, with its name, type, display position, and revision.
     * @return list<DeliveryQuoteMethodResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When methods is omitted; use hasMethods() or valueOrDefault().
     */
    public function getMethods(): array { return $this->get('methods'); }
    public function hasMethods(): bool { return $this->has('methods'); }
    /** Shape $ (Value): string. Always present with an API key or dashboard credential.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of {@see DeliveryPendingCallerRateRequestInput}. Shape $[] (Value): {@see DeliveryPendingCallerRateRequestInput}. A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.
     * @return list<DeliveryPendingCallerRateRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When pending_caller_rate_requests is omitted; use hasPendingCallerRateRequests() or valueOrDefault().
     */
    public function getPendingCallerRateRequests(): array { return $this->get('pending_caller_rate_requests'); }
    public function hasPendingCallerRateRequests(): bool { return $this->has('pending_caller_rate_requests'); }
    /** Shape $ (Value): string. Why the quote was revoked: the reason on the delivery revocation that fenced a dependency this quote used. Present when status is revoked. Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return string
     * @throws SdkError When revocation_reason is omitted; use hasRevocationReason() or valueOrDefault().
     */
    public function getRevocationReason(): string { return $this->get('revocation_reason'); }
    public function hasRevocationReason(): bool { return $this->has('revocation_reason'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When selection_required is omitted; use hasSelectionRequired() or valueOrDefault().
     */
    public function getSelectionRequired(): bool { return $this->get('selection_required'); }
    public function hasSelectionRequired(): bool { return $this->has('selection_required'); }
    /** Shape $ (Value): string.  Value enum: "checkout_changed", "selection_changed", "eligibility_changed", "inventory_changed", "authority_changed", "consumed_by_priced_quote".
     * @return string
     * @throws SdkError When stale_reason is omitted; use hasStaleReason() or valueOrDefault().
     */
    public function getStaleReason(): string { return $this->get('stale_reason'); }
    public function hasStaleReason(): bool { return $this->has('stale_reason'); }
    /** Shape $ (Value): string.  Value enum: "active", "consumed", "stale", "expired", "revoked".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
