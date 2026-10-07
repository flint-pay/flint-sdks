<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'choice_groups': list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics': list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string, 'selection_authority': bool}|object|array{'audience': string, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'locations': list<DeliveryPickupAvailabilityLocationResourceInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryPickupAvailabilityDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string}|object $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPreviewResponseInput extends Model {
    /** @param array{'data': array{'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'choice_groups': list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics': list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string, 'selection_authority': bool}|object|array{'audience': string, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'locations': list<DeliveryPickupAvailabilityLocationResourceInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryPickupAvailabilityDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string}|object, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseInput')); }
    /** @return array{'buyer_location'?: DeliveryBuyerLocationResourceInput|array<array-key, mixed>|\stdClass, 'choice_groups': list<DeliveryPreviewChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'expires_at': string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'line_items': list<CreateOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics': list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string, 'pickup_location_id'?: string, 'selection_authority': bool}|object|array{'audience': string, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'locations': list<DeliveryPickupAvailabilityLocationResourceInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryPickupAvailabilityDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): mixed { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
