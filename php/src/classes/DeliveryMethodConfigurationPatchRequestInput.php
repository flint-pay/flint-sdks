<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool, ...}|object|null $buyer_instructions
 * @property-read string|null $charge_tax_category
 * @property-read array{'all': mixed, ...}|object|array{'any': mixed, ...}|object|array{'not': mixed, ...}|object|array{'zone': mixed, ...}|object|array{'country': mixed, ...}|object|array{'state': mixed, ...}|object|array{'postal_code': mixed, ...}|object|array{'radius': mixed, ...}|object|array{'window_time': mixed, ...}|object|array{'customer_group': mixed, ...}|object|array{'customer_verified': mixed, ...}|object|array{'customer_has_email': mixed, ...}|object|array{'customer_has_phone': mixed, ...}|object|null $eligibility
 * @property-read array{'schedule_window'?: DeliveryScheduleWindowRuleRequestInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null $estimate
 * @property-read string|null $minimum_option_lifetime_seconds
 * @property-read mixed $origin
 * @property-read mixed $pricing
 * @property-read array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object|null $public_details
 * @property-read list<string> $quote_input_fields
 * @property-read list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass> $recipient_requirements
 * @property-read string|null $selection_guarantee_seconds
 * @property-read bool|null $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodConfigurationPatchRequestInput extends Model {
    /** @param array{'buyer_instructions'?: array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool, ...}|object|null, 'charge_tax_category'?: string|null, 'eligibility'?: array{'all': mixed, ...}|object|array{'any': mixed, ...}|object|array{'not': mixed, ...}|object|array{'zone': mixed, ...}|object|array{'country': mixed, ...}|object|array{'state': mixed, ...}|object|array{'postal_code': mixed, ...}|object|array{'radius': mixed, ...}|object|array{'window_time': mixed, ...}|object|array{'customer_group': mixed, ...}|object|array{'customer_verified': mixed, ...}|object|array{'customer_has_email': mixed, ...}|object|array{'customer_has_phone': mixed, ...}|object|null, 'estimate'?: array{'schedule_window'?: DeliveryScheduleWindowRuleRequestInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null, 'minimum_option_lifetime_seconds'?: string|null, 'origin'?: mixed, 'pricing'?: mixed, 'public_details'?: array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object|null, 'quote_input_fields'?: list<string>, 'recipient_requirements'?: list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>, 'selection_guarantee_seconds'?: string|null, 'taxable'?: bool|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPatchRequestInput')); }
    /** @return array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool, ...}|object|null
     * @throws SdkError When buyer_instructions is omitted; use hasBuyerInstructions() or valueOrDefault().
     */
    public function getBuyerInstructions(): array|object|null { return $this->get('buyer_instructions'); }
    public function hasBuyerInstructions(): bool { return $this->has('buyer_instructions'); }
    /** @return string|null
     * @throws SdkError When charge_tax_category is omitted; use hasChargeTaxCategory() or valueOrDefault().
     */
    public function getChargeTaxCategory(): string|null { return $this->get('charge_tax_category'); }
    public function hasChargeTaxCategory(): bool { return $this->has('charge_tax_category'); }
    /** @return array{'all': mixed, ...}|object|array{'any': mixed, ...}|object|array{'not': mixed, ...}|object|array{'zone': mixed, ...}|object|array{'country': mixed, ...}|object|array{'state': mixed, ...}|object|array{'postal_code': mixed, ...}|object|array{'radius': mixed, ...}|object|array{'window_time': mixed, ...}|object|array{'customer_group': mixed, ...}|object|array{'customer_verified': mixed, ...}|object|array{'customer_has_email': mixed, ...}|object|array{'customer_has_phone': mixed, ...}|object|null
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** @return array{'schedule_window'?: DeliveryScheduleWindowRuleRequestInput|array<array-key, mixed>|\stdClass, 'transit_time'?: DeliveryTransitTimeRuleInput|array<array-key, mixed>|\stdClass, 'type': string}|object|null
     * @throws SdkError When estimate is omitted; use hasEstimate() or valueOrDefault().
     */
    public function getEstimate(): array|object|null { return $this->get('estimate'); }
    public function hasEstimate(): bool { return $this->has('estimate'); }
    /** @return string|null
     * @throws SdkError When minimum_option_lifetime_seconds is omitted; use hasMinimumOptionLifetimeSeconds() or valueOrDefault().
     */
    public function getMinimumOptionLifetimeSeconds(): string|null { return $this->get('minimum_option_lifetime_seconds'); }
    public function hasMinimumOptionLifetimeSeconds(): bool { return $this->has('minimum_option_lifetime_seconds'); }
    /** @return mixed
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): mixed { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** @return mixed
     * @throws SdkError When pricing is omitted; use hasPricing() or valueOrDefault().
     */
    public function getPricing(): mixed { return $this->get('pricing'); }
    public function hasPricing(): bool { return $this->has('pricing'); }
    /** @return array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string}|object|null
     * @throws SdkError When public_details is omitted; use hasPublicDetails() or valueOrDefault().
     */
    public function getPublicDetails(): array|object|null { return $this->get('public_details'); }
    public function hasPublicDetails(): bool { return $this->has('public_details'); }
    /** @return list<string>
     * @throws SdkError When quote_input_fields is omitted; use hasQuoteInputFields() or valueOrDefault().
     */
    public function getQuoteInputFields(): array { return $this->get('quote_input_fields'); }
    public function hasQuoteInputFields(): bool { return $this->has('quote_input_fields'); }
    /** @return list<DeliveryRecipientRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When recipient_requirements is omitted; use hasRecipientRequirements() or valueOrDefault().
     */
    public function getRecipientRequirements(): array { return $this->get('recipient_requirements'); }
    public function hasRecipientRequirements(): bool { return $this->has('recipient_requirements'); }
    /** @return string|null
     * @throws SdkError When selection_guarantee_seconds is omitted; use hasSelectionGuaranteeSeconds() or valueOrDefault().
     */
    public function getSelectionGuaranteeSeconds(): string|null { return $this->get('selection_guarantee_seconds'); }
    public function hasSelectionGuaranteeSeconds(): bool { return $this->has('selection_guarantee_seconds'); }
    /** @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
