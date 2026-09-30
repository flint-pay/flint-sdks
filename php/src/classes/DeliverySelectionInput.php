<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read mixed $buyer_location
 * @property-read string|\DateTimeInterface $calculation_expires_at
 * @property-read string $checkout_session_id
 * @property-read list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass> $choices
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_quote_revision
 * @property-read string $delivery_selection_id
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $destination_address
 * @property-read string $eligibility_context_revision
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read string $instructions
 * @property-read list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass> $lifecycle_events
 * @property-read string|\DateTimeInterface $lifecycle_updated_at
 * @property-read string $limiting_deadline_reason
 * @property-read string $order_id
 * @property-read string $private_data_status
 * @property-read array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object $recipient
 * @property-read string|\DateTimeInterface $redacted_at
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'buyer_location'?: mixed, 'calculation_expires_at': string|\DateTimeInterface, 'checkout_session_id': string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'delivery_selection_id': string, 'destination_address'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object, 'eligibility_context_revision': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at': string|\DateTimeInterface, 'limiting_deadline_reason': string, 'order_id': string, 'private_data_status'?: string, 'recipient'?: array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionInput')); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return mixed
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When calculation_expires_at is omitted; use hasCalculationExpiresAt() or valueOrDefault().
     */
    public function getCalculationExpiresAt(): string|\DateTimeInterface { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
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
    /** @return array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): array|object { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return string
     * @throws SdkError When eligibility_context_revision is omitted; use hasEligibilityContextRevision() or valueOrDefault().
     */
    public function getEligibilityContextRevision(): string { return $this->get('eligibility_context_revision'); }
    public function hasEligibilityContextRevision(): bool { return $this->has('eligibility_context_revision'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lifecycle_events is omitted; use hasLifecycleEvents() or valueOrDefault().
     */
    public function getLifecycleEvents(): array { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When lifecycle_updated_at is omitted; use hasLifecycleUpdatedAt() or valueOrDefault().
     */
    public function getLifecycleUpdatedAt(): string|\DateTimeInterface { return $this->get('lifecycle_updated_at'); }
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
    /** @return array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): array|object { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When redacted_at is omitted; use hasRedactedAt() or valueOrDefault().
     */
    public function getRedactedAt(): string|\DateTimeInterface { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
