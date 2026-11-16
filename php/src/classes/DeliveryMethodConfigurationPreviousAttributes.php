<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerInstructionsConfigPreviousAttributes|null $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read \stdClass|null $eligibility
 * @property-read DeliveryEstimateRulePreviousAttributes|null $estimate
 * @property-read int|null $minimum_option_lifetime_seconds
 * @property-read \stdClass|null $origin
 * @property-read \stdClass|null $pricing
 * @property-read DeliveryMethodConfigurationPreviousAttributesPublicDetails|null $public_details
 * @property-read list<string>|null $quote_input_fields
 * @property-read list<DeliveryRecipientRequirementPreviousAttributes>|null $recipient_requirements
 * @property-read int|null $selection_guarantee_seconds
 * @property-read bool|null $taxable
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPreviousAttributes extends Model {
    /** @param array{'buyer_instructions'?: mixed, 'charge_tax_category'?: mixed, 'eligibility'?: mixed, 'estimate'?: mixed, 'minimum_option_lifetime_seconds'?: mixed, 'origin'?: mixed, 'pricing'?: mixed, 'public_details'?: mixed, 'quote_input_fields'?: mixed, 'recipient_requirements'?: mixed, 'selection_guarantee_seconds'?: mixed, 'taxable'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPreviousAttributes')); }
    /** Controls whether checkout collects buyer instructions for this method. anyOf[1] (Value): {@see BuyerInstructionsConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return BuyerInstructionsConfigPreviousAttributes|null
     */
    public function getBuyerInstructions(): BuyerInstructionsConfigPreviousAttributes|null { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. anyOf[1] (Value): string. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. anyOf[1] (Value): {@see DeliveryEligibilityExpressionPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getEligibility(): \stdClass|null { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. anyOf[1] (Value): {@see DeliveryEstimateRulePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryEstimateRulePreviousAttributes|null
     */
    public function getEstimate(): DeliveryEstimateRulePreviousAttributes|null { return $this->get('estimate'); }
    public function hasEstimate(): bool { return $this->has('estimate'); }
    /** Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. anyOf[1] (Value): integer. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinimumOptionLifetimeSeconds(): int|null { return $this->get('minimum_option_lifetime_seconds'); }
    public function hasMinimumOptionLifetimeSeconds(): bool { return $this->has('minimum_option_lifetime_seconds'); }
    /** Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. anyOf[1] (Value): {@see DeliveryMethodOriginSelectorPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getOrigin(): \stdClass|null { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** How Flint calculates the delivery charge. anyOf[1] (Value): {@see DeliveryPricingStrategyPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getPricing(): \stdClass|null { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
    /** Buyer-visible structured details supplied by the merchant. anyOf[1] (Value): {@see DeliveryMethodConfigurationPreviousAttributesPublicDetails}. anyOf[2] (Value): null.
     * @return DeliveryMethodConfigurationPreviousAttributesPublicDetails|null
     */
    public function getPublicDetails(): DeliveryMethodConfigurationPreviousAttributesPublicDetails|null { return $this->get('public_details'); }
    public function hasPublicDetails(): bool { return $this->has('public_details'); }
    /** Address and coordinate fields a callback method requires and is allowed to receive. [] enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.address.country", "buyer_location.coordinate". anyOf[1] (Value): Array of string. Address and coordinate fields a callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.address.country", "buyer_location.coordinate". anyOf[1][] (Value): string. Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.address.country", "buyer_location.coordinate". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getQuoteInputFields(): array|null { return $this->get('quote_input_fields'); }
    public function hasQuoteInputFields(): bool { return $this->has('quote_input_fields'); }
    /** Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. anyOf[1] (Value): Array of {@see DeliveryRecipientRequirementPreviousAttributes}. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. anyOf[1][] (Value): {@see DeliveryRecipientRequirementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryRecipientRequirementPreviousAttributes>|null
     */
    public function getRecipientRequirements(): array|null { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. anyOf[1] (Value): integer. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getSelectionGuaranteeSeconds(): int|null { return $this->get('selection_guarantee_seconds'); }
    public function hasSelectionGuaranteeSeconds(): bool { return $this->has('selection_guarantee_seconds'); }
    /** Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. anyOf[1] (Value): boolean. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
