<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $buyer_reasons
 * @property-read list<DeliveryQuoteChoiceGroupResourcePreviousAttributes>|null $choice_groups
 * @property-read string|null $delivery_quote_id
 * @property-read string|null $delivery_selection_id
 * @property-read string|null $evaluation_status
 * @property-read string|null $expires_at
 * @property-read list<DeliveryInputRequirementPreviousAttributes>|null $input_requirements
 * @property-read bool|null $inventory_unavailable
 * @property-read list<DeliveryMerchantDiagnosticPreviousAttributes>|null $merchant_diagnostics
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutDerivedDeliveryResourcePreviousAttributes extends Model {
    /** @param array{'buyer_reasons'?: mixed, 'choice_groups'?: mixed, 'delivery_quote_id'?: mixed, 'delivery_selection_id'?: mixed, 'evaluation_status'?: mixed, 'expires_at'?: mixed, 'input_requirements'?: mixed, 'inventory_unavailable'?: mixed, 'merchant_diagnostics'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDerivedDeliveryResourcePreviousAttributes')); }
    /** Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. anyOf[1] (Value): Array of string. Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getBuyerReasons(): array|null { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /** Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. anyOf[1] (Value): Array of {@see DeliveryQuoteChoiceGroupResourcePreviousAttributes}. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. anyOf[1][] (Value): {@see DeliveryQuoteChoiceGroupResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryQuoteChoiceGroupResourcePreviousAttributes>|null
     */
    public function getChoiceGroups(): array|null { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** ID of the checkout's current delivery quote. Omitted until the checkout has one. anyOf[1] (Value): string. ID of the checkout's current delivery quote. Omitted until the checkout has one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryQuoteId(): string|null { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. anyOf[1] (Value): string. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** How completely Flint evaluated the candidate delivery methods. Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote". anyOf[1] (Value): string. How completely Flint evaluated the candidate delivery methods. Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEvaluationStatus(): string|null { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. anyOf[1] (Value): Array of {@see DeliveryInputRequirementPreviousAttributes}. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. anyOf[1][] (Value): {@see DeliveryInputRequirementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryInputRequirementPreviousAttributes>|null
     */
    public function getInputRequirements(): array|null { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** True when a required delivery group has no option and a candidate lacks the requested stock. anyOf[1] (Value): boolean. True when a required delivery group has no option and a candidate lacks the requested stock. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getInventoryUnavailable(): bool|null { return $this->get('inventory_unavailable'); }
    public function hasInventoryUnavailable(): bool { return $this->has('inventory_unavailable'); }
    /** Always present with an API key or dashboard credential. anyOf[1] (Value): Array of {@see DeliveryMerchantDiagnosticPreviousAttributes}. Always present with an API key or dashboard credential. anyOf[1][] (Value): {@see DeliveryMerchantDiagnosticPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryMerchantDiagnosticPreviousAttributes>|null
     */
    public function getMerchantDiagnostics(): array|null { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
}
