<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $url
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutGiftCardChallenge extends Model {
    /** @param array{'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutGiftCardChallenge')); }
    /** @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
