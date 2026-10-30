<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read array<array-key, string> $headers
 * @property-read string $method
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class FileUpload extends Model {
    /** @param array{'expires_at': string, 'headers': \stdClass, 'method': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FileUpload')); }
    /** When the signed upload URL expires, 15 minutes after creation. Create a new file if it expires. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Headers to send verbatim with the upload. * (Value): string.
     * @return array<array-key, string>
     */
    public function getHeaders(): array { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** Value enum: "PUT".
     * @return string
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** A signed upload target. Send the bytes with method and headers verbatim; keep the URL out of logs. Format: uri.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
