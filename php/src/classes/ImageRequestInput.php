<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alt
 * @property-read string $file_id
 * @property-read string $source_reference
 * @property-read string $source_url
 * Presence-aware input; omitted fields throw when accessed. */
final class ImageRequestInput extends Model {
    /** @param array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ImageRequestInput')); }
    /** Shape $ (Value): string. Alternative text describing the image for accessibility. minLength: 1. maxLength: 512.
     * @return string
     * @throws SdkError When alt is omitted; use hasAlt() or valueOrDefault().
     */
    public function getAlt(): string { return $this->get('alt'); }
    public function hasAlt(): bool { return $this->has('alt'); }
    /** Shape $ (Value): string. The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When file_id is omitted; use hasFileId() or valueOrDefault().
     */
    public function getFileId(): string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** Shape $ (Value): string. An opaque reference for this attachment, unique within its gallery. Whitespace and case are preserved. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When source_reference is omitted; use hasSourceReference() or valueOrDefault().
     */
    public function getSourceReference(): string { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
    /** Shape $ (Value): string. A public image URL for Flint to fetch, or an untransformed canonical image.url returned by Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without another fetch. Flint doesn't download a source_url again while the image it produced is still in this field. minLength: 1. maxLength: 8192.
     * @return string
     * @throws SdkError When source_url is omitted; use hasSourceUrl() or valueOrDefault().
     */
    public function getSourceUrl(): string { return $this->get('source_url'); }
    public function hasSourceUrl(): bool { return $this->has('source_url'); }
}
