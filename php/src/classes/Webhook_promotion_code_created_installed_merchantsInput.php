<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available': bool, 'code': string, 'created_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'promotion'?: PromotionInput|array<array-key, mixed>|\stdClass, 'promotion_code_id': string, 'promotion_id': string, 'status': string, 'timezone'?: string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_promotion_code_created_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available': bool, 'code': string, 'created_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'promotion'?: PromotionInput|array<array-key, mixed>|\stdClass, 'promotion_code_id': string, 'promotion_id': string, 'status': string, 'timezone'?: string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_promotion_code_created_installed_merchantsInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see PromotionCodeInput}. A code a buyer enters to claim a promotion. Shape $.object.available (Required): boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. Shape $.object.code (Required): string. Code a buyer enters to redeem the promotion. Shape $.object.created_at (Optional): string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Shape $.object.expires_at (Optional): string. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time. Shape $.object.max_uses (Optional): integer string. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.merchant_id (Optional): string. Identifier of the merchant that owns the promotion code. Shape $.object.metadata (Optional): {@see MetadataMapInput}. Key-value data you attach to the promotion code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Shape $.object.promotion (Optional): {@see PromotionInput}. The promotion this code belongs to. Present only when the list request asked for expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. Shape $.object.promotion_code_id (Required): string. Unique identifier for the promotion code. Shape $.object.promotion_id (Required): string. Identifier of the promotion this code redeems. Shape $.object.status (Required): string. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Value enum: "active", "inactive", "archived". Shape $.object.timezone (Optional): string. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. Shape $.object.unavailable_reason (Optional): string. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable". Shape $.object.updated_at (Optional): string. When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time. Shape $.object.uses_count (Required): integer string. Number of times this code has been redeemed. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.version (Required): integer string. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return array{'object': array{'available': bool, 'code': string, 'created_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'promotion'?: PromotionInput|array<array-key, mixed>|\stdClass, 'promotion_code_id': string, 'promotion_id': string, 'status': string, 'timezone'?: string, 'unavailable_reason'?: string, 'updated_at'?: string|\DateTimeInterface, 'uses_count': string, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "promotion_code.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): {@see PartnerWebhookEnvelopeSourceInput} and object. The source of a partner webhook event, selected by type. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. Shape $.oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
