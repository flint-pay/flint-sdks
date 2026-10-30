<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $address_autocomplete_enabled
 * @property-read ?bool $require_billing_address
 * @property-read ?bool $require_email
 * @property-read ?bool $require_phone
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutBuyerFields extends Model {
    /** @param array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBuyerFields')); }
    /** Whether checkout offers address suggestions while the buyer enters an address.
     * @return ?bool
     */
    public function getAddressAutocompleteEnabled(): ?bool { return $this->get('address_autocomplete_enabled'); }
    public function hasAddressAutocompleteEnabled(): bool { return $this->has('address_autocomplete_enabled'); }
    /** Whether checkout requires the buyer's billing address.
     * @return ?bool
     */
    public function getRequireBillingAddress(): ?bool { return $this->get('require_billing_address'); }
    public function hasRequireBillingAddress(): bool { return $this->has('require_billing_address'); }
    /** Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan.
     * @return ?bool
     */
    public function getRequireEmail(): ?bool { return $this->get('require_email'); }
    public function hasRequireEmail(): bool { return $this->has('require_email'); }
    /** Whether checkout requires the buyer's phone number.
     * @return ?bool
     */
    public function getRequirePhone(): ?bool { return $this->get('require_phone'); }
    public function hasRequirePhone(): bool { return $this->has('require_phone'); }
}
