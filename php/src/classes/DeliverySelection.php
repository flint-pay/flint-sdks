<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read DeliverySelectionBuyerLocationAddress|DeliverySelectionBuyerLocationCoordinate|\stdClass|null $buyer_location
 * @property-read ?string $calculation_expires_at
 * @property-read ?string $checkout_session_id
 * @property-read list<DeliverySelectionChoiceResource> $choices
 * @property-read ?string $created_at
 * @property-read string $delivery_quote_id
 * @property-read ?string $delivery_quote_version
 * @property-read string $delivery_selection_id
 * @property-read ?DeliveryAddressResource $destination_address
 * @property-read ?string $eligibility_context_version
 * @property-read string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read ?string $instructions
 * @property-read ?list<DeliverySelectionLifecycleEventResource> $lifecycle_events
 * @property-read ?string $lifecycle_updated_at
 * @property-read ?string $limiting_deadline_reason
 * @property-read ?string $order_id
 * @property-read ?string $private_data_status
 * @property-read ?DeliveryRecipientResource $recipient
 * @property-read ?string $redacted_at
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelection extends Model {
    /** @param array{'amount_money': mixed, 'buyer_location'?: mixed, 'calculation_expires_at'?: string, 'checkout_session_id'?: string, 'choices': list<mixed>, 'created_at'?: string, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: mixed, 'eligibility_context_version'?: string, 'expires_at': string, 'input_requirements': list<mixed>, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at'?: string, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: mixed, 'redacted_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelection')); }
    /** Shape $ (Value): {@see MoneyValue}. Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see DeliveryBuyerLocationResource}. Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote.
     * @return DeliverySelectionBuyerLocationAddress|DeliverySelectionBuyerLocationCoordinate|\stdClass|null
     */
    public function getBuyerLocation(): DeliverySelectionBuyerLocationAddress|DeliverySelectionBuyerLocationCoordinate|\stdClass|null { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Shape $ (Value): string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time.
     * @return ?string
     */
    public function getCalculationExpiresAt(): ?string { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** Shape $ (Value): string. Checkout session that owns the selection. Always present with an API key or dashboard credential.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): Array of {@see DeliverySelectionChoiceResource}. One chosen option for each required choice group. Shape $[] (Value): {@see DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.
     * @return list<DeliverySelectionChoiceResource>
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** Shape $ (Value): string. Time the selection was created. Always present with an API key or dashboard credential. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Quote from which this selection was made.
     * @return string
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Shape $ (Value): integer string. Quote version from which this selection was created. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getDeliveryQuoteVersion(): ?string { return $this->get('delivery_quote_version'); }
    public function hasDeliveryQuoteVersion(): bool { return $this->has('delivery_quote_version'); }
    /** Shape $ (Value): string. Stable delivery selection ID.
     * @return string
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Shape $ (Value): {@see DeliveryAddressResource}. Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return ?DeliveryAddressResource
     */
    public function getDestinationAddress(): ?DeliveryAddressResource { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): integer string. Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return ?string
     */
    public function getEligibilityContextVersion(): ?string { return $this->get('eligibility_context_version'); }
    public function hasEligibilityContextVersion(): bool { return $this->has('eligibility_context_version'); }
    /** Shape $ (Value): string. Deadline after which this provisional selection can no longer be committed. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirement}. Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. Shape $[] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): Array of {@see DeliverySelectionLifecycleEventResource}. Ordered lifecycle events recorded for this selection. Shape $[] (Value): {@see DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.
     * @return ?list<DeliverySelectionLifecycleEventResource>
     */
    public function getLifecycleEvents(): ?array { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** Shape $ (Value): string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time.
     * @return ?string
     */
    public function getLifecycleUpdatedAt(): ?string { return $this->get('lifecycle_updated_at'); }
    public function hasLifecycleUpdatedAt(): bool { return $this->has('lifecycle_updated_at'); }
    /** Shape $ (Value): string. Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime", "inventory_reservation_expiry", "tax_validity_expiry", "checkout_session_expiry".
     * @return ?string
     */
    public function getLimitingDeadlineReason(): ?string { return $this->get('limiting_deadline_reason'); }
    public function hasLimitingDeadlineReason(): bool { return $this->has('limiting_deadline_reason'); }
    /** Shape $ (Value): string. Order affected by the selection. Always present with an API key or dashboard credential.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Availability state of merchant-private selection evidence. Value enum: "available", "redacted".
     * @return ?string
     */
    public function getPrivateDataStatus(): ?string { return $this->get('private_data_status'); }
    public function hasPrivateDataStatus(): bool { return $this->has('private_data_status'); }
    /** Shape $ (Value): {@see DeliveryRecipientResource}. Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return ?DeliveryRecipientResource
     */
    public function getRecipient(): ?DeliveryRecipientResource { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): string. Time merchant-private selection evidence was redacted. Format: date-time.
     * @return ?string
     */
    public function getRedactedAt(): ?string { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** Shape $ (Value): string. Current selection lifecycle status. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
