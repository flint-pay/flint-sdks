<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppMerchantActionRoutingPreviousAttributesInput extends Model {
    /** @param array{'expires_at'?: string|\DateTimeInterface|null, 'url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantActionRoutingPreviousAttributesInput')); }
    /** When routing switches to the current merchant_action_url. anyOf[1] (Value): string. When routing switches to the current merchant_action_url. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. anyOf[1] (Value): string. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): mixed { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
