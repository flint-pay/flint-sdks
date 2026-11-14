<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppMerchantActionRoutingInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantActionRoutingInput')); }
    /** When routing switches to the current merchant_action_url. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
