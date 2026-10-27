<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutGiftCardChallenge extends Model {
    /** @param array{'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutGiftCardChallenge')); }
    /** Shape $ (Value): string. Load this URL in an iframe on page_origin when applying a gift card returns GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you don't need to do anything. The page posts a single-use proof to your page; send it in Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and stops working when the session ends. Format: uri.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
