<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $launch_token
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionRefreshRequestInput extends Model {
    /** @param array{'launch_token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionRefreshRequestInput')); }
    /** @return string
     * @throws SdkError When launch_token is omitted; use hasLaunchToken() or valueOrDefault().
     */
    public function getLaunchToken(): string { return $this->get('launch_token'); }
    public function hasLaunchToken(): bool { return $this->has('launch_token'); }
}
