<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alt
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class ImageReferenceRequestInput extends Model {
    /** @param array{'alt'?: string, 'url': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageReferenceRequestInput')); }
    /** Shape $ (Value): string. Alternative text describing the image for accessibility. minLength: 1.
     * @return string
     * @throws SdkError When alt is omitted; use hasAlt() or valueOrDefault().
     */
    public function getAlt(): string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Shape $ (Value): string. URL of the image. minLength: 1.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
