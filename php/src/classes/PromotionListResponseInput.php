<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'available': bool, 'codes'?: list<PromotionCodeInput|array<array-key, mixed>|\stdClass>, 'codes_summary'?: PromotionCodesSummaryInput|array<array-key, mixed>|\stdClass, 'combines_with': PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, 'version': string, ...}|object> $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $next_page_token
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionListResponseInput extends Model {
    /** @param array{'data': list<array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'available': bool, 'codes'?: list<PromotionCodeInput|array<array-key, mixed>|\stdClass>, 'codes_summary'?: PromotionCodesSummaryInput|array<array-key, mixed>|\stdClass, 'combines_with': PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, 'version': string, ...}|object>, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'next_page_token'?: string, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionListResponseInput')); }
    /** Shape $ (Value): Array of {@see PromotionInput}. Promotions returned in the requested sort order. Shape $[] (Value): {@see PromotionInput}. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.
     * @return list<array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'available': bool, 'codes'?: list<PromotionCodeInput|array<array-key, mixed>|\stdClass>, 'codes_summary'?: PromotionCodesSummaryInput|array<array-key, mixed>|\stdClass, 'combines_with': PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, 'version': string, ...}|object>
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMetaInput}. Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results.
     * @return string
     * @throws SdkError When next_page_token is omitted; use hasNextPageToken() or valueOrDefault().
     */
    public function getNextPageToken(): string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Shape $ (Value): string. Identifier of this API request, useful when contacting support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
