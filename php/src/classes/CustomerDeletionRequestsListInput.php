<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read list<string>|string $status
 * @property-read string $customer_id
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerDeletionRequestsListInput extends Model {
    /** @param array{'status'?: list<string>|string, 'customer_id'?: string, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestsListInput')); }
    /** Only return requests in this lifecycle state. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending_review", "processing", "completed", "rejected", "failed". Value enum: "pending_review", "processing", "completed", "rejected", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending_review", "processing", "completed", "rejected", "failed". anyOf[1][] (Value): string.  Value enum: "pending_review", "processing", "completed", "rejected", "failed". anyOf[2] (Value): string.  Value enum: "pending_review", "processing", "completed", "rejected", "failed".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Only return requests for this Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
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
}
