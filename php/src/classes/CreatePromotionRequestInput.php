<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass $application_method
 * @property-read list<CreatePromotionCodeRequestInput|array<array-key, mixed>|\stdClass> $codes
 * @property-read PromotionCombinesWithInput|array<array-key, mixed>|\stdClass $combines_with
 * @property-read string $description
 * @property-read string $discount_class
 * @property-read string $display_name
 * @property-read list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object $eligibility_rules
 * @property-read PromotionExclusivityInput|array<array-key, mixed>|\stdClass $exclusivity
 * @property-read string $external_reference_id
 * @property-read string $max_uses
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $redemption_type
 * @property-read PromotionScheduleInput|array<array-key, mixed>|\stdClass $schedule
 * @property-read string $stacking_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePromotionRequestInput extends Model {
    /** @param array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'codes'?: list<CreatePromotionCodeRequestInput|array<array-key, mixed>|\stdClass>, 'combines_with'?: PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'redemption_type'?: string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'stacking_mode'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePromotionRequestInput')); }
    /** @return PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When application_method is omitted; use hasApplicationMethod() or valueOrDefault().
     */
    public function getApplicationMethod(): mixed { return $this->get('application_method'); }
    public function hasApplicationMethod(): bool { return $this->has('application_method'); }
    /** @return list<CreatePromotionCodeRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When codes is omitted; use hasCodes() or valueOrDefault().
     */
    public function getCodes(): array { return $this->get('codes'); }
    public function hasCodes(): bool { return $this->has('codes'); }
    /** @return PromotionCombinesWithInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When combines_with is omitted; use hasCombinesWith() or valueOrDefault().
     */
    public function getCombinesWith(): mixed { return $this->get('combines_with'); }
    public function hasCombinesWith(): bool { return $this->has('combines_with'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): string { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** @return string
     * @throws SdkError When display_name is omitted; use hasDisplayName() or valueOrDefault().
     */
    public function getDisplayName(): string { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** @return list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object
     * @throws SdkError When eligibility_rules is omitted; use hasEligibilityRules() or valueOrDefault().
     */
    public function getEligibilityRules(): mixed { return $this->get('eligibility_rules'); }
    public function hasEligibilityRules(): bool { return $this->has('eligibility_rules'); }
    /** @return PromotionExclusivityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When exclusivity is omitted; use hasExclusivity() or valueOrDefault().
     */
    public function getExclusivity(): mixed { return $this->get('exclusivity'); }
    public function hasExclusivity(): bool { return $this->has('exclusivity'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When max_uses is omitted; use hasMaxUses() or valueOrDefault().
     */
    public function getMaxUses(): string { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When redemption_type is omitted; use hasRedemptionType() or valueOrDefault().
     */
    public function getRedemptionType(): string { return $this->get('redemption_type'); }
    public function hasRedemptionType(): bool { return $this->has('redemption_type'); }
    /** @return PromotionScheduleInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When schedule is omitted; use hasSchedule() or valueOrDefault().
     */
    public function getSchedule(): mixed { return $this->get('schedule'); }
    public function hasSchedule(): bool { return $this->has('schedule'); }
    /** @return string
     * @throws SdkError When stacking_mode is omitted; use hasStackingMode() or valueOrDefault().
     */
    public function getStackingMode(): string { return $this->get('stacking_mode'); }
    public function hasStackingMode(): bool { return $this->has('stacking_mode'); }
}
