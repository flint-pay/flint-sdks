<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $address_autocomplete_enabled
 * @property-read bool $require_billing_address
 * @property-read bool $require_email
 * @property-read bool $require_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutBuyerFieldsInput extends Model {
    /** @param array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerFieldsInput')); }
    /** Shape $ (Value): boolean. Whether checkout offers address suggestions while the buyer enters an address.
     * @return bool
     * @throws SdkError When address_autocomplete_enabled is omitted; use hasAddressAutocompleteEnabled() or valueOrDefault().
     */
    public function getAddressAutocompleteEnabled(): bool { return $this->get('address_autocomplete_enabled'); }
    public function hasAddressAutocompleteEnabled(): bool { return $this->has('address_autocomplete_enabled'); }
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's billing address.
     * @return bool
     * @throws SdkError When require_billing_address is omitted; use hasRequireBillingAddress() or valueOrDefault().
     */
    public function getRequireBillingAddress(): bool { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan.
     * @return bool
     * @throws SdkError When require_email is omitted; use hasRequireEmail() or valueOrDefault().
     */
    public function getRequireEmail(): bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** Shape $ (Value): boolean. Whether checkout requires the buyer's phone number.
     * @return bool
     * @throws SdkError When require_phone is omitted; use hasRequirePhone() or valueOrDefault().
     */
    public function getRequirePhone(): bool { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
}
