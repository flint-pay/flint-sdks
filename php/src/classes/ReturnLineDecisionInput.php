<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read string $approved_quantity
 * @property-read string $decision_basis
 * @property-read string $decline_reason
 * @property-read string $decline_reason_message
 * @property-read bool $is_inspection_required
 * @property-read string $override_reason
 * @property-read string $override_reason_message
 * @property-read string $receiving_location_id
 * @property-read string $refund_timing
 * @property-read string $resolution_mode
 * @property-read string $return_line_item_id
 * @property-read string $return_required_quantity
 * @property-read string $selected_resolution_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineDecisionInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineDecisionInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** @return string
     * @throws SdkError When approved_quantity is omitted; use hasApprovedQuantity() or valueOrDefault().
     */
    public function getApprovedQuantity(): string { return $this->get('approved_quantity'); }
    public function hasApprovedQuantity(): bool { return $this->has('approved_quantity'); }
    /** @return string
     * @throws SdkError When decision_basis is omitted; use hasDecisionBasis() or valueOrDefault().
     */
    public function getDecisionBasis(): string { return $this->get('decision_basis'); }
    public function hasDecisionBasis(): bool { return $this->has('decision_basis'); }
    /** @return string
     * @throws SdkError When decline_reason is omitted; use hasDeclineReason() or valueOrDefault().
     */
    public function getDeclineReason(): string { return $this->get('decline_reason'); }
    public function hasDeclineReason(): bool { return $this->has('decline_reason'); }
    /** @return string
     * @throws SdkError When decline_reason_message is omitted; use hasDeclineReasonMessage() or valueOrDefault().
     */
    public function getDeclineReasonMessage(): string { return $this->get('decline_reason_message'); }
    public function hasDeclineReasonMessage(): bool { return $this->has('decline_reason_message'); }
    /** @return bool
     * @throws SdkError When is_inspection_required is omitted; use hasIsInspectionRequired() or valueOrDefault().
     */
    public function getIsInspectionRequired(): bool { return $this->get('is_inspection_required'); }
    public function hasIsInspectionRequired(): bool { return $this->has('is_inspection_required'); }
    /** @return string
     * @throws SdkError When override_reason is omitted; use hasOverrideReason() or valueOrDefault().
     */
    public function getOverrideReason(): string { return $this->get('override_reason'); }
    public function hasOverrideReason(): bool { return $this->has('override_reason'); }
    /** @return string
     * @throws SdkError When override_reason_message is omitted; use hasOverrideReasonMessage() or valueOrDefault().
     */
    public function getOverrideReasonMessage(): string { return $this->get('override_reason_message'); }
    public function hasOverrideReasonMessage(): bool { return $this->has('override_reason_message'); }
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
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
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
