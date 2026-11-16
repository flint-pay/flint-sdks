<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $address_autocomplete_enabled
 * @property-read bool|null $require_billing_address
 * @property-read bool|null $require_email
 * @property-read bool|null $require_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutBuyerFieldsPreviousAttributesInput extends Model {
    /** @param array{'address_autocomplete_enabled'?: bool|null, 'require_billing_address'?: bool|null, 'require_email'?: bool|null, 'require_phone'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerFieldsPreviousAttributesInput')); }
    /** Whether checkout offers address suggestions while the buyer enters an address. anyOf[1] (Value): boolean. Whether checkout offers address suggestions while the buyer enters an address. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When address_autocomplete_enabled is omitted; use hasAddressAutocompleteEnabled() or valueOrDefault().
     */
    public function getAddressAutocompleteEnabled(): mixed { return $this->get('address_autocomplete_enabled'); }
    public function hasAddressAutocompleteEnabled(): bool { return $this->has('address_autocomplete_enabled'); }
    /** Whether checkout requires the buyer's billing address. anyOf[1] (Value): boolean. Whether checkout requires the buyer's billing address. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When require_billing_address is omitted; use hasRequireBillingAddress() or valueOrDefault().
     */
    public function getRequireBillingAddress(): mixed { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. anyOf[1] (Value): boolean. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When require_email is omitted; use hasRequireEmail() or valueOrDefault().
     */
    public function getRequireEmail(): mixed { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** Whether checkout requires the buyer's phone number. anyOf[1] (Value): boolean. Whether checkout requires the buyer's phone number. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When require_phone is omitted; use hasRequirePhone() or valueOrDefault().
     */
    public function getRequirePhone(): mixed { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
}
