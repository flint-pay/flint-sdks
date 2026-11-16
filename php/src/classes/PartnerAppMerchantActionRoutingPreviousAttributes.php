<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $expires_at
 * @property-read string|null $url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppMerchantActionRoutingPreviousAttributes extends Model {
    /** @param array{'expires_at'?: mixed, 'url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppMerchantActionRoutingPreviousAttributes')); }
    /** When routing switches to the current merchant_action_url. anyOf[1] (Value): string. When routing switches to the current merchant_action_url. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. anyOf[1] (Value): string. The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
