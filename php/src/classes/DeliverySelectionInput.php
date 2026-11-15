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
 * @property-read string $delivery_selection_id
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $destination_address
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
 * @property-read list<string> $supported_actions
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionInput')); }
    /** Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote.
     * @return DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When calculation_expires_at is omitted; use hasCalculationExpiresAt() or valueOrDefault().
     */
    public function getCalculationExpiresAt(): string|\DateTimeInterface { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** Checkout session that owns the selection. Always present with an API key or dashboard credential. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** One chosen option for each required choice group. [] (Value): {@see DeliverySelectionChoiceResourceInput}. A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.
     * @return list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** Time the selection was created. Always present with an API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Quote from which this selection was made. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Stable delivery selection ID. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * @return string
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Deadline after which this provisional selection can no longer be committed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. [] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Buyer-provided delivery instructions. Returned with an API key or dashboard credential.
     * @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Ordered lifecycle events recorded for this selection. [] (Value): {@see DeliverySelectionLifecycleEventResourceInput}. A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened.
     * @return list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lifecycle_events is omitted; use hasLifecycleEvents() or valueOrDefault().
     */
    public function getLifecycleEvents(): array { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When lifecycle_updated_at is omitted; use hasLifecycleUpdatedAt() or valueOrDefault().
     */
    public function getLifecycleUpdatedAt(): string|\DateTimeInterface { return $this->get('lifecycle_updated_at'); }
    public function hasLifecycleUpdatedAt(): bool { return $this->has('lifecycle_updated_at'); }
    /** The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime".
     * @return string
     * @throws SdkError When limiting_deadline_reason is omitted; use hasLimitingDeadlineReason() or valueOrDefault().
     */
    public function getLimitingDeadlineReason(): string { return $this->get('limiting_deadline_reason'); }
    public function hasLimitingDeadlineReason(): bool { return $this->has('limiting_deadline_reason'); }
    /** Order affected by the selection. Always present with an API key or dashboard credential. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Availability state of merchant-private selection evidence. Value enum: "available", "redacted".
     * @return string
     * @throws SdkError When private_data_status is omitted; use hasPrivateDataStatus() or valueOrDefault().
     */
    public function getPrivateDataStatus(): string { return $this->get('private_data_status'); }
    public function hasPrivateDataStatus(): bool { return $this->has('private_data_status'); }
    /** Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Time merchant-private selection evidence was redacted. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When redacted_at is omitted; use hasRedactedAt() or valueOrDefault().
     */
    public function getRedactedAt(): string|\DateTimeInterface { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. [] enum: "release". [] (Value): string.  Value enum: "release".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
