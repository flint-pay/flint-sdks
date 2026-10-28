<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $last_fetched_at
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialJWKSURLInput extends Model {
    /** @param array{'last_fetched_at': string|\DateTimeInterface, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialJWKSURLInput')); }
    /** Shape $ (Value): string. Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When last_fetched_at is omitted; use hasLastFetchedAt() or valueOrDefault().
     */
    public function getLastFetchedAt(): string|\DateTimeInterface { return $this->get('last_fetched_at'); }
    public function hasLastFetchedAt(): bool { return $this->has('last_fetched_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
