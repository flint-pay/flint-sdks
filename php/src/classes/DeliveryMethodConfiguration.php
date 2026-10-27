<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerInstructionsConfig $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read ?\stdClass $eligibility
 * @property-read DeliveryEstimateRule $estimate
 * @property-read string $minimum_option_lifetime_seconds
 * @property-read DeliveryMethodConfigurationOriginFixedLocation|\stdClass $origin
 * @property-read DeliveryMethodConfigurationPricingCalculated|DeliveryMethodConfigurationPricingCallback|DeliveryMethodConfigurationPricingCallerSupplied|DeliveryMethodConfigurationPricingFixed|DeliveryMethodConfigurationPricingRateTable|DeliveryMethodConfigurationPricingTiered|\stdClass $pricing
 * @property-read ?DeliveryMethodConfigurationPublicDetails $public_details
 * @property-read ?list<string> $quote_input_fields
 * @property-read ?list<DeliveryRecipientRequirement> $recipient_requirements
 * @property-read string $selection_guarantee_seconds
 * @property-read bool|null $taxable
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfiguration extends Model {
    /** @param array{'buyer_instructions'?: mixed, 'charge_tax_category': string|null, 'eligibility'?: mixed, 'estimate': mixed, 'minimum_option_lifetime_seconds': string, 'origin': mixed, 'pricing': mixed, 'public_details'?: object{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}, 'quote_input_fields'?: list<string>, 'recipient_requirements'?: list<mixed>, 'selection_guarantee_seconds': string, 'taxable': bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfiguration')); }
    /** Shape $ (Value): {@see BuyerInstructionsConfig}. Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection.
     * @return ?BuyerInstructionsConfig
     */
    public function getBuyerInstructions(): ?BuyerInstructionsConfig { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Shape $ (Value): string or null. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * @return string|null
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Shape $ (Value): {@see DeliveryEligibilityExpression}. Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * @return ?\stdClass
     */
    public function getEligibility(): ?\stdClass { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): {@see DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window.
     * @return DeliveryEstimateRule
     */
    public function getEstimate(): DeliveryEstimateRule { return $this->get('estimate'); }
    public function hasEstimate(): bool { return $this->has('estimate'); }
    /** Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 899.
     * @return string
     */
    public function getMinimumOptionLifetimeSeconds(): string { return $this->get('minimum_option_lifetime_seconds'); }
    public function hasMinimumOptionLifetimeSeconds(): bool { return $this->has('minimum_option_lifetime_seconds'); }
    /** Shape $ (Value): {@see DeliveryMethodOriginSelector}. Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.
     * @return DeliveryMethodConfigurationOriginFixedLocation|\stdClass
     */
    public function getOrigin(): DeliveryMethodConfigurationOriginFixedLocation|\stdClass { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): {@see DeliveryPricingStrategy}. How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.
     * @return DeliveryMethodConfigurationPricingCalculated|DeliveryMethodConfigurationPricingCallback|DeliveryMethodConfigurationPricingCallerSupplied|DeliveryMethodConfigurationPricingFixed|DeliveryMethodConfigurationPricingRateTable|DeliveryMethodConfigurationPricingTiered|\stdClass
     */
    public function getPricing(): DeliveryMethodConfigurationPricingCalculated|DeliveryMethodConfigurationPricingCallback|DeliveryMethodConfigurationPricingCallerSupplied|DeliveryMethodConfigurationPricingFixed|DeliveryMethodConfigurationPricingRateTable|DeliveryMethodConfigurationPricingTiered|\stdClass { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationPublicDetails}. Buyer-visible structured details supplied by the merchant.
     * @return ?DeliveryMethodConfigurationPublicDetails
     */
    public function getPublicDetails(): ?DeliveryMethodConfigurationPublicDetails { return $this->get('public_details'); }
    public function hasPublicDetails(): bool { return $this->has('public_details'); }
    /** Shape $ (Value): Array of string. Address and coordinate fields a callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.state", "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape $[] (Value): string.  Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.state", "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * @return ?list<string>
     */
    public function getQuoteInputFields(): ?array { return $this->get('quote_input_fields'); }
    public function hasQuoteInputFields(): bool { return $this->has('quote_input_fields'); }
    /** Shape $ (Value): Array of {@see DeliveryRecipientRequirement}. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. Shape $[] (Value): {@see DeliveryRecipientRequirement}. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     * @return ?list<DeliveryRecipientRequirement>
     */
    public function getRecipientRequirements(): ?array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getSelectionGuaranteeSeconds(): string { return $this->get('selection_guarantee_seconds'); }
    public function hasSelectionGuaranteeSeconds(): bool { return $this->has('selection_guarantee_seconds'); }
    /** Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
