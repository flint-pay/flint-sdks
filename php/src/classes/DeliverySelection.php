<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read DeliverySelectionBuyerLocationAddress|DeliverySelectionBuyerLocationCoordinate|\stdClass $buyer_location
 * @property-read string $calculation_expires_at
 * @property-read string $checkout_session_id
 * @property-read list<DeliverySelectionChoiceResource> $choices
 * @property-read string $created_at
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_quote_revision
 * @property-read string $delivery_selection_id
 * @property-read DeliveryAddressResource $destination_address
 * @property-read string $eligibility_context_revision
 * @property-read string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read string $instructions
 * @property-read list<DeliverySelectionLifecycleEventResource> $lifecycle_events
 * @property-read string $lifecycle_updated_at
 * @property-read string $limiting_deadline_reason
 * @property-read string $order_id
 * @property-read string $private_data_status
 * @property-read DeliveryRecipientResource $recipient
 * @property-read string $redacted_at
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliverySelection extends Model {
    /** @param array{'amount_money': object{'amount': string, 'currency': string}, 'buyer_location'?: \stdClass, 'calculation_expires_at': string, 'checkout_session_id': string, 'choices': list<mixed>, 'created_at': string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'delivery_selection_id': string, 'destination_address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'eligibility_context_revision': string, 'expires_at': string, 'input_requirements': list<mixed>, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at': string, 'limiting_deadline_reason': string, 'order_id': string, 'private_data_status'?: string, 'recipient'?: object{'email'?: string, 'name'?: string, 'phone'?: string}, 'redacted_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelection')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return DeliverySelectionBuyerLocationAddress|DeliverySelectionBuyerLocationCoordinate|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): DeliverySelectionBuyerLocationAddress|DeliverySelectionBuyerLocationCoordinate|\stdClass { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return string
     * @throws SdkError When calculation_expires_at is omitted; use hasCalculationExpiresAt() or valueOrDefault().
     */
    public function getCalculationExpiresAt(): string { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return list<DeliverySelectionChoiceResource>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
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
    /** @return string
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** @return DeliveryAddressResource
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): DeliveryAddressResource { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return string
     * @throws SdkError When eligibility_context_revision is omitted; use hasEligibilityContextRevision() or valueOrDefault().
     */
    public function getEligibilityContextRevision(): string { return $this->get('eligibility_context_revision'); }
    public function hasEligibilityContextRevision(): bool { return $this->has('eligibility_context_revision'); }
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
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return list<DeliverySelectionLifecycleEventResource>
     * @throws SdkError When lifecycle_events is omitted; use hasLifecycleEvents() or valueOrDefault().
     */
    public function getLifecycleEvents(): array { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** @return string
     * @throws SdkError When lifecycle_updated_at is omitted; use hasLifecycleUpdatedAt() or valueOrDefault().
     */
    public function getLifecycleUpdatedAt(): string { return $this->get('lifecycle_updated_at'); }
    public function hasLifecycleUpdatedAt(): bool { return $this->has('lifecycle_updated_at'); }
    /** @return string
     * @throws SdkError When limiting_deadline_reason is omitted; use hasLimitingDeadlineReason() or valueOrDefault().
     */
    public function getLimitingDeadlineReason(): string { return $this->get('limiting_deadline_reason'); }
    public function hasLimitingDeadlineReason(): bool { return $this->has('limiting_deadline_reason'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When private_data_status is omitted; use hasPrivateDataStatus() or valueOrDefault().
     */
    public function getPrivateDataStatus(): string { return $this->get('private_data_status'); }
    public function hasPrivateDataStatus(): bool { return $this->has('private_data_status'); }
    /** @return DeliveryRecipientResource
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): DeliveryRecipientResource { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When redacted_at is omitted; use hasRedactedAt() or valueOrDefault().
     */
    public function getRedactedAt(): string { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
