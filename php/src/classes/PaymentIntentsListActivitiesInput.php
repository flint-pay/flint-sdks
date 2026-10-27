<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_intent_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $sort_direction
 * @property-read list<string> $activity_type
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsListActivitiesInput extends Model {
    /** @param array{'payment_intent_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'activity_type'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsListActivitiesInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent". Shape $[] (Value): string.  Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     * @return list<string>
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): array { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
}
