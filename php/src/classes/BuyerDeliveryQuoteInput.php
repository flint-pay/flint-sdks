<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read mixed $buyer_location
 * @property-read list<string> $buyer_reasons
 * @property-read list<BuyerDeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass> $choice_groups
 * @property-read string $delivery_quote_id
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $destination_address
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<BuyerDeliveryInputRequirementResourceInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read bool $selection_required
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerDeliveryQuoteInput extends Model {
    /** @param array{'audience': string, 'buyer_location'?: mixed, 'buyer_reasons': list<string>, 'choice_groups': list<BuyerDeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'delivery_quote_id': string, 'destination_address'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<BuyerDeliveryInputRequirementResourceInput|array<array-key, mixed>|\stdClass>, 'selection_required': bool, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerDeliveryQuoteInput')); }
    /** @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** @return mixed
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return list<string>
     * @throws SdkError When buyer_reasons is omitted; use hasBuyerReasons() or valueOrDefault().
     */
    public function getBuyerReasons(): array { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /** @return list<BuyerDeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** @return array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): array|object { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
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
    /** @return bool
     * @throws SdkError When selection_required is omitted; use hasSelectionRequired() or valueOrDefault().
     */
    public function getSelectionRequired(): bool { return $this->get('selection_required'); }
    public function hasSelectionRequired(): bool { return $this->has('selection_required'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
