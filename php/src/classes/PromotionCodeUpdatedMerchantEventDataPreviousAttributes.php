<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $available
 * @property-read string|null $code
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $expires_at
 * @property-read int|null $max_uses
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $promotion_code_id
 * @property-read string|null $promotion_id
 * @property-read string|null $status
 * @property-read string|null $timezone
 * @property-read string|null $unavailable_reason
 * @property-read string|null $updated_at
 * @property-read int|null $uses_count
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCodeUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'available'?: mixed, 'code'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'expires_at'?: mixed, 'max_uses'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'promotion_code_id'?: mixed, 'promotion_id'?: mixed, 'status'?: mixed, 'timezone'?: mixed, 'unavailable_reason'?: mixed, 'updated_at'?: mixed, 'uses_count'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeUpdatedMerchantEventDataPreviousAttributes')); }
    /** Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. anyOf[1] (Value): boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAvailable(): bool|null { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Code a buyer enters to redeem the promotion. anyOf[1] (Value): string. Code a buyer enters to redeem the promotion. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** When the promotion code was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the promotion code was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. anyOf[1] (Value): string. Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. anyOf[1] (Value): string. When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. anyOf[1] (Value): integer. Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxUses(): int|null { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Identifier of the merchant that owns the promotion code. anyOf[1] (Value): string. Identifier of the merchant that owns the promotion code. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Key-value data you attach to the promotion code. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Unique identifier for the promotion code. anyOf[1] (Value): string. Unique identifier for the promotion code. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionCodeId(): string|null { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** Identifier of the promotion this code redeems. anyOf[1] (Value): string. Identifier of the promotion this code redeems. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. anyOf[1] (Value): string. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[1] (Value): string. Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUnavailableReason(): string|null { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** When the promotion code was last updated, as an RFC3339 timestamp. anyOf[1] (Value): string. When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Number of times this code has been redeemed. anyOf[1] (Value): integer. Number of times this code has been redeemed. Format: int64. anyOf[2] (Value): null.
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
