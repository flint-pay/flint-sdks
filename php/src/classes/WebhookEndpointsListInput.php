<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $event_sources
 * @property-read string $partner_app_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'event_sources'?: list<string>, 'partner_app_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsListInput')); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "merchant", "partner_app", "installed_merchants". Shape $[] (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants".
     * @return list<string>
     * @throws SdkError When event_sources is omitted; use hasEventSources() or valueOrDefault().
     */
    public function getEventSources(): array { return $this->get('event_sources'); }
    public function hasEventSources(): bool { return $this->has('event_sources'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
}
