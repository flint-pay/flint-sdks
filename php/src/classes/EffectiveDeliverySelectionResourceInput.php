<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object|null $delivery_selection
 * @property-read bool $mutable
 * @property-read string $originating_checkout_session_id
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class EffectiveDeliverySelectionResourceInput extends Model {
    /** @param array{'delivery_selection': array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object|null, 'mutable': bool, 'originating_checkout_session_id'?: string, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EffectiveDeliverySelectionResourceInput')); }
    /** Shape $ (Value): {@see DeliverySelectionInput} or null. Shape $.anyOf[1] (Value): {@see DeliverySelectionInput}. The delivery choice selected for a checkout or order. Shape $.anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'calculation_expires_at'?: string|\DateTimeInterface, 'checkout_session_id'?: string, 'choices': list<DeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'delivery_quote_id': string, 'delivery_quote_version'?: string, 'delivery_selection_id': string, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'eligibility_context_version'?: string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'instructions'?: string, 'lifecycle_events'?: list<DeliverySelectionLifecycleEventResourceInput|array<array-key, mixed>|\stdClass>, 'lifecycle_updated_at'?: string|\DateTimeInterface, 'limiting_deadline_reason'?: string, 'order_id'?: string, 'private_data_status'?: string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'redacted_at'?: string|\DateTimeInterface, 'status': string, ...}|object|null
     * @throws SdkError When delivery_selection is omitted; use hasDeliverySelection() or valueOrDefault().
     */
    public function getDeliverySelection(): mixed { return $this->get('delivery_selection'); }
    public function hasDeliverySelection(): bool { return $this->has('delivery_selection'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When mutable is omitted; use hasMutable() or valueOrDefault().
     */
    public function getMutable(): bool { return $this->get('mutable'); }
    public function hasMutable(): bool { return $this->has('mutable'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When originating_checkout_session_id is omitted; use hasOriginatingCheckoutSessionId() or valueOrDefault().
     */
    public function getOriginatingCheckoutSessionId(): string { return $this->get('originating_checkout_session_id'); }
    public function hasOriginatingCheckoutSessionId(): bool { return $this->has('originating_checkout_session_id'); }
    /** Shape $ (Value): string.  Value enum: "none", "provisional", "committed".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
