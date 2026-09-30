<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerInstructionsConfig $buyer_instructions
 * @property-read string $charge_tax_category
 * @property-read \stdClass $eligibility
 * @property-read DeliveryEstimateRule $estimate
 * @property-read string $minimum_option_lifetime_seconds
 * @property-read bool $offer_windows
 * @property-read DeliveryMethodConfigurationOriginFixedLocation|\stdClass $origin
 * @property-read DeliveryMethodConfigurationPricingCalculated|DeliveryMethodConfigurationPricingCallback|DeliveryMethodConfigurationPricingCallerSupplied|DeliveryMethodConfigurationPricingFixed|DeliveryMethodConfigurationPricingRateTable|DeliveryMethodConfigurationPricingTiered|\stdClass $pricing
 * @property-read DeliveryMethodConfigurationPublicDetails $public_details
 * @property-read list<string> $quote_input_fields
 * @property-read list<DeliveryRecipientRequirement> $recipient_requirements
 * @property-read string $selection_guarantee_seconds
 * @property-read bool|null $taxable
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryMethodConfiguration extends Model {
    /** @param array{'buyer_instructions'?: object{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool}, 'charge_tax_category': string, 'eligibility'?: \stdClass, 'estimate': object{'schedule_window'?: mixed, 'transit_time'?: mixed, 'type': string}, 'minimum_option_lifetime_seconds': string, 'offer_windows': bool, 'origin': \stdClass, 'pricing': \stdClass, 'public_details'?: object{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}, 'quote_input_fields'?: list<string>, 'recipient_requirements'?: list<mixed>, 'selection_guarantee_seconds': string, 'taxable'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfiguration')); }
    /** @return BuyerInstructionsConfig
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): BuyerInstructionsConfig { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** @return string
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** @return \stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): \stdClass { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** @return DeliveryEstimateRule
     * @throws SdkError When estimate is omitted; use hasEstimate() or valueOrDefault().
     */
    public function getEstimate(): DeliveryEstimateRule { return $this->get('estimate'); }
    public function hasEstimate(): bool { return $this->has('estimate'); }
    /** @return string
     * @throws SdkError When minimum_option_lifetime_seconds is omitted; use hasMinimumOptionLifetimeSeconds() or valueOrDefault().
     */
    public function getMinimumOptionLifetimeSeconds(): string { return $this->get('minimum_option_lifetime_seconds'); }
    public function hasMinimumOptionLifetimeSeconds(): bool { return $this->has('minimum_option_lifetime_seconds'); }
    /** @return bool
     * @throws SdkError When offer_windows is omitted; use hasOfferWindows() or valueOrDefault().
     */
    public function getOfferWindows(): bool { return $this->get('offer_windows'); }
    public function hasOfferWindows(): bool { return $this->has('offer_windows'); }
    /** @return DeliveryMethodConfigurationOriginFixedLocation|\stdClass
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): DeliveryMethodConfigurationOriginFixedLocation|\stdClass { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** @return DeliveryMethodConfigurationPricingCalculated|DeliveryMethodConfigurationPricingCallback|DeliveryMethodConfigurationPricingCallerSupplied|DeliveryMethodConfigurationPricingFixed|DeliveryMethodConfigurationPricingRateTable|DeliveryMethodConfigurationPricingTiered|\stdClass
     * @throws SdkError When pricing is omitted; use hasPricing() or valueOrDefault().
     */
    public function getPricing(): DeliveryMethodConfigurationPricingCalculated|DeliveryMethodConfigurationPricingCallback|DeliveryMethodConfigurationPricingCallerSupplied|DeliveryMethodConfigurationPricingFixed|DeliveryMethodConfigurationPricingRateTable|DeliveryMethodConfigurationPricingTiered|\stdClass { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
    /** @return DeliveryMethodConfigurationPublicDetails
     * @throws SdkError When public_details is omitted; use hasPublicDetails() or valueOrDefault().
     */
    public function getPublicDetails(): DeliveryMethodConfigurationPublicDetails { return $this->get('public_details'); }
    public function hasPublicDetails(): bool { return $this->has('public_details'); }
    /** @return list<string>
     * @throws SdkError When quote_input_fields is omitted; use hasQuoteInputFields() or valueOrDefault().
     */
    public function getQuoteInputFields(): array { return $this->get('quote_input_fields'); }
    public function hasQuoteInputFields(): bool { return $this->has('quote_input_fields'); }
    /** @return list<DeliveryRecipientRequirement>
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** @return string
     * @throws SdkError When selection_guarantee_seconds is omitted; use hasSelectionGuaranteeSeconds() or valueOrDefault().
     */
    public function getSelectionGuaranteeSeconds(): string { return $this->get('selection_guarantee_seconds'); }
    public function hasSelectionGuaranteeSeconds(): bool { return $this->has('selection_guarantee_seconds'); }
    /** @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
