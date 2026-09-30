<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $refresh_token
 * Presence-aware input; omitted fields throw when accessed. */
final class RefreshCustomerSessionRequestInput extends Model {
    /** @param array{'refresh_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefreshCustomerSessionRequestInput')); }
    /** @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
}
