<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read int $expires_in_seconds
 * @property-read int $refresh_expires_in_seconds
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionsCreateParams extends Model {
    /** @param array{'customer_id': string, 'expires_in_seconds'?: int, 'refresh_expires_in_seconds'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsCreateParams')); }
    /** minLength: 1. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Format: int64. minimum: 300. maximum: 86400.
     * @return int
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): int { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Format: int64. minimum: 3600. maximum: 2592000.
     * @return int
     * @throws SdkError When refresh_expires_in_seconds is omitted; use hasRefreshExpiresInSeconds() or valueOrDefault().
     */
    public function getRefreshExpiresInSeconds(): int { return $this->get('refresh_expires_in_seconds'); }
    public function hasRefreshExpiresInSeconds(): bool { return $this->has('refresh_expires_in_seconds'); }
}
