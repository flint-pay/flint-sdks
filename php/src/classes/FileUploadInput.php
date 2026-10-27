<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read array<array-key, string>|\stdClass $headers
 * @property-read string $method
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class FileUploadInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'headers': array<array-key, string>|\stdClass, 'method': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FileUploadInput')); }
    /** Shape $ (Value): string. When the signed upload URL expires, 15 minutes after creation. Create a new file if it expires. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Map of string. Headers to send verbatim with the upload. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When headers is omitted; use hasHeaders() or valueOrDefault().
     */
    public function getHeaders(): array|object { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** Shape $ (Value): string.  Value enum: "PUT".
     * @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): string. A signed upload target. Send the bytes with method and headers verbatim; keep the URL out of logs. Format: uri.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
