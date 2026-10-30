<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: int, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: int, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionCommittedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: int, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: int, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionCommittedInstalledMerchantsEventInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object and {@see DeliverySelectionInput}. The delivery choice selected for a checkout or order. object.amount_money (Required): {@see MoneyValueInput}. Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.buyer_location (Optional): {@see DeliveryBuyerLocationResourceInput}. Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. object.calculation_expires_at (Optional): string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time. object.checkout_session_id (Optional): string. Checkout session that owns the selection. Always present with an API key or dashboard credential. object.choices (Required): Array of {@see DeliverySelectionChoiceResourceInput}. One chosen option for each required choice group. object.choices[] (Value): {@see DeliverySelectionChoiceResourceInput}. A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window. object.created_at (Optional): string. Time the selection was created. Always present with an API key or dashboard credential. Format: date-time. object.delivery_quote_id (Required): string. Quote from which this selection was made. object.delivery_quote_version (Optional): integer. Quote version from which this selection was created. Always present with an API key or dashboard credential. Format: uint64. minimum: 0. object.delivery_selection_id (Required): string. Stable delivery selection ID. object.destination_address (Optional): {@see AddressInput}. Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. object.eligibility_context_version (Optional): integer. Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Format: uint64. minimum: 0. object.expires_at (Required): string. Deadline after which this provisional selection can no longer be committed. Format: date-time. object.input_requirements (Required): Array of {@see DeliveryInputRequirementInput}. Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. object.input_requirements[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint. object.instructions (Optional): string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. object.lifecycle_events (Optional): Array of {@see DeliverySelectionLifecycleEventResourceInput}. Ordered lifecycle events recorded for this selection. object.lifecycle_events[] (Value): {@see DeliverySelectionLifecycleEventResourceInput}. A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened. object.lifecycle_updated_at (Optional): string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time. object.limiting_deadline_reason (Optional): string. Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime", "inventory_reservation_expiry", "tax_validity_expiry", "checkout_session_expiry". object.order_id (Optional): string. Order affected by the selection. Always present with an API key or dashboard credential. object.private_data_status (Optional): string. Availability state of merchant-private selection evidence. Value enum: "available", "redacted". object.recipient (Optional): {@see DeliveryRecipientResourceInput}. Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. object.redacted_at (Optional): string. Time merchant-private selection evidence was redacted. Format: date-time. object.status (Required): string. Current selection lifecycle status. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: int, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: int, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "delivery_selection.committed".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The source of a partner webhook event, selected by type. environment_grant_id (Required): string. merchant_id (Required): string. mode (Required): string.  Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id (Optional): string. type (Required): string.  Value enum: "installed_merchants". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
