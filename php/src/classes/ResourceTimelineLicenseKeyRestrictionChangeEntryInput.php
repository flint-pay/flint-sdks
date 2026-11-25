<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $dispute_id
 * @property-read string $entry_type
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $refund_id
 * @property-read string $resource_timeline_entry_id
 * @property-read string $subscription_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineLicenseKeyRestrictionChangeEntryInput extends Model {
    /** @param array{'action': string, 'dispute_id'?: string, 'entry_type': string, 'occurred_at': string|\DateTimeInterface, 'refund_id'?: string, 'resource_timeline_entry_id': string, 'subscription_id'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineLicenseKeyRestrictionChangeEntryInput')); }
    /** How this restriction changed. Value enum: "added", "lifted".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** The dispute that caused this restriction, when applicable. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Always license_key_restriction_change for this kind of entry. Value enum: "license_key_restriction_change".
     * @return string
     * @throws SdkError When entry_type is omitted; use hasEntryType() or valueOrDefault().
     */
    public function getEntryType(): string { return $this->get('entry_type'); }
    public function hasEntryType(): bool { return $this->has('entry_type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The refund that caused this restriction, when applicable. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Stable ID of this restriction change. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     * @return string
     * @throws SdkError When resource_timeline_entry_id is omitted; use hasResourceTimelineEntryId() or valueOrDefault().
     */
    public function getResourceTimelineEntryId(): string { return $this->get('resource_timeline_entry_id'); }
    public function hasResourceTimelineEntryId(): bool { return $this->has('resource_timeline_entry_id'); }
    /** The subscription that caused this restriction, when applicable. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** What caused the restriction. Value enum: "merchant", "refund", "dispute", "subscription", "payment_reversal".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
