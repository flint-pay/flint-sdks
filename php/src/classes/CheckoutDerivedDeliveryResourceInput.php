<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $buyer_reasons
 * @property-read list<DeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass> $choice_groups
 * @property-read string $delivery_quote_id
 * @property-read string $evaluation_status
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass> $merchant_diagnostics
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutDerivedDeliveryResourceInput extends Model {
    /** @param array{'buyer_reasons': list<string>, 'choice_groups': list<DeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>, 'delivery_quote_id'?: string, 'evaluation_status': string, 'expires_at'?: string|\DateTimeInterface, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutDerivedDeliveryResourceInput')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When buyer_reasons is omitted; use hasBuyerReasons() or valueOrDefault().
     */
    public function getBuyerReasons(): array { return $this->get('buyer_reasons'); }
    public function hasBuyerReasons(): bool { return $this->has('buyer_reasons'); }
    /** Shape $ (Value): Array of {@see DeliveryQuoteChoiceGroupResourceInput}. Shape $[] (Value): {@see DeliveryQuoteChoiceGroupResourceInput}. One group of order items in a delivery quote, with the delivery options the buyer can choose, its availability status, and any input still needed.
     * @return list<DeliveryQuoteChoiceGroupResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choice_groups is omitted; use hasChoiceGroups() or valueOrDefault().
     */
    public function getChoiceGroups(): array { return $this->get('choice_groups'); }
    public function hasChoiceGroups(): bool { return $this->has('choice_groups'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Shape $ (Value): string.  Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote".
     * @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of {@see DeliveryInputRequirementInput}. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. Shape $[] (Value): {@see DeliveryInputRequirementInput}. An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.
     * @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** Shape $ (Value): Array of {@see DeliveryMerchantDiagnosticInput}. Always present with an API key or dashboard credential. Shape $[] (Value): {@see DeliveryMerchantDiagnosticInput}. A merchant-only diagnostic explaining why a delivery method produced no option, with its outcome, recommended action, and eligibility mismatches.
     * @return list<DeliveryMerchantDiagnosticInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
}
