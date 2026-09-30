<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $limit_bytes
 * @property-read string|\DateTimeInterface $next_expiration_at
 * @property-read string $ready_unattached_bytes
 * @property-read string $reserved_bytes
 * @property-read string $resource
 * @property-read string $used_bytes
 * Presence-aware input; omitted fields throw when accessed. */
final class QuotaDetailsInput extends Model {
    /** @param array{'limit_bytes': string, 'next_expiration_at'?: string|\DateTimeInterface, 'ready_unattached_bytes': string, 'reserved_bytes': string, 'resource': string, 'used_bytes': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('QuotaDetailsInput')); }
    /** @return string
     * @throws SdkError When limit_bytes is omitted; use hasLimitBytes() or valueOrDefault().
     */
    public function getLimitBytes(): string { return $this->get('limit_bytes'); }
    public function hasLimitBytes(): bool { return $this->has('limit_bytes'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When next_expiration_at is omitted; use hasNextExpirationAt() or valueOrDefault().
     */
    public function getNextExpirationAt(): string|\DateTimeInterface { return $this->get('next_expiration_at'); }
    public function hasNextExpirationAt(): bool { return $this->has('next_expiration_at'); }
    /** @return string
     * @throws SdkError When ready_unattached_bytes is omitted; use hasReadyUnattachedBytes() or valueOrDefault().
     */
    public function getReadyUnattachedBytes(): string { return $this->get('ready_unattached_bytes'); }
    public function hasReadyUnattachedBytes(): bool { return $this->has('ready_unattached_bytes'); }
    /** @return string
     * @throws SdkError When reserved_bytes is omitted; use hasReservedBytes() or valueOrDefault().
     */
    public function getReservedBytes(): string { return $this->get('reserved_bytes'); }
    public function hasReservedBytes(): bool { return $this->has('reserved_bytes'); }
    /** @return string
     * @throws SdkError When resource is omitted; use hasResource() or valueOrDefault().
     */
    public function getResource(): string { return $this->get('resource'); }
    public function hasResource(): bool { return $this->has('resource'); }
    /** @return string
     * @throws SdkError When used_bytes is omitted; use hasUsedBytes() or valueOrDefault().
     */
    public function getUsedBytes(): string { return $this->get('used_bytes'); }
    public function hasUsedBytes(): bool { return $this->has('used_bytes'); }
}
