<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAppliedAmountMoney $applied_amount_money
 * @property-read MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAssessedAmountMoney $assessed_amount_money
 * @property-read string $reason
 * @property-read ?string $reason_message
 * @property-read ?string $return_line_item_id
 * @property-read string $return_resolution_adjustment_id
 * @property-read string $status
 * @property-read string $value_effect
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem extends Model {
    /** @param array{'adjustment_type': string, 'applied_amount_money': mixed, 'assessed_amount_money': mixed, 'reason': string, 'reason_message'?: string, 'return_line_item_id'?: string, 'return_resolution_adjustment_id': string, 'status': string, 'value_effect': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem')); }
    /** Shape $ (Value): string.  Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other".
     * @return string
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAppliedAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAppliedAmountMoney
     */
    public function getAppliedAmountMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAppliedAmountMoney { return $this->get('applied_amount_money'); }
    public function hasAppliedAmountMoney(): bool { return $this->has('applied_amount_money'); }
    /** Shape $ (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAssessedAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAssessedAmountMoney
     */
    public function getAssessedAmountMoney(): MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAssessedAmountMoney { return $this->get('assessed_amount_money'); }
    public function hasAssessedAmountMoney(): bool { return $this->has('assessed_amount_money'); }
    /** Shape $ (Value): string.  Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnResolutionAdjustmentId(): string { return $this->get('return_resolution_adjustment_id'); }
    public function hasReturnResolutionAdjustmentId(): bool { return $this->has('return_resolution_adjustment_id'); }
    /** Shape $ (Value): string.  Value enum: "applied", "waived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "deduction", "credit".
     * @return string
     */
    public function getValueEffect(): string { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
}
