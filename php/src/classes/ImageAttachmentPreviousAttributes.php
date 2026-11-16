<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $alt
 * @property-read string|null $file_id
 * @property-read int|null $height
 * @property-read string|null $source_reference
 * @property-read string|null $url
 * @property-read int|null $width
 * Presence-aware response; omitted optional fields return null. */
final class ImageAttachmentPreviousAttributes extends Model {
    /** @param array{'alt'?: mixed, 'file_id'?: mixed, 'height'?: mixed, 'source_reference'?: mixed, 'url'?: mixed, 'width'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageAttachmentPreviousAttributes')); }
    /** Alternative text describing the image for accessibility. anyOf[1] (Value): string. Alternative text describing the image for accessibility. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAlt(): string|null { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Identifier of the file attached as this image. anyOf[1] (Value): string. Identifier of the file attached as this image. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFileId(): string|null { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** Image height in pixels, when known. anyOf[1] (Value): integer. Image height in pixels, when known. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getHeight(): int|null { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Caller-owned reference identifying this attachment within its gallery. anyOf[1] (Value): string. Caller-owned reference identifying this attachment within its gallery. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceReference(): string|null { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
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
