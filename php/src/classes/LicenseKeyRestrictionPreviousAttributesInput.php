<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $dispute_id
 * @property-read string|null $dispute_status
 * @property-read string|null $reason
 * @property-read string|null $refund_id
 * @property-read string|null $subscription_id
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyRestrictionPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'dispute_id'?: string|null, 'dispute_status'?: string|null, 'reason'?: string|null, 'refund_id'?: string|null, 'subscription_id'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyRestrictionPreviousAttributesInput')); }
    /** When the restriction took effect. anyOf[1] (Value): string. When the restriction took effect. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The dispute that restricted the key. anyOf[1] (Value): string. The dispute that restricted the key. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): mixed { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Whether the dispute is open or lost. Value enum: "open", "lost". anyOf[1] (Value): string. Whether the dispute is open or lost. Value enum: "open", "lost". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dispute_status is omitted; use hasDisputeStatus() or valueOrDefault().
     */
    public function getDisputeStatus(): mixed { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Reason for a merchant or subscription restriction. anyOf[1] (Value): string. Reason for a merchant or subscription restriction. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The refund that restricted the key. anyOf[1] (Value): string. The refund that restricted the key. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** The subscription that restricted the key. anyOf[1] (Value): string. The subscription that restricted the key. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): mixed { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription". anyOf[1] (Value): string. What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
