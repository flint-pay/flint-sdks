<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $content_type
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $failure_code
 * @property-read string $file_id
 * @property-read int $height
 * @property-read string $purpose
 * @property-read string $size_bytes
 * @property-read string $status
 * @property-read FileUploadInput|array<array-key, mixed>|\stdClass $upload
 * @property-read string $url
 * @property-read int $width
 * Presence-aware input; omitted fields throw when accessed. */
final class FileInput extends Model {
    /** @param array{'content_type': string, 'created_at': string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'failure_code'?: string, 'file_id': string, 'height'?: int, 'purpose': string, 'size_bytes': string, 'status': string, 'upload'?: FileUploadInput|array<array-key, mixed>|\stdClass, 'url'?: string, 'width'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FileInput')); }
    /** Shape $ (Value): string. The stored image media type when ready; the declared upload media type otherwise. Value enum: "image/jpeg", "image/png", "image/webp".
     * @return string
     * @throws SdkError When content_type is omitted; use hasContentType() or valueOrDefault().
     */
    public function getContentType(): string { return $this->get('content_type'); }
    public function hasContentType(): bool { return $this->has('content_type'); }
    /** Shape $ (Value): string. When the upload was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. When this file expires if it stays in its current status. While awaiting_upload, equals upload.expires_at. While ready and unattached, 24 hours after processing or 7 days after its last detachment. Omitted while attached and in every other status. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. A safe failure category, present only when failed. Unknown processing causes use processing_failed. Value enum: "image_unsupported", "image_too_large", "processing_failed".
     * @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Shape $ (Value): string. The file's stable Flint ID. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When file_id is omitted; use hasFileId() or valueOrDefault().
     */
    public function getFileId(): string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** Shape $ (Value): integer. The stored image height in pixels, present only when ready. Format: int32.
     * @return int
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): int { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** Shape $ (Value): string.  Value enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo", "merchant_icon".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Shape $ (Value): integer string. The stored image size when ready; the declared upload size otherwise. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When size_bytes is omitted; use hasSizeBytes() or valueOrDefault().
     */
    public function getSizeBytes(): string { return $this->get('size_bytes'); }
    public function hasSizeBytes(): bool { return $this->has('size_bytes'); }
    /** Shape $ (Value): string.  Value enum: "awaiting_upload", "processing", "ready", "failed", "expired".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see FileUploadInput}. Present only in the create response while awaiting_upload. GET never returns upload credentials. PUT bytes before upload.expires_at, then complete the file. The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL expires.
     * @return FileUploadInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When upload is omitted; use hasUpload() or valueOrDefault().
     */
    public function getUpload(): mixed { return $this->get('upload'); }
    public function hasUpload(): bool { return $this->has('upload'); }
    /** Shape $ (Value): string. The canonical image URL, present when ready. Attach the file with images[].file_id, or copy this URL into source_url on another resource. Format: uri.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shape $ (Value): integer. The stored image width in pixels, present only when ready. Format: int32.
     * @return int
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): int { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
