<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $alt
 * @property-read int|null $height
 * @property-read string|null $url
 * @property-read int|null $width
 * Presence-aware input; omitted fields throw when accessed. */
final class ImagePreviousAttributesInput extends Model {
    /** @param array{'alt'?: string|null, 'height'?: int|null, 'url'?: string|null, 'width'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImagePreviousAttributesInput')); }
    /** Alternative text describing the image for accessibility. anyOf[1] (Value): string. Alternative text describing the image for accessibility. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When alt is omitted; use hasAlt() or valueOrDefault().
     */
    public function getAlt(): mixed { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Image height in pixels, when known. anyOf[1] (Value): integer. Image height in pixels, when known. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): mixed { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** URL of the image. anyOf[1] (Value): string. URL of the image. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): mixed { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Image width in pixels, when known. anyOf[1] (Value): integer. Image width in pixels, when known. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): mixed { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
