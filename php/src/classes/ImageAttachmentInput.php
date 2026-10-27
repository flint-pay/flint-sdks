<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alt
 * @property-read string $file_id
 * @property-read int $height
 * @property-read string $source_reference
 * @property-read string $url
 * @property-read int $width
 * Presence-aware input; omitted fields throw when accessed. */
final class ImageAttachmentInput extends Model {
    /** @param array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageAttachmentInput')); }
    /** Shape $ (Value): string. Alternative text describing the image for accessibility.
     * @return string
     * @throws SdkError When alt is omitted; use hasAlt() or valueOrDefault().
     */
    public function getAlt(): string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Shape $ (Value): string. Identifier of the file attached as this image.
     * @return string
     * @throws SdkError When file_id is omitted; use hasFileId() or valueOrDefault().
     */
    public function getFileId(): string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** Shape $ (Value): integer. Image height in pixels, when known. Format: int32.
     * @return int
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): int { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Shape $ (Value): string. Caller-owned reference identifying this attachment within its gallery. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When source_reference is omitted; use hasSourceReference() or valueOrDefault().
     */
    public function getSourceReference(): string { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
    /** Shape $ (Value): string. URL of the image.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shape $ (Value): integer. Image width in pixels, when known. Format: int32.
     * @return int
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): int { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
