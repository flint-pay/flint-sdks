<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read list<string>|string $event_sources
 * @property-read string $partner_app_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsListParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'event_sources'?: list<string>|string, 'partner_app_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsListParams')); }
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
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out deleted rows; name deleted to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive", "deleted". Value enum: "active", "inactive", "deleted". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "deleted". anyOf[1][] (Value): string.  Value enum: "active", "inactive", "deleted". anyOf[2] (Value): string.  Value enum: "active", "inactive", "deleted".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by webhook endpoint event sources. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "merchant", "partner_app", "installed_merchants". Value enum: "merchant", "partner_app", "installed_merchants". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "merchant", "partner_app", "installed_merchants". anyOf[1][] (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants". anyOf[2] (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants".
     * @return list<string>|string
     * @throws SdkError When event_sources is omitted; use hasEventSources() or valueOrDefault().
     */
    public function getEventSources(): mixed { return $this->get('event_sources'); }
    public function hasEventSources(): bool { return $this->has('event_sources'); }
    /** Filter by partner app ID for partner-source webhook endpoints. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
}
