<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $revoked_count
 * Presence-aware response; omitted optional fields return null. */
final class CustomerSessionsRevocation extends Model {
    /** @param array{'customer_id': string, 'revoked_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsRevocation')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getRevokedCount(): string { return $this->get('revoked_count'); }
    public function hasRevokedCount(): bool { return $this->has('revoked_count'); }
}
