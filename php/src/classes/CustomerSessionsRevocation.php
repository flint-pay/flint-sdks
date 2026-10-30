<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read int $revoked_count
 * Presence-aware response; omitted optional fields return null. */
final class CustomerSessionsRevocation extends Model {
    /** @param array{'customer_id': string, 'revoked_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsRevocation')); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Format: int64.
     * @return int
     */
    public function getRevokedCount(): int { return $this->get('revoked_count'); }
    public function hasRevokedCount(): bool { return $this->has('revoked_count'); }
}
