<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read list<BuyerDeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass> $choices
 * @property-read string $delivery_quote_id
 * @property-read string $delivery_selection_id
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $destination_address
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<BuyerDeliveryInputRequirementResourceInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object $recipient
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerDeliverySelectionInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'choices': list<BuyerDeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>, 'delivery_quote_id': string, 'delivery_selection_id': string, 'destination_address'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<BuyerDeliveryInputRequirementResourceInput|array<array-key, mixed>|\stdClass>, 'recipient'?: array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerDeliverySelectionInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return list<BuyerDeliverySelectionChoiceResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return list<BuyerDeliveryInputRequirementResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): array|object { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
