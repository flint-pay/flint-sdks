<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $based_on_quantity
 * @property-read bool $is_inspection_required
 * @property-read string $receiving_location_id
 * @property-read string $refund_timing
 * @property-read string $resolution_mode
 * @property-read string $return_required_quantity
 * @property-read string $selected_resolution_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineItemDecisionProposalInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'based_on_quantity': string, 'is_inspection_required': bool, 'receiving_location_id'?: string, 'refund_timing'?: string, 'resolution_mode': string, 'return_required_quantity': string, 'selected_resolution_type'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemDecisionProposalInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** @return string
     * @throws SdkError When based_on_quantity is omitted; use hasBasedOnQuantity() or valueOrDefault().
     */
    public function getBasedOnQuantity(): string { return $this->get('based_on_quantity'); }
    public function hasBasedOnQuantity(): bool { return $this->has('based_on_quantity'); }
    /** @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** @return string
     * @throws SdkError When refund_timing is omitted; use hasRefundTiming() or valueOrDefault().
     */
    public function getRefundTiming(): string { return $this->get('refund_timing'); }
    public function hasRefundTiming(): bool { return $this->has('refund_timing'); }
    /** @return string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** @return string
     * @throws SdkError When return_required_quantity is omitted; use hasReturnRequiredQuantity() or valueOrDefault().
     */
    public function getReturnRequiredQuantity(): string { return $this->get('return_required_quantity'); }
    public function hasReturnRequiredQuantity(): bool { return $this->has('return_required_quantity'); }
    /** @return string
     * @throws SdkError When selected_resolution_type is omitted; use hasSelectedResolutionType() or valueOrDefault().
     */
    public function getSelectedResolutionType(): string { return $this->get('selected_resolution_type'); }
    public function hasSelectedResolutionType(): bool { return $this->has('selected_resolution_type'); }
}
