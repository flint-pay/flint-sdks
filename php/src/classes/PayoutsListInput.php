<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read string $currency
 * @property-read list<string> $expand
 * @property-read list<string> $method
 * @property-read list<string> $balance_source_type
 * @property-read string $payout_destination_id
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read list<string> $status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $arrival_date_from
 * @property-read string $arrival_date_to
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutsListInput extends Model {
    /** @param array{'idempotency_key'?: string, 'currency'?: string, 'expand'?: list<string>, 'method'?: list<string>, 'balance_source_type'?: list<string>, 'payout_destination_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: list<string>, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'arrival_date_from'?: string, 'arrival_date_to'?: string, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutsListInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): Array of string.  [] enum: "original_payout", "payout_destination", "reversed_by_payout". Shape $[] (Value): string.  Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "standard", "instant", "other". Shape $[] (Value): string.  Value enum: "standard", "instant", "other".
     * @return list<string>
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): array { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "card", "bank_account". Shape $[] (Value): string.  Value enum: "card", "bank_account".
     * @return list<string>
     * @throws SdkError When balance_source_type is omitted; use hasBalanceSourceType() or valueOrDefault().
     */
    public function getBalanceSourceType(): array { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "in_transit", "paid", "failed", "canceled". Shape $[] (Value): string.  Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When arrival_date_from is omitted; use hasArrivalDateFrom() or valueOrDefault().
     */
    public function getArrivalDateFrom(): string { return $this->get('arrival_date_from'); }
    public function hasArrivalDateFrom(): bool { return $this->has('arrival_date_from'); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When arrival_date_to is omitted; use hasArrivalDateTo() or valueOrDefault().
     */
    public function getArrivalDateTo(): string { return $this->get('arrival_date_to'); }
    public function hasArrivalDateTo(): bool { return $this->has('arrival_date_to'); }
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
