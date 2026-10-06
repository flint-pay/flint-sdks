<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $max_uses
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'codes_summary'?: array{'active_count': int, 'newest_active_code'?: string, 'total_count': int, ...}|object, 'combines_with'?: PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'stacking_mode': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, ...}|object $promotion
 * @property-read string $promotion_code_id
 * @property-read string $promotion_id
 * @property-read string $status
 * @property-read string $timezone
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $uses_count
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCodeInput extends Model {
    /** @param array{'code': string, 'created_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'promotion'?: array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'codes_summary'?: array{'active_count': int, 'newest_active_code'?: string, 'total_count': int, ...}|object, 'combines_with'?: PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'stacking_mode': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, ...}|object, 'promotion_code_id': string, 'promotion_id': string, 'status': string, 'timezone'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeInput')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When max_uses is omitted; use hasMaxUses() or valueOrDefault().
     */
    public function getMaxUses(): string { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'codes_summary'?: array{'active_count': int, 'newest_active_code'?: string, 'total_count': int, ...}|object, 'combines_with'?: PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: list<PromotionRuleInput|array<array-key, mixed>|\stdClass>|array{'all': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object|array{'any': list<array{'attribute': string, 'currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'operator': string, 'values'?: list<PromotionRuleValueInput|array<array-key, mixed>|\stdClass>}|object|PromotionRuleGroupInput|array<array-key, mixed>|\stdClass>}|object, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'stacking_mode': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, ...}|object
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): array|object { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
    /** @return string
     * @throws SdkError When promotion_code_id is omitted; use hasPromotionCodeId() or valueOrDefault().
     */
    public function getPromotionCodeId(): string { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When uses_count is omitted; use hasUsesCount() or valueOrDefault().
     */
    public function getUsesCount(): string { return $this->get('uses_count'); }
    public function hasUsesCount(): bool { return $this->has('uses_count'); }
}
