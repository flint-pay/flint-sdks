<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddress|DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinate|\stdClass|null $buyer_location
 * @property-read ?string $calculation_expires_at
 * @property-read ?string $checkout_session_id
 * @property-read list<DeliverySelectionChoiceResource> $choices
 * @property-read ?string $created_at
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_selection_id
 * @property-read ?Address $destination_address
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
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionCommittedMerchantEventDataObject extends Model {
    /** @param array{'amount_money': mixed, 'buyer_location'?: mixed, 'calculation_expires_at'?: string, 'checkout_session_id'?: string, 'choices': list<mixed>, 'created_at'?: string, 'delivery_quote_id': string, 'delivery_selection_id': string, 'destination_address'?: mixed, 'expires_at': string, 'input_requirements': list<mixed>, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at'?: string, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: mixed, 'redacted_at'?: string, 'status': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionCommittedMerchantEventDataObject')); }
    /** Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote.
     * @return DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddress|DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinate|\stdClass|null
     */
    public function getBuyerLocation(): DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddress|DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinate|\stdClass|null { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time.
     * @return ?string
     */
    public function getCalculationExpiresAt(): ?string { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** Checkout session that owns the selection. Always present with an API key or dashboard credential.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** One chosen option for each required choice group. [] (Value): {@see DeliverySelectionChoiceResource}. A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.
     * @return list<DeliverySelectionChoiceResource>
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** Time the selection was created. Always present with an API key or dashboard credential. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Quote from which this selection was made.
     * @return string
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Stable delivery selection ID.
     * @return string
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getDestinationAddress(): ?Address { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Deadline after which this provisional selection can no longer be committed. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. [] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Ordered lifecycle events recorded for this selection. [] (Value): {@see DeliverySelectionLifecycleEventResource}. A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.
     * @return ?list<DeliverySelectionLifecycleEventResource>
     */
    public function getLifecycleEvents(): ?array { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time.
     * @return ?string
     */
    public function getLifecycleUpdatedAt(): ?string { return $this->get('lifecycle_updated_at'); }
    public function hasLifecycleUpdatedAt(): bool { return $this->has('lifecycle_updated_at'); }
    /** The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
     * @return ?string
     */
    public function getLimitingDeadlineReason(): ?string { return $this->get('limiting_deadline_reason'); }
    public function hasLimitingDeadlineReason(): bool { return $this->has('limiting_deadline_reason'); }
    /** Order affected by the selection. Always present with an API key or dashboard credential.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Availability state of merchant-private selection evidence. Value enum: "available", "redacted".
     * @return ?string
     */
    public function getPrivateDataStatus(): ?string { return $this->get('private_data_status'); }
    public function hasPrivateDataStatus(): bool { return $this->has('private_data_status'); }
    /** Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return ?DeliveryRecipientResource
     */
    public function getRecipient(): ?DeliveryRecipientResource { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Time merchant-private selection evidence was redacted. Format: date-time.
     * @return ?string
     */
    public function getRedactedAt(): ?string { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. [] enum: "release". [] (Value): string.  Value enum: "release".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
