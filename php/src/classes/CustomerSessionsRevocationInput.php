<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read int $revoked_count
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionsRevocationInput extends Model {
    /** @param array{'customer_id': string, 'revoked_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsRevocationInput')); }
    /** ID of the customer whose sessions were revoked. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Number of sessions this call revoked. Sessions that were already revoked are not counted. Format: int64.
     * @return int
     * @throws SdkError When revoked_count is omitted; use hasRevokedCount() or valueOrDefault().
     */
    public function getRevokedCount(): int { return $this->get('revoked_count'); }
    public function hasRevokedCount(): bool { return $this->has('revoked_count'); }
}
