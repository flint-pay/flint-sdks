<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enable_address_autocomplete
 * @property-read bool $require_email
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkCustomerConfigInput extends Model {
    /** @param array{'enable_address_autocomplete'?: bool, 'require_email'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkCustomerConfigInput')); }
    /** @return bool
     * @throws SdkError When enable_address_autocomplete is omitted; use hasEnableAddressAutocomplete() or valueOrDefault().
     */
    public function getEnableAddressAutocomplete(): bool { return $this->get('enable_address_autocomplete'); }
    public function hasEnableAddressAutocomplete(): bool { return $this->has('enable_address_autocomplete'); }
    /** @return bool
     * @throws SdkError When require_email is omitted; use hasRequireEmail() or valueOrDefault().
     */
    public function getRequireEmail(): bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
}
