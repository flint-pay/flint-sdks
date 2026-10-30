<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_intent_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $sort_direction
 * @property-read list<string>|string $activity_type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsListActivitiesInput extends Model {
    /** @param array{'payment_intent_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'activity_type'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsListActivitiesInput')); }
    /** Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
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
    /** Filter by activity type. Repeat the parameter or pass comma-separated values to OR multiple types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent". Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[1][] (Value): string.  Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[2] (Value): string.  Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     * @return list<string>|string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): mixed { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
}
