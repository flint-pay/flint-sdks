<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'available': bool, 'codes_summary'?: PromotionCodesSummaryInput|array<array-key, mixed>|\stdClass, 'combines_with': PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: int, 'max_uses_per_customer': int|null, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': int, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionArchivedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'available': bool, 'codes_summary'?: PromotionCodesSummaryInput|array<array-key, mixed>|\stdClass, 'combines_with': PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: int, 'max_uses_per_customer': int|null, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': int, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionArchivedMerchantEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object and {@see WebhookPromotionInput}. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `codes`. object.application_method (Required): {@see PromotionApplicationMethodInput}. Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. object.available (Required): boolean. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. object.codes_summary (Optional): {@see PromotionCodesSummaryInput}. Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. A count of a promotion's codes, including how many are redeemable now and the newest redeemable code. object.combines_with (Required): {@see PromotionCombinesWithInput}. Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. object.created_at (Optional): string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.description (Optional): string. Optional description of the promotion for your own records. object.discount_class (Required): string. Whether the promotion discounts the order, individual line items, or service charges. Value enum: "order", "line_item", "service_charge". object.display_name (Required): string. Buyer-facing promotion name shown in checkout and order discount surfaces. object.eligibility_rules (Optional): {@see PromotionRuleGroupInput}. Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. object.exclusivity (Optional): {@see PromotionExclusivityInput}. Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.max_uses (Optional): integer. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: int64. object.max_uses_per_customer (Required): integer or null. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: int64. minimum: 1. object.merchant_id (Optional): string. Identifier of the merchant that owns the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@see MetadataMapInput}. Key-value data you attach to the promotion. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.name (Required): string. Internal promotion name for dashboards, searching, and reporting. object.promotion_id (Required): string. Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". object.redemption_type (Required): string. Whether the promotion applies automatically when its rules match or requires a promotion code. Value enum: "automatic", "code". object.schedule (Optional): {@see PromotionScheduleInput}. Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. object.status (Required): string. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Value enum: "active", "inactive", "archived". object.unavailable_reason (Optional): string. Why available is false. Present only when available is false. Value enum: "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". object.updated_at (Optional): string. When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.uses_count (Required): integer. Number of times the promotion has been redeemed. Format: int64. object.version (Required): integer. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'application_method': PromotionApplicationMethodInput|array<array-key, mixed>|\stdClass, 'available': bool, 'codes_summary'?: PromotionCodesSummaryInput|array<array-key, mixed>|\stdClass, 'combines_with': PromotionCombinesWithInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: PromotionRuleGroupInput|array<array-key, mixed>|\stdClass, 'exclusivity'?: PromotionExclusivityInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'max_uses'?: int, 'max_uses_per_customer': int|null, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: PromotionScheduleInput|array<array-key, mixed>|\stdClass, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': int, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "promotion.archived".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
