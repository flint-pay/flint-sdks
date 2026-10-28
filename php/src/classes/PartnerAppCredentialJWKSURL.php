<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $last_fetched_at
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppCredentialJWKSURL extends Model {
    /** @param array{'last_fetched_at': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialJWKSURL')); }
    /** Shape $ (Value): string. Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format: date-time.
     * @return string
     */
    public function getLastFetchedAt(): string { return $this->get('last_fetched_at'); }
    public function hasLastFetchedAt(): bool { return $this->has('last_fetched_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
