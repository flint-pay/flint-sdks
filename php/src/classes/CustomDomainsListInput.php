<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $type
 * @property-read list<string>|string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomDomainsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'type'?: list<string>|string, 'status'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainsListInput')); }
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
    /** Return domains of these types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "checkout", "customer_account". Value enum: "checkout", "customer_account". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "checkout", "customer_account". anyOf[1][] (Value): string.  Value enum: "checkout", "customer_account". anyOf[2] (Value): string.  Value enum: "checkout", "customer_account".
     * @return list<string>|string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "provisioning", "active", "attention_required", "inactive", "archived". Value enum: "provisioning", "active", "attention_required", "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "provisioning", "active", "attention_required", "inactive", "archived". anyOf[1][] (Value): string.  Value enum: "provisioning", "active", "attention_required", "inactive", "archived". anyOf[2] (Value): string.  Value enum: "provisioning", "active", "attention_required", "inactive", "archived".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
