<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $buyer_reasons
 * @property-read list<DeliveryQuoteChoiceGroupResource> $choice_groups
 * @property-read ?string $delivery_quote_id
 * @property-read string|null $delivery_selection_id
 * @property-read string $evaluation_status
 * @property-read ?string $expires_at
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read ?list<DeliveryMerchantDiagnostic> $merchant_diagnostics
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutDerivedDeliveryResource extends Model {
    /** @param array{'buyer_reasons': list<string>, 'choice_groups': list<mixed>, 'delivery_quote_id'?: string, 'delivery_selection_id': string|null, 'evaluation_status': string, 'expires_at'?: string, 'input_requirements': list<mixed>, 'merchant_diagnostics'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDerivedDeliveryResource')); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getBuyerReasons(): array { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /**  [] (Value): {@see DeliveryQuoteChoiceGroupResource}. One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.
     * @return list<DeliveryQuoteChoiceGroupResource>
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** delivery_quote_id
     * @return ?string
     */
    public function getDeliveryQuoteId(): ?string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Current delivery selection ID after reconciliation, or null when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes.
     * @return string|null
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote".
     * @return string
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. [] (Value): {@see DeliveryInputRequirement}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirement>
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Always present with an API key or dashboard credential. [] (Value): {@see DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.
     * @return ?list<DeliveryMerchantDiagnostic>
     */
    public function getMerchantDiagnostics(): ?array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
}
