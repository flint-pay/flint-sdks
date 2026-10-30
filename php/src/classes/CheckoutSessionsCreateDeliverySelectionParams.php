<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass}|object> $choices
 * @property-read string $delivery_quote_id
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string|null $expected_delivery_selection_id
 * @property-read DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass $recipient
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionsCreateDeliverySelectionParams extends Model {
    /** @param array{'choices': list<array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass}|object>, 'delivery_quote_id': string, 'destination_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'expected_delivery_selection_id'?: string|null, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionsCreateDeliverySelectionParams')); }
    /**  [] (Value): {@see CreateDeliverySelectionChoiceRequestInput}. The delivery option to select for one choice group when creating a delivery selection, with optional delivery instructions.
     * @return list<array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass}|object>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** minLength: 1. Example: "dqt_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: 1.
     * @return string|null
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string|null { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     * @return DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
