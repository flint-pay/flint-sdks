<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $status
 * @property-read string $domain_name
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodDomainsListParams extends Model {
    /** @param array{'status'?: list<string>|string, 'domain_name'?: string, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainsListParams')); }
    /** Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive". Value enum: "active", "inactive". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive". anyOf[1][] (Value): string.  Value enum: "active", "inactive". anyOf[2] (Value): string.  Value enum: "active", "inactive".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Exact hostname filter after trimming whitespace and converting to lowercase. Accepts an ASCII fully-qualified hostname without a URL, port, wildcard, or IP address. Matches the entire stored domain name. minLength: 1. maxLength: 253.
     * @return string
     * @throws SdkError When domain_name is omitted; use hasDomainName() or valueOrDefault().
     */
    public function getDomainName(): string { return $this->get('domain_name'); }
    public function hasDomainName(): bool { return $this->has('domain_name'); }
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
