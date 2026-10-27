<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $expires_in_seconds
 * @property-read string $refresh_expires_in_seconds
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCustomerSessionRequestInput extends Model {
    /** @param array{'customer_id': string, 'expires_in_seconds'?: string, 'refresh_expires_in_seconds'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCustomerSessionRequestInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 300. maximum: 86400.
     * @return string
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): string { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 3600. maximum: 2592000.
     * @return string
     * @throws SdkError When refresh_expires_in_seconds is omitted; use hasRefreshExpiresInSeconds() or valueOrDefault().
     */
    public function getRefreshExpiresInSeconds(): string { return $this->get('refresh_expires_in_seconds'); }
    public function hasRefreshExpiresInSeconds(): bool { return $this->has('refresh_expires_in_seconds'); }
}
