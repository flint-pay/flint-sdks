<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_delivery_selection_committed_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_delivery_selection_committed_merchantInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see DeliverySelectionInput}. The delivery choice selected for a checkout or order. Shape $.object.amount_money (Required): {@see MoneyValueInput}. Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.buyer_location (Optional): {@see DeliveryBuyerLocationResourceInput}. Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. Shape $.object.calculation_expires_at (Optional): string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: date-time. Shape $.object.checkout_session_id (Optional): string. Checkout session that owns the selection. Always present with an API key or dashboard credential. Shape $.object.choices (Required): Array of {@see DeliverySelectionChoiceResourceInput}. One chosen option for each required choice group. Shape $.object.choices[] (Value): {@see DeliverySelectionChoiceResourceInput}. A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window. Shape $.object.created_at (Optional): string. Time the selection was created. Always present with an API key or dashboard credential. Format: date-time. Shape $.object.delivery_quote_id (Required): string. Quote from which this selection was made. Shape $.object.delivery_quote_version (Optional): integer string. Quote version from which this selection was created. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0. Shape $.object.delivery_selection_id (Required): string. Stable delivery selection ID. Shape $.object.destination_address (Optional): {@see AddressInput}. Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. Shape $.object.eligibility_context_version (Optional): integer string. Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0. Shape $.object.expires_at (Required): string. Deadline after which this provisional selection can no longer be committed. Format: date-time. Shape $.object.input_requirements (Required): Array of {@see DeliveryInputRequirementInput}. Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. Shape $.object.input_requirements[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint. Shape $.object.instructions (Optional): string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. Shape $.object.lifecycle_events (Optional): Array of {@see DeliverySelectionLifecycleEventResourceInput}. Ordered lifecycle events recorded for this selection. Shape $.object.lifecycle_events[] (Value): {@see DeliverySelectionLifecycleEventResourceInput}. A status change in a delivery selection's history, with the new `status`, the `reason`, and when it happened. Shape $.object.lifecycle_updated_at (Optional): string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: date-time. Shape $.object.limiting_deadline_reason (Optional): string. Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Value enum: "selection_guarantee_expiry", "calculation_expiry", "selection_maximum_lifetime", "inventory_reservation_expiry", "tax_validity_expiry", "checkout_session_expiry". Shape $.object.order_id (Optional): string. Order affected by the selection. Always present with an API key or dashboard credential. Shape $.object.private_data_status (Optional): string. Availability state of merchant-private selection evidence. Value enum: "available", "redacted". Shape $.object.recipient (Optional): {@see DeliveryRecipientResourceInput}. Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. Shape $.object.redacted_at (Optional): string. Time merchant-private selection evidence was redacted. Format: date-time. Shape $.object.status (Required): string. Current selection lifecycle status. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return array{'object': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "delivery_selection.committed".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
