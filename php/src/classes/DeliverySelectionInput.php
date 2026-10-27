<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass $buyer_location
 * @property-read string|\DateTimeInterface $calculation_expires_at
 * @property-read string $checkout_session_id
 * @property-read list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass> $choices
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_quote_version
 * @property-read string $delivery_selection_id
 * @property-read DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string $eligibility_context_version
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read string $instructions
 * @property-read list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass> $lifecycle_events
 * @property-read string|\DateTimeInterface $lifecycle_updated_at
 * @property-read string $limiting_deadline_reason
 * @property-read string $order_id
 * @property-read string $private_data_status
 * @property-read DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string|\DateTimeInterface $redacted_at
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationResourceInput}. Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote.
     * @return DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When calculation_expires_at is omitted; use hasCalculationExpiresAt() or valueOrDefault().
     */
    public function getCalculationExpiresAt(): string|\DateTimeInterface { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** Shape $ (Value): string. Checkout session that owns the selection. Always present with an API key or dashboard credential.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): Array of {@see DeliverySelectionChoiceResourceInput}. One chosen option for each required choice group. Shape $[] (Value): {@see DeliverySelectionChoiceResourceInput}. A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.
     * @return list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** Shape $ (Value): string. Time the selection was created. Always present with an API key or dashboard credential. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Quote from which this selection was made.
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Shape $ (Value): integer string. Quote version from which this selection was created. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When delivery_quote_version is omitted; use hasDeliveryQuoteVersion() or valueOrDefault().
     */
    public function getDeliveryQuoteVersion(): string { return $this->get('delivery_quote_version'); }
    public function hasDeliveryQuoteVersion(): bool { return $this->has('delivery_quote_version'); }
    /** Shape $ (Value): string. Stable delivery selection ID.
     * @return string
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Shape $ (Value): {@see DeliveryAddressResourceInput}. Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): integer string. Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When eligibility_context_version is omitted; use hasEligibilityContextVersion() or valueOrDefault().
     */
    public function getEligibilityContextVersion(): string { return $this->get('eligibility_context_version'); }
    public function hasEligibilityContextVersion(): bool { return $this->has('eligibility_context_version'); }
    /** Shape $ (Value): string. Deadline after which this provisional selection can no longer be committed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirementInput}. Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. Shape $[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
     * @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): Array of {@see DeliverySelectionLifecycleEventResourceInput}. Ordered lifecycle events recorded for this selection. Shape $[] (Value): {@see DeliverySelectionLifecycleEventResourceInput}. A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.
     * @return list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lifecycle_events is omitted; use hasLifecycleEvents() or valueOrDefault().
     */
    public function getLifecycleEvents(): array { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** Shape $ (Value): string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When lifecycle_updated_at is omitted; use hasLifecycleUpdatedAt() or valueOrDefault().
     */
    public function getLifecycleUpdatedAt(): string|\DateTimeInterface { return $this->get('lifecycle_updated_at'); }
    public function hasLifecycleUpdatedAt(): bool { return $this->has('lifecycle_updated_at'); }
    /** Shape $ (Value): string. Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime", "inventory_reservation_expiry", "tax_validity_expiry", "checkout_session_expiry".
     * @return string
     * @throws SdkError When limiting_deadline_reason is omitted; use hasLimitingDeadlineReason() or valueOrDefault().
     */
    public function getLimitingDeadlineReason(): string { return $this->get('limiting_deadline_reason'); }
    public function hasLimitingDeadlineReason(): bool { return $this->has('limiting_deadline_reason'); }
    /** Shape $ (Value): string. Order affected by the selection. Always present with an API key or dashboard credential.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Availability state of merchant-private selection evidence. Value enum: "available", "redacted".
     * @return string
     * @throws SdkError When private_data_status is omitted; use hasPrivateDataStatus() or valueOrDefault().
     */
    public function getPrivateDataStatus(): string { return $this->get('private_data_status'); }
    public function hasPrivateDataStatus(): bool { return $this->has('private_data_status'); }
    /** Shape $ (Value): {@see DeliveryRecipientResourceInput}. Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): string. Time merchant-private selection evidence was redacted. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When redacted_at is omitted; use hasRedactedAt() or valueOrDefault().
     */
    public function getRedactedAt(): string|\DateTimeInterface { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** Shape $ (Value): string. Current selection lifecycle status. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
