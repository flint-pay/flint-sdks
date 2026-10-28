<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available
 * @property-read string $code
 * @property-read ?string $created_at
 * @property-read ?string $expires_at
 * @property-read ?string $max_uses
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ?Promotion $promotion
 * @property-read string $promotion_code_id
 * @property-read string $promotion_id
 * @property-read string $status
 * @property-read ?string $timezone
 * @property-read ?string $unavailable_reason
 * @property-read ?string $updated_at
 * @property-read string $uses_count
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCode extends Model {
    /** @param array{'available': bool, 'code': string, 'created_at'?: string, 'expires_at'?: string, 'max_uses'?: string, 'merchant_id'?: string, 'metadata'?: mixed, 'promotion'?: mixed, 'promotion_code_id': string, 'promotion_id': string, 'status': string, 'timezone'?: string, 'unavailable_reason'?: string, 'updated_at'?: string, 'uses_count': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCode')); }
    /** Shape $ (Value): boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available.
     * @return bool
     */
    public function getAvailable(): bool { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Shape $ (Value): string. Code a buyer enters to redeem the promotion.
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): integer string. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getMaxUses(): ?string { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Shape $ (Value): string. Identifier of the merchant that owns the promotion code.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see MetadataMap}. Key-value data you attach to the promotion code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see Promotion}. The promotion this code belongs to. Present only when the list request asked for expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.
     * @return ?Promotion
     */
    public function getPromotion(): ?Promotion { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
    /** Shape $ (Value): string. Unique identifier for the promotion code.
     * @return string
     */
    public function getPromotionCodeId(): string { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** Shape $ (Value): string. Identifier of the promotion this code redeems.
     * @return string
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Shape $ (Value): string. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     * @return ?string
     */
    public function getUnavailableReason(): ?string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** Shape $ (Value): string. When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Number of times this code has been redeemed. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getUsesCount(): string { return $this->get('uses_count'); }
    public function hasUsesCount(): bool { return $this->has('uses_count'); }
    /** Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
