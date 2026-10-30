<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $limit_bytes
 * @property-read ?string $next_expiration_at
 * @property-read int $ready_unattached_bytes
 * @property-read int $reserved_bytes
 * @property-read string $resource
 * @property-read int $used_bytes
 * Presence-aware response; omitted optional fields return null. */
final class QuotaDetails extends Model {
    /** @param array{'limit_bytes': int, 'next_expiration_at'?: string, 'ready_unattached_bytes': int, 'reserved_bytes': int, 'resource': string, 'used_bytes': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QuotaDetails')); }
    /** Maximum bytes available for the resource in the authenticated scope. Format: int64.
     * @return int
     */
    public function getLimitBytes(): int { return $this->get('limit_bytes'); }
    public function hasLimitBytes(): bool { return $this->has('limit_bytes'); }
    /** RFC 3339 time when the next ready unattached image becomes eligible for cleanup, when known. Format: date-time.
     * @return ?string
     */
    public function getNextExpirationAt(): ?string { return $this->get('next_expiration_at'); }
    public function hasNextExpirationAt(): bool { return $this->has('next_expiration_at'); }
    /** Stored bytes held by completed images that are not attached to a resource. Format: int64.
     * @return int
     */
    public function getReadyUnattachedBytes(): int { return $this->get('ready_unattached_bytes'); }
    public function hasReadyUnattachedBytes(): bool { return $this->has('ready_unattached_bytes'); }
    /** Bytes reserved by in-progress resource mutations. Format: int64.
     * @return int
     */
    public function getReservedBytes(): int { return $this->get('reserved_bytes'); }
    public function hasReservedBytes(): bool { return $this->has('reserved_bytes'); }
    /** Stable resource name whose quota was exhausted.
     * @return string
     */
    public function getResource(): string { return $this->get('resource'); }
    public function hasResource(): bool { return $this->has('resource'); }
    /** Bytes currently stored for the resource in the authenticated scope. Format: int64.
     * @return int
     */
    public function getUsedBytes(): int { return $this->get('used_bytes'); }
    public function hasUsedBytes(): bool { return $this->has('used_bytes'); }
}
