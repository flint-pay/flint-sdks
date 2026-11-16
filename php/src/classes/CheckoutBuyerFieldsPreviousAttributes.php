<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $address_autocomplete_enabled
 * @property-read bool|null $require_billing_address
 * @property-read bool|null $require_email
 * @property-read bool|null $require_phone
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutBuyerFieldsPreviousAttributes extends Model {
    /** @param array{'address_autocomplete_enabled'?: mixed, 'require_billing_address'?: mixed, 'require_email'?: mixed, 'require_phone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerFieldsPreviousAttributes')); }
    /** Whether checkout offers address suggestions while the buyer enters an address. anyOf[1] (Value): boolean. Whether checkout offers address suggestions while the buyer enters an address. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAddressAutocompleteEnabled(): bool|null { return $this->get('address_autocomplete_enabled'); }
    public function hasAddressAutocompleteEnabled(): bool { return $this->has('address_autocomplete_enabled'); }
    /** Whether checkout requires the buyer's billing address. anyOf[1] (Value): boolean. Whether checkout requires the buyer's billing address. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequireBillingAddress(): bool|null { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. anyOf[1] (Value): boolean. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequireEmail(): bool|null { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** Whether checkout requires the buyer's phone number. anyOf[1] (Value): boolean. Whether checkout requires the buyer's phone number. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequirePhone(): bool|null { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
}
