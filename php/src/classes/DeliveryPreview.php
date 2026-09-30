<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryPreviewBuyerLocationAddress|DeliveryPreviewBuyerLocationCoordinate|\stdClass $buyer_location
 * @property-read list<DeliveryPreviewChoiceGroupResource> $choice_groups
 * @property-read string $currency
 * @property-read list<string> $delivery_method_ids
 * @property-read DeliveryAddressResource $destination_address
 * @property-read string $evaluated_at
 * @property-read string $evaluation_status
 * @property-read string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<\stdClass> $line_items
 * @property-read list<DeliveryMerchantDiagnostic> $merchant_diagnostics
 * @property-read string $pickup_location_id
 * @property-read bool $selection_authority
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPreview extends Model {
    /** @param array{'buyer_location'?: mixed, 'choice_groups': list<mixed>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'line_items': list<mixed>, 'merchant_diagnostics': list<mixed>, 'pickup_location_id'?: string, 'selection_authority': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreview')); }
    /** @return DeliveryPreviewBuyerLocationAddress|DeliveryPreviewBuyerLocationCoordinate|\stdClass
     * @throws SdkError When buyer_location is omitted; use hasBuyerLocation() or valueOrDefault().
     */
    public function getBuyerLocation(): DeliveryPreviewBuyerLocationAddress|DeliveryPreviewBuyerLocationCoordinate|\stdClass { return $this->get('buyer_location'); }
    public function hasBuyerLocation(): bool { return $this->has('buyer_location'); }
    /** @return list<DeliveryPreviewChoiceGroupResource>
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
    /** @return DeliveryAddressResource
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): DeliveryAddressResource { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return string
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return list<DeliveryInputRequirement>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return list<DeliveryMerchantDiagnostic>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
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
