<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $buyer_location
 * @property-read list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass> $choice_groups
 * @property-read string $currency
 * @property-read list<string> $delivery_method_ids
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $destination_address
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass> $merchant_diagnostics
 * @property-read string $mode
 * @property-read string $pickup_location_id
 * @property-read bool $selection_authority
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPreviewInput extends Model {
    /** @param array{'buyer_location'?: mixed, 'choice_groups': list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics': list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string, 'selection_authority': bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewInput')); }
    /** @return mixed
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): mixed { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
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
    /** @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When pickup_location_id is omitted; use hasPickupLocationId() or valueOrDefault().
     */
    public function getPickupLocationId(): string { return $this->get('pickup_location_id'); }
    public function hasPickupLocationId(): bool { return $this->has('pickup_location_id'); }
    /** @return bool
     * @throws SdkError When selection_authority is omitted; use hasSelectionAuthority() or valueOrDefault().
     */
    public function getSelectionAuthority(): bool { return $this->get('selection_authority'); }
    public function hasSelectionAuthority(): bool { return $this->has('selection_authority'); }
}
