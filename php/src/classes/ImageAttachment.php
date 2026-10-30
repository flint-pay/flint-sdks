<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $alt
 * @property-read ?string $file_id
 * @property-read int $height
 * @property-read ?string $source_reference
 * @property-read string $url
 * @property-read int $width
 * Presence-aware response; omitted optional fields return null. */
final class ImageAttachment extends Model {
    /** @param array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageAttachment')); }
    /** Alternative text describing the image for accessibility.
     * @return ?string
     */
    public function getAlt(): ?string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Identifier of the file attached as this image.
     * @return ?string
     */
    public function getFileId(): ?string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** Image height in pixels, when known. Format: int32.
     * @return int
     */
    public function getHeight(): int { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Caller-owned reference identifying this attachment within its gallery. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getSourceReference(): ?string { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
    /** URL of the image.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Image width in pixels, when known. Format: int32.
     * @return int
     */
    public function getWidth(): int { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
