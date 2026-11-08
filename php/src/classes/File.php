<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $content_type
 * @property-read string $created_at
 * @property-read ?string $expires_at
 * @property-read ?string $failure_code
 * @property-read string $file_id
 * @property-read ?int $height
 * @property-read string $purpose
 * @property-read int $size_bytes
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read ?FileUpload $upload
 * @property-read ?string $url
 * @property-read ?int $width
 * Presence-aware response; omitted optional fields return null. */
final class File extends Model {
    /** @param array{'content_type': string, 'created_at': string, 'expires_at'?: string, 'failure_code'?: string, 'file_id': string, 'height'?: int, 'purpose': string, 'size_bytes': int, 'status': string, 'supported_actions': list<string>, 'upload'?: mixed, 'url'?: string, 'width'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('File')); }
    /** The stored image media type when ready; the declared upload media type otherwise. Value enum: "image/jpeg", "image/png", "image/webp".
     * @return string
     */
    public function getContentType(): string { return $this->get('content_type'); }
    public function hasContentType(): bool { return $this->has('content_type'); }
    /** When the upload was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When this file expires if it stays in its current status. While awaiting_upload, equals upload.expires_at. While ready and unattached, 24 hours after processing or 7 days after its last detachment. Omitted while attached and in every other status. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** A safe failure category, present only when failed. Unknown processing causes use processing_failed. Value enum: "image_unsupported", "image_too_large", "processing_failed".
     * @return ?string
     */
    public function getFailureCode(): ?string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** The file's stable Flint ID. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getFileId(): string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** The stored image height in pixels, present only when ready. Format: int32.
     * @return ?int
     */
    public function getHeight(): ?int { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** What the image is used for. Set when the file is created. Value enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo", "merchant_icon".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** The stored image size when ready; the declared upload size otherwise. Format: int64.
     * @return int
     */
    public function getSizeBytes(): int { return $this->get('size_bytes'); }
    public function hasSizeBytes(): bool { return $this->has('size_bytes'); }
    /** Where the file is in its lifecycle. Only a `ready` file can be attached. Value enum: "awaiting_upload", "processing", "ready", "failed", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. complete is offered while awaiting_upload or processing and remains accepted for completed files, returning the completed file. It can remain available after an attachment deadline expires until Flint removes the stored file. An in-progress completion can still return a transient refusal. [] enum: "complete". [] (Value): string.  Value enum: "complete".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Present only in the create response while awaiting_upload. GET never returns upload credentials. PUT bytes before upload.expires_at, then complete the file. The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL expires.
     * @return ?FileUpload
     */
    public function getUpload(): ?FileUpload { return $this->get('upload'); }
    public function hasUpload(): bool { return $this->has('upload'); }
    /** The canonical image URL, present when ready. Attach the file with images[].file_id, or copy this URL into source_url on another resource. Format: uri.
     * @return ?string
     */
    public function getUrl(): ?string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** The stored image width in pixels, present only when ready. Format: int32.
     * @return ?int
     */
    public function getWidth(): ?int { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
