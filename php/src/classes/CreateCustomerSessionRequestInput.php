<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_url_expires_in_seconds
 * @property-read string $customer_id
 * @property-read string $expires_in_seconds
 * @property-read string $refresh_expires_in_seconds
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCustomerSessionRequestInput extends Model {
    /** @param array{'account_url_expires_in_seconds'?: string, 'customer_id': string, 'expires_in_seconds'?: string, 'refresh_expires_in_seconds'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCustomerSessionRequestInput')); }
    /** @return string
     * @throws SdkError When account_url_expires_in_seconds is omitted; use hasAccountUrlExpiresInSeconds() or valueOrDefault().
     */
    public function getAccountUrlExpiresInSeconds(): string { return $this->get('account_url_expires_in_seconds'); }
    public function hasAccountUrlExpiresInSeconds(): bool { return $this->has('account_url_expires_in_seconds'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): string { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** @return string
     * @throws SdkError When refresh_expires_in_seconds is omitted; use hasRefreshExpiresInSeconds() or valueOrDefault().
     */
    public function getRefreshExpiresInSeconds(): string { return $this->get('refresh_expires_in_seconds'); }
    public function hasRefreshExpiresInSeconds(): bool { return $this->has('refresh_expires_in_seconds'); }
}
