<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $application_method
 * @property-read bool|null $available
 * @property-read PromotionCodesSummary|null $codes_summary
 * @property-read PromotionCombinesWith|null $combines_with
 * @property-read string|null $created_at
 * @property-read string|null $description
 * @property-read string|null $discount_class
 * @property-read string|null $display_name
 * @property-read mixed $eligibility_rules
 * @property-read PromotionExclusivity|null $exclusivity
 * @property-read string|null $external_reference_id
 * @property-read int|null $max_uses
 * @property-read mixed $max_uses_per_customer
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $promotion_id
 * @property-read string|null $redemption_type
 * @property-read PromotionSchedule|null $schedule
 * @property-read string|null $status
 * @property-read string|null $unavailable_reason
 * @property-read string|null $updated_at
 * @property-read int|null $uses_count
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PromotionUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'application_method'?: mixed, 'available'?: mixed, 'codes_summary'?: mixed, 'combines_with'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'discount_class'?: mixed, 'display_name'?: mixed, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: mixed, 'max_uses'?: mixed, 'max_uses_per_customer'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'promotion_id'?: mixed, 'redemption_type'?: mixed, 'schedule'?: mixed, 'status'?: mixed, 'unavailable_reason'?: mixed, 'updated_at'?: mixed, 'uses_count'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionUpdatedMerchantEventDataPreviousAttributes')); }
    /** Discount effect and how it applies to eligible items or charges. anyOf[1] (Value): {@see PromotionApplicationMethod}. Discount effect and how it applies to eligible items or charges. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getApplicationMethod(): mixed { return $this->get('application_method'); }
    public function hasApplicationMethod(): bool { return $this->has('application_method'); }
    /** Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. anyOf[1] (Value): boolean. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAvailable(): bool|null { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. anyOf[1] (Value): {@see PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. anyOf[2] (Value): null.
     * @return PromotionCodesSummary|null
     */
    public function getCodesSummary(): PromotionCodesSummary|null { return $this->get('codes_summary'); }
    public function hasCodesSummary(): bool { return $this->has('codes_summary'); }
    /** Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. anyOf[1] (Value): {@see PromotionCombinesWith}. Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. anyOf[2] (Value): null.
     * @return PromotionCombinesWith|null
     */
    public function getCombinesWith(): PromotionCombinesWith|null { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** When the promotion was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Optional description of the promotion for your own records. anyOf[1] (Value): string. Optional description of the promotion for your own records. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whether the promotion discounts the order, individual line items, or service charges. Value enum: "order", "line_item", "service_charge". anyOf[1] (Value): string. Whether the promotion discounts the order, individual line items, or service charges. Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDiscountClass(): string|null { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Buyer-facing promotion name shown in checkout and order discount surfaces. anyOf[1] (Value): string. Buyer-facing promotion name shown in checkout and order discount surfaces. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisplayName(): string|null { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. anyOf[1] (Value): {@see PromotionRuleGroup}. Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getEligibilityRules(): mixed { return $this->get('eligibility_rules'); }
    public function hasEligibilityRules(): bool { return $this->has('eligibility_rules'); }
    /** Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. anyOf[1] (Value): {@see PromotionExclusivity}. Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. anyOf[2] (Value): null.
     * @return PromotionExclusivity|null
     */
    public function getExclusivity(): PromotionExclusivity|null { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. anyOf[1] (Value): integer. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxUses(): int|null { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. anyOf[1] (Value): integer or null. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMaxUsesPerCustomer(): mixed { return $this->get('max_uses_per_customer'); }
    public function hasMaxUsesPerCustomer(): bool { return $this->has('max_uses_per_customer'); }
    /** Identifier of the merchant that owns the promotion. anyOf[1] (Value): string. Identifier of the merchant that owns the promotion. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Key-value data you attach to the promotion. anyOf[1] (Value): {@see MetadataMap}. Key-value data you attach to the promotion. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Internal promotion name for dashboards, searching, and reporting. anyOf[1] (Value): string. Internal promotion name for dashboards, searching, and reporting. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for the promotion. anyOf[1] (Value): string. Unique identifier for the promotion. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Whether the promotion applies automatically when its rules match or requires a promotion code. Value enum: "automatic", "code". anyOf[1] (Value): string. Whether the promotion applies automatically when its rules match or requires a promotion code. Value enum: "automatic", "code". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRedemptionType(): string|null { return $this->get('redemption_type'); }
    public function hasRedemptionType(): bool { return $this->has('redemption_type'); }
    /** Optional start and end times that limit when the promotion can apply. anyOf[1] (Value): {@see PromotionSchedule}. Optional start and end times that limit when the promotion can apply. anyOf[2] (Value): null.
     * @return PromotionSchedule|null
     */
    public function getSchedule(): PromotionSchedule|null { return $this->get('schedule'); }
    public function hasSchedule(): bool { return $this->has('schedule'); }
    /** Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why available is false. Present only when available is false. Value enum: "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[1] (Value): string. Why available is false. Present only when available is false. Value enum: "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUnavailableReason(): string|null { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** When the promotion was last updated, as an RFC3339 timestamp. anyOf[1] (Value): string. When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Number of times the promotion has been redeemed. anyOf[1] (Value): integer. Number of times the promotion has been redeemed. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getUsesCount(): int|null { return $this->get('uses_count'); }
    public function hasUsesCount(): bool { return $this->has('uses_count'); }
    /** Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. anyOf[1] (Value): integer. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
