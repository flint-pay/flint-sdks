<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $merchant_signup_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupsGetInput extends Model {
    /** @param array{'merchant_signup_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupsGetInput')); }
    /** ID of the merchant signup. Example: "msu_01KEZF7C00SRGYRMBPKRKW8V9J".
     * @return string
     * @throws SdkError When merchant_signup_id is omitted; use hasMerchantSignupId() or valueOrDefault().
     */
    public function getMerchantSignupId(): string { return $this->get('merchant_signup_id'); }
    public function hasMerchantSignupId(): bool { return $this->has('merchant_signup_id'); }
}
