<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read string $basis_delivery_quote_id
 * @property-read string $basis_delivery_selection_id
 * @property-read DeliveryQuoteBuyerLocationAddress|DeliveryQuoteBuyerLocationCoordinate|\stdClass $buyer_location
 * @property-read string $checkout_session_id
 * @property-read list<DeliveryQuoteChoiceGroupResource> $choice_groups
 * @property-read string $consumed_by_delivery_selection_id
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_quote_revision
 * @property-read DeliveryAddressRequest $destination_address
 * @property-read string $eligibility_context_revision
 * @property-read string $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<DeliveryMerchantDiagnostic> $merchant_diagnostics
 * @property-read list<DeliveryQuoteMethodResource> $methods
 * @property-read string $order_id
 * @property-read list<DeliveryPendingCallerRateRequest> $pending_caller_rate_requests
 * @property-read string $revocation_reason
 * @property-read string $revoked_at
 * @property-read bool $selection_required
 * @property-read string $stale_reason
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryQuote extends Model {
    /** @param array{'audience': string, 'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: \stdClass, 'checkout_session_id': string, 'choice_groups': list<mixed>, 'consumed_by_delivery_selection_id'?: string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'destination_address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'eligibility_context_revision': string, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'merchant_diagnostics': list<mixed>, 'methods'?: list<mixed>, 'order_id': string, 'pending_caller_rate_requests'?: list<mixed>, 'revocation_reason'?: string, 'revoked_at'?: string, 'selection_required': bool, 'stale_reason'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuote')); }
    /** @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** @return string
     * @throws SdkError When basis_delivery_quote_id is omitted; use hasBasisDeliveryQuoteId() or valueOrDefault().
     */
    public function getBasisDeliveryQuoteId(): string { return $this->get('basis_delivery_quote_id'); }
    public function hasBasisDeliveryQuoteId(): bool { return $this->has('basis_delivery_quote_id'); }
    /** @return string
     * @throws SdkError When basis_delivery_selection_id is omitted; use hasBasisDeliverySelectionId() or valueOrDefault().
     */
    public function getBasisDeliverySelectionId(): string { return $this->get('basis_delivery_selection_id'); }
    public function hasBasisDeliverySelectionId(): bool { return $this->has('basis_delivery_selection_id'); }
    /** @return DeliveryQuoteBuyerLocationAddress|DeliveryQuoteBuyerLocationCoordinate|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): DeliveryQuoteBuyerLocationAddress|DeliveryQuoteBuyerLocationCoordinate|\stdClass { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return list<DeliveryQuoteChoiceGroupResource>
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** @return string
     * @throws SdkError When consumed_by_delivery_selection_id is omitted; use hasConsumedByDeliverySelectionId() or valueOrDefault().
     */
    public function getConsumedByDeliverySelectionId(): string { return $this->get('consumed_by_delivery_selection_id'); }
    public function hasConsumedByDeliverySelectionId(): bool { return $this->has('consumed_by_delivery_selection_id'); }
    /** @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** @return string
     * @throws SdkError When delivery_quote_revision is omitted; use hasDeliveryQuoteRevision() or valueOrDefault().
     */
    public function getDeliveryQuoteRevision(): string { return $this->get('delivery_quote_revision'); }
    public function hasDeliveryQuoteRevision(): bool { return $this->has('delivery_quote_revision'); }
    /** @return DeliveryAddressRequest
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): DeliveryAddressRequest { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return string
     * @throws SdkError When eligibility_context_revision is omitted; use hasEligibilityContextRevision() or valueOrDefault().
     */
    public function getEligibilityContextRevision(): string { return $this->get('eligibility_context_revision'); }
    public function hasEligibilityContextRevision(): bool { return $this->has('eligibility_context_revision'); }
    /** @return string
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return list<DeliveryInputRequirement>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<DeliveryMerchantDiagnostic>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** @return list<DeliveryQuoteMethodResource>
     * @throws SdkError When methods is omitted; use hasMethods() or valueOrDefault().
     */
    public function getMethods(): array { return $this->get('methods'); }
    public function hasMethods(): bool { return $this->has('methods'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return list<DeliveryPendingCallerRateRequest>
     * @throws SdkError When pending_caller_rate_requests is omitted; use hasPendingCallerRateRequests() or valueOrDefault().
     */
    public function getPendingCallerRateRequests(): array { return $this->get('pending_caller_rate_requests'); }
    public function hasPendingCallerRateRequests(): bool { return $this->has('pending_caller_rate_requests'); }
    /** @return string
     * @throws SdkError When revocation_reason is omitted; use hasRevocationReason() or valueOrDefault().
     */
    public function getRevocationReason(): string { return $this->get('revocation_reason'); }
    public function hasRevocationReason(): bool { return $this->has('revocation_reason'); }
    /** @return string
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** @return bool
     * @throws SdkError When selection_required is omitted; use hasSelectionRequired() or valueOrDefault().
     */
    public function getSelectionRequired(): bool { return $this->get('selection_required'); }
    public function hasSelectionRequired(): bool { return $this->has('selection_required'); }
    /** @return string
     * @throws SdkError When stale_reason is omitted; use hasStaleReason() or valueOrDefault().
     */
    public function getStaleReason(): string { return $this->get('stale_reason'); }
    public function hasStaleReason(): bool { return $this->has('stale_reason'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
