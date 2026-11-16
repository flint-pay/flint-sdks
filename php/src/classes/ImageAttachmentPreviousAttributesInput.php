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
 * Presence-aware input; omitted fields throw when accessed. */
final class ImageAttachmentPreviousAttributesInput extends Model {
    /** @param array{'alt'?: string|null, 'file_id'?: string|null, 'height'?: int|null, 'source_reference'?: string|null, 'url'?: string|null, 'width'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageAttachmentPreviousAttributesInput')); }
    /** Alternative text describing the image for accessibility. anyOf[1] (Value): string. Alternative text describing the image for accessibility. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When alt is omitted; use hasAlt() or valueOrDefault().
     */
    public function getAlt(): mixed { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Identifier of the file attached as this image. anyOf[1] (Value): string. Identifier of the file attached as this image. Example: "file_01KEZF7C00BZ179303GY9R0P03". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When file_id is omitted; use hasFileId() or valueOrDefault().
     */
    public function getFileId(): mixed { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** Image height in pixels, when known. anyOf[1] (Value): integer. Image height in pixels, when known. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): mixed { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Caller-owned reference identifying this attachment within its gallery. anyOf[1] (Value): string. Caller-owned reference identifying this attachment within its gallery. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source_reference is omitted; use hasSourceReference() or valueOrDefault().
     */
    public function getSourceReference(): mixed { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
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
