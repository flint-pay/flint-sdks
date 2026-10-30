<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool}|object|null $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read mixed $eligibility
 * @property-read array{'schedule_window'?: DeliveryScheduleWindowRuleRequestInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null $estimate
 * @property-read int|null $minimum_option_lifetime_seconds
 * @property-read DeliveryMethodOriginSelectorRequestInput|array<array-key, mixed>|\stdClass $origin
 * @property-read DeliveryPricingStrategyRequestInput|array<array-key, mixed>|\stdClass $pricing
 * @property-read array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object|null $public_details
 * @property-read list<string> $quote_input_fields
 * @property-read list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass> $recipient_requirements
 * @property-read int|null $selection_guarantee_seconds
 * @property-read bool|null $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodConfigurationPatchRequestInput extends Model {
    /** @param array{'buyer_instructions'?: array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool}|object|null, 'charge_tax_category'?: string|null, 'eligibility'?: mixed, 'estimate'?: array{'schedule_window'?: DeliveryScheduleWindowRuleRequestInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null, 'minimum_option_lifetime_seconds'?: int|null, 'origin'?: DeliveryMethodOriginSelectorRequestInput|array<array-key, mixed>|\stdClass, 'pricing'?: DeliveryPricingStrategyRequestInput|array<array-key, mixed>|\stdClass, 'public_details'?: array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object|null, 'quote_input_fields'?: list<string>, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'selection_guarantee_seconds'?: int|null, 'taxable'?: bool|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPatchRequestInput')); }
    /** Controls whether checkout collects buyer instructions for this method. Null disables instruction collection. enabled (Required): boolean. Whether checkout collects buyer instructions. label (Optional): string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255. placeholder (Optional): string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500. required (Required): boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true.
     * @return array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool}|object|null
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): array|object|null { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Null uses settings.tax.default_delivery_tax_category, or, when that is unset, shipping for shipment, delivery for local_delivery, or service_fee for pickup. Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     * @return string|null
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** Conditions that decide where this method is offered. Null removes the conditions, so the method is offered everywhere the merchant serves. anyOf[1] (Value): {@see DeliveryEligibilityExpressionInput}. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. anyOf[2] (Value): null.
     * @return mixed
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. Null restores type none, when the pricing type allows it. schedule_window (Optional): {@see DeliveryScheduleWindowRuleRequestInput}. Scheduled-window estimate rule you supply for a delivery method, defined by its `availability` schedule. transit_time (Optional): {@see DeliveryTransitTimeRuleRequestInput}. Estimate rule giving a delivery method's handling time and transit time as ranges of business days. type (Required): string.  Value enum: "none", "transit_time", "schedule_window".
     * @return array{'schedule_window'?: DeliveryScheduleWindowRuleRequestInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null
     * @throws SdkError When estimate is omitted; use hasEstimate() or valueOrDefault().
     */
    public function getEstimate(): array|object|null { return $this->get('estimate'); }
    public function hasEstimate(): bool { return $this->has('estimate'); }
    /** Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Null restores 0 for fixed, tiered, or rate_table pricing. It is invalid for calculated, callback, or caller_supplied pricing. Format: int64. minimum: 0. maximum: 899.
     * @return int|null
     * @throws SdkError When minimum_option_lifetime_seconds is omitted; use hasMinimumOptionLifetimeSeconds() or valueOrDefault().
     */
    public function getMinimumOptionLifetimeSeconds(): int|null { return $this->get('minimum_option_lifetime_seconds'); }
    public function hasMinimumOptionLifetimeSeconds(): bool { return $this->has('minimum_option_lifetime_seconds'); }
    /** Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Null is invalid. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list.
     * @return DeliveryMethodOriginSelectorRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): mixed { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** How Flint calculates the delivery charge. Null is invalid. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property.
     * @return DeliveryPricingStrategyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing is omitted; use hasPricing() or valueOrDefault().
     */
    public function getPricing(): mixed { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
    /** Buyer-visible structured details supplied by the merchant. Null removes the public details; pickup methods still require pickup_mode. minProperties: 1. instructions (Optional): string. Buyer-visible instructions for this method. minLength: 1. maxLength: 2048. pickup_mode (Optional): string. Required for pickup methods and rejected for other method types. Value enum: "in_store", "curbside", "locker", "other". service_level (Optional): string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand", "scheduled".
     * @return array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object|null
     * @throws SdkError When public_details is omitted; use hasPublicDetails() or valueOrDefault().
     */
    public function getPublicDetails(): array|object|null { return $this->get('public_details'); }
    public function hasPublicDetails(): bool { return $this->has('public_details'); }
    /** Address and coordinate fields a callback method requires and is allowed to receive. Use [] to clear it. Null is invalid. maxItems: 12. uniqueItems: true. [] enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.state", "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate". [] (Value): string.  Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.state", "destination_address.postal_code", "destination_address.country", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.state", "buyer_location.postal_code", "buyer_location.country", "buyer_location.coordinate".
     * @return list<string>
     * @throws SdkError When quote_input_fields is omitted; use hasQuoteInputFields() or valueOrDefault().
     */
    public function getQuoteInputFields(): array { return $this->get('quote_input_fields'); }
    public function hasQuoteInputFields(): bool { return $this->has('quote_input_fields'); }
    /** Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. Use [] to clear it. Null is invalid. [] (Value): {@see DeliveryRecipientRequirementInput}. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.
     * @return list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Null restores 0, which uses the option expiry. Format: int64. minimum: 0.
     * @return int|null
     * @throws SdkError When selection_guarantee_seconds is omitted; use hasSelectionGuaranteeSeconds() or valueOrDefault().
     */
    public function getSelectionGuaranteeSeconds(): int|null { return $this->get('selection_guarantee_seconds'); }
    public function hasSelectionGuaranteeSeconds(): bool { return $this->has('selection_guarantee_seconds'); }
    /** Whether the delivery charge is taxable. Null follows tax.default_delivery_taxable in the merchant's settings.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
