<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read mixed $buyer_location
 * @property-read string|null $calculation_expires_at
 * @property-read string|null $checkout_session_id
 * @property-read list<DeliverySelectionChoiceResourcePreviousAttributes>|null $choices
 * @property-read string|null $created_at
 * @property-read string|null $delivery_quote_id
 * @property-read string|null $delivery_selection_id
 * @property-read mixed $destination_address
 * @property-read string|null $expires_at
 * @property-read list<DeliveryInputRequirementPreviousAttributes>|null $input_requirements
 * @property-read string|null $instructions
 * @property-read list<DeliverySelectionLifecycleEventResourcePreviousAttributes>|null $lifecycle_events
 * @property-read string|null $lifecycle_updated_at
 * @property-read string|null $limiting_deadline_reason
 * @property-read string|null $order_id
 * @property-read string|null $private_data_status
 * @property-read mixed $recipient
 * @property-read string|null $redacted_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionCommittedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'buyer_location'?: mixed, 'calculation_expires_at'?: mixed, 'checkout_session_id'?: mixed, 'choices'?: mixed, 'created_at'?: mixed, 'delivery_quote_id'?: mixed, 'delivery_selection_id'?: mixed, 'destination_address'?: mixed, 'expires_at'?: mixed, 'input_requirements'?: mixed, 'instructions'?: mixed, 'lifecycle_events'?: mixed, 'lifecycle_updated_at'?: mixed, 'limiting_deadline_reason'?: mixed, 'order_id'?: mixed, 'private_data_status'?: mixed, 'recipient'?: mixed, 'redacted_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionCommittedMerchantEventDataPreviousAttributes')); }
    /** Delivery charge committed by this selection. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. anyOf[1] (Value): {@see DeliveryBuyerLocationResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. anyOf[1] (Value): string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCalculationExpiresAt(): string|null { return $this->get('calculation_expires_at'); }
    public function hasCalculationExpiresAt(): bool { return $this->has('calculation_expires_at'); }
    /** Checkout session that owns the selection. Always present with an API key or dashboard credential. anyOf[1] (Value): string. Checkout session that owns the selection. Always present with an API key or dashboard credential. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckoutSessionId(): string|null { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** One chosen option for each required choice group. anyOf[1] (Value): Array of {@see DeliverySelectionChoiceResourcePreviousAttributes}. One chosen option for each required choice group. anyOf[1][] (Value): {@see DeliverySelectionChoiceResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliverySelectionChoiceResourcePreviousAttributes>|null
     */
    public function getChoices(): array|null { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** Time the selection was created. Always present with an API key or dashboard credential. anyOf[1] (Value): string. Time the selection was created. Always present with an API key or dashboard credential. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Quote from which this selection was made. anyOf[1] (Value): string. Quote from which this selection was made. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryQuoteId(): string|null { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Stable delivery selection ID. anyOf[1] (Value): string. Stable delivery selection ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Deadline after which this provisional selection can no longer be committed. anyOf[1] (Value): string. Deadline after which this provisional selection can no longer be committed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. anyOf[1] (Value): Array of {@see DeliveryInputRequirementPreviousAttributes}. Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. anyOf[1][] (Value): {@see DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryInputRequirementPreviousAttributes>|null
     */
    public function getInputRequirements(): array|null { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Buyer-provided delivery instructions. Returned with an API key or dashboard credential. anyOf[1] (Value): string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Ordered lifecycle events recorded for this selection. anyOf[1] (Value): Array of {@see DeliverySelectionLifecycleEventResourcePreviousAttributes}. Ordered lifecycle events recorded for this selection. anyOf[1][] (Value): {@see DeliverySelectionLifecycleEventResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliverySelectionLifecycleEventResourcePreviousAttributes>|null
     */
    public function getLifecycleEvents(): array|null { return $this->get('lifecycle_events'); }
    public function hasLifecycleEvents(): bool { return $this->has('lifecycle_events'); }
    /** Time the selection lifecycle last changed. Always present with an API key or dashboard credential. anyOf[1] (Value): string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLifecycleUpdatedAt(): string|null { return $this->get('lifecycle_updated_at'); }
    public function hasLifecycleUpdatedAt(): bool { return $this->has('lifecycle_updated_at'); }
    /** The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime". anyOf[1] (Value): string. The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLimitingDeadlineReason(): string|null { return $this->get('limiting_deadline_reason'); }
    public function hasLimitingDeadlineReason(): bool { return $this->has('limiting_deadline_reason'); }
    /** Order affected by the selection. Always present with an API key or dashboard credential. anyOf[1] (Value): string. Order affected by the selection. Always present with an API key or dashboard credential. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Availability state of merchant-private selection evidence. Value enum: "available", "redacted". anyOf[1] (Value): string. Availability state of merchant-private selection evidence. Value enum: "available", "redacted". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPrivateDataStatus(): string|null { return $this->get('private_data_status'); }
    public function hasPrivateDataStatus(): bool { return $this->has('private_data_status'); }
    /** Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Time merchant-private selection evidence was redacted. anyOf[1] (Value): string. Time merchant-private selection evidence was redacted. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRedactedAt(): string|null { return $this->get('redacted_at'); }
    public function hasRedactedAt(): bool { return $this->has('redacted_at'); }
    /** Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[1] (Value): string. Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. [] enum: "release". anyOf[1] (Value): Array of string. Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. [] enum: "release". anyOf[1][] (Value): string.  Value enum: "release". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
