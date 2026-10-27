<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $payout_id
 * @property-read string $order_id
 * @property-read list<string> $expand
 * @property-read list<string> $type
 * @property-read list<string> $related_resource_type
 * @property-read string $related_resource_id
 * @property-read list<string> $status
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * @property-read string|\DateTimeInterface $available_after
 * @property-read string|\DateTimeInterface $available_before
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionsListInput extends Model {
    /** @param array{'currency'?: string, 'payout_id'?: string, 'order_id'?: string, 'expand'?: list<string>, 'type'?: list<string>, 'related_resource_type'?: list<string>, 'related_resource_id'?: string, 'status'?: list<string>, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface, 'available_after'?: string|\DateTimeInterface, 'available_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionsListInput')); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "order". Shape $[] (Value): string.  Value enum: "order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal". Shape $[] (Value): string.  Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal".
     * @return list<string>
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): array { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice". Shape $[] (Value): string.  Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination", "merchant_billing_invoice".
     * @return list<string>
     * @throws SdkError When related_resource_type is omitted; use hasRelatedResourceType() or valueOrDefault().
     */
    public function getRelatedResourceType(): array { return $this->get('related_resource_type'); }
    public function hasRelatedResourceType(): bool { return $this->has('related_resource_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When related_resource_id is omitted; use hasRelatedResourceId() or valueOrDefault().
     */
    public function getRelatedResourceId(): string { return $this->get('related_resource_id'); }
    public function hasRelatedResourceId(): bool { return $this->has('related_resource_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "available". Shape $[] (Value): string.  Value enum: "pending", "available".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_after is omitted; use hasAvailableAfter() or valueOrDefault().
     */
    public function getAvailableAfter(): string|\DateTimeInterface { return $this->get('available_after'); }
    public function hasAvailableAfter(): bool { return $this->has('available_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When available_before is omitted; use hasAvailableBefore() or valueOrDefault().
     */
    public function getAvailableBefore(): string|\DateTimeInterface { return $this->get('available_before'); }
    public function hasAvailableBefore(): bool { return $this->has('available_before'); }
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
}
