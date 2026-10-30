<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $sort_direction
 * @property-read list<string>|string $activity_type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesListActivitiesParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'activity_type'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesListActivitiesParams')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Filter by activity_type. The output-only catch-all other is not accepted. Repeat the parameter or pass comma-separated values to OR multiple types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". Value enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". anyOf[1][] (Value): string.  Value enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited". anyOf[2] (Value): string.  Value enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited".
     * @return list<string>|string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): mixed { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
}
