<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $alt
 * @property-read int|null $height
 * @property-read string|null $url
 * @property-read int|null $width
 * Presence-aware response; omitted optional fields return null. */
final class ImagePreviousAttributes extends Model {
    /** @param array{'alt'?: mixed, 'height'?: mixed, 'url'?: mixed, 'width'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImagePreviousAttributes')); }
    /** Alternative text describing the image for accessibility. anyOf[1] (Value): string. Alternative text describing the image for accessibility. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAlt(): string|null { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Image height in pixels, when known. anyOf[1] (Value): integer. Image height in pixels, when known. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getHeight(): int|null { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** URL of the image. anyOf[1] (Value): string. URL of the image. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Image width in pixels, when known. anyOf[1] (Value): integer. Image width in pixels, when known. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getWidth(): int|null { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
