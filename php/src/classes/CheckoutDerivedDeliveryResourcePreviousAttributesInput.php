<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $buyer_reasons
 * @property-read list<DeliveryQuoteChoiceGroupResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $choice_groups
 * @property-read string|null $delivery_quote_id
 * @property-read string|null|null $delivery_selection_id
 * @property-read string|null $evaluation_status
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read list<DeliveryInputRequirementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $input_requirements
 * @property-read list<DeliveryMerchantDiagnosticPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $merchant_diagnostics
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutDerivedDeliveryResourcePreviousAttributesInput extends Model {
    /** @param array{'buyer_reasons'?: list<string>|null, 'choice_groups'?: list<DeliveryQuoteChoiceGroupResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'delivery_quote_id'?: string|null, 'delivery_selection_id'?: string|null|null, 'evaluation_status'?: string|null, 'expires_at'?: string|\DateTimeInterface|null, 'input_requirements'?: list<DeliveryInputRequirementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'merchant_diagnostics'?: list<DeliveryMerchantDiagnosticPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDerivedDeliveryResourcePreviousAttributesInput')); }
    /** Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. anyOf[1] (Value): Array of string. Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When buyer_reasons is omitted; use hasBuyerReasons() or valueOrDefault().
     */
    public function getBuyerReasons(): mixed { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /** Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. anyOf[1] (Value): Array of {@see DeliveryQuoteChoiceGroupResourcePreviousAttributesInput}. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. anyOf[1][] (Value): {@see DeliveryQuoteChoiceGroupResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteChoiceGroupResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): mixed { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** ID of the checkout's current delivery quote. Omitted until the checkout has one. anyOf[1] (Value): string. ID of the checkout's current delivery quote. Omitted until the checkout has one. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): mixed { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. anyOf[1] (Value): string or null. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): mixed { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** How completely Flint evaluated the candidate delivery methods. Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote". anyOf[1] (Value): string. How completely Flint evaluated the candidate delivery methods. Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): mixed { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. anyOf[1] (Value): Array of {@see DeliveryInputRequirementPreviousAttributesInput}. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. anyOf[1][] (Value): {@see DeliveryInputRequirementPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryInputRequirementPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): mixed { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Always present with an API key or dashboard credential. anyOf[1] (Value): Array of {@see DeliveryMerchantDiagnosticPreviousAttributesInput}. Always present with an API key or dashboard credential. anyOf[1][] (Value): {@see DeliveryMerchantDiagnosticPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryMerchantDiagnosticPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): mixed { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
}
