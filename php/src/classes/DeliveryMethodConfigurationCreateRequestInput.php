<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read DeliveryEligibilityExpressionInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read DeliveryEstimateRuleRequestInput|array<array-key, mixed>|\stdClass $estimate
 * @property-read string $minimum_option_lifetime_seconds
 * @property-read DeliveryMethodOriginSelectorRequestInput|array<array-key, mixed>|\stdClass $origin
 * @property-read DeliveryPricingStrategyCreateRequestInput|array<array-key, mixed>|\stdClass $pricing
 * @property-read array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object $public_details
 * @property-read list<string> $quote_input_fields
 * @property-read list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass> $recipient_requirements
 * @property-read string $selection_guarantee_seconds
 * @property-read bool|null $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodConfigurationCreateRequestInput extends Model {
    /** @param array{'buyer_instructions'?: BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass, 'charge_tax_category'?: string|null, 'eligibility'?: DeliveryEligibilityExpressionInput|array<array-key, mixed>|\stdClass, 'estimate'?: DeliveryEstimateRuleRequestInput|array<array-key, mixed>|\stdClass, 'minimum_option_lifetime_seconds'?: string, 'origin': DeliveryMethodOriginSelectorRequestInput|array<array-key, mixed>|\stdClass, 'pricing': DeliveryPricingStrategyCreateRequestInput|array<array-key, mixed>|\stdClass, 'public_details'?: array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object, 'quote_input_fields'?: list<string>, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'selection_guarantee_seconds'?: string, 'taxable'?: bool|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationCreateRequestInput')); }
    /** Shape $ (Value): {@see BuyerInstructionsConfigInput}. Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection.
     * @return BuyerInstructionsConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): mixed { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Shape $ (Value): string or null. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * @return string|null
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Shape $ (Value): {@see DeliveryEligibilityExpressionInput}. Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.
     * @return DeliveryEligibilityExpressionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): {@see DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * @return DeliveryEstimateRuleRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When estimate is omitted; use hasEstimate() or valueOrDefault().
     */
    public function getEstimate(): mixed { return $this->get('estimate'); }
    public function hasEstimate(): bool { return $this->has('estimate'); }
    /** Shape $ (Value): integer string. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. maximum: 899.
     * @return string
     * @throws SdkError When minimum_option_lifetime_seconds is omitted; use hasMinimumOptionLifetimeSeconds() or valueOrDefault().
     */
    public function getMinimumOptionLifetimeSeconds(): string { return $this->get('minimum_option_lifetime_seconds'); }
    public function hasMinimumOptionLifetimeSeconds(): bool { return $this->has('minimum_option_lifetime_seconds'); }
    /** Shape $ (Value): {@see DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list.
     * @return DeliveryMethodOriginSelectorRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): mixed { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): {@see DeliveryPricingStrategyCreateRequestInput}. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property.
     * @return DeliveryPricingStrategyCreateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing is omitted; use hasPricing() or valueOrDefault().
     */
    public function getPricing(): mixed { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
    /** Shape $ (Value): object. Buyer-visible structured details supplied by the merchant. Shape $.instructions (Optional): string. Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. Shape $.pickup_mode (Optional): string. Required for pickup methods and rejected for other method types. Value enum: "in_store", "curbside", "locker", "other". Shape $.service_level (Optional): string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand", "scheduled".
     * @return array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object
     * @throws SdkError When public_details is omitted; use hasPublicDetails() or valueOrDefault().
     */
    public function getPublicDetails(): array|object { return $this->get('public_details'); }
    public function hasPublicDetails(): bool { return $this->has('public_details'); }
    /** Shape $ (Value): Array of string. Address and coordinate fields a callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.state", "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". Shape $[] (Value): string.  Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.state", "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * @return list<string>
     * @throws SdkError When quote_input_fields is omitted; use hasQuoteInputFields() or valueOrDefault().
     */
    public function getQuoteInputFields(): array { return $this->get('quote_input_fields'); }
    public function hasQuoteInputFields(): bool { return $this->has('quote_input_fields'); }
    /** Shape $ (Value): Array of {@see DeliveryRecipientRequirementInput}. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. Shape $[] (Value): {@see DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     * @return list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** Shape $ (Value): integer string. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When selection_guarantee_seconds is omitted; use hasSelectionGuaranteeSeconds() or valueOrDefault().
     */
    public function getSelectionGuaranteeSeconds(): string { return $this->get('selection_guarantee_seconds'); }
    public function hasSelectionGuaranteeSeconds(): bool { return $this->has('selection_guarantee_seconds'); }
    /** Shape $ (Value): boolean or null. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
