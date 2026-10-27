<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass> $adjustments
 * @property-read string $corrects_return_resolution_id
 * @property-read string $expected_return_version
 * @property-read list<ReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $pricing_basis
 * @property-read list<ReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * @property-read string $resolution_type
 * @property-read string $return_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnResolutionPreviewRequestStandardInput extends Model {
    /** @param array{'adjustments'?: list<ReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass>, 'corrects_return_resolution_id'?: string, 'expected_return_version'?: string, 'line_items': list<ReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'pricing_basis'?: string, 'replacement_line_items'?: list<ReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'resolution_type': string, 'return_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnResolutionPreviewRequestStandardInput')); }
    /** Shape $ (Value): Array of {@see ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value): {@see ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution, with the assessed and applied amounts and whether it is applied or waived.
     * @return list<ReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
    /** Shape $ (Value): integer string. Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_return_version is omitted; use hasExpectedReturnVersion() or valueOrDefault().
     */
    public function getExpectedReturnVersion(): string { return $this->get('expected_return_version'); }
    public function hasExpectedReturnVersion(): bool { return $this->has('expected_return_version'); }
    /** Shape $ (Value): Array of {@see ReturnResolutionLineItemRequestInput}. minItems: 1. Shape $[] (Value): {@see ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a return resolution.
     * @return list<ReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.  Value enum: "original_price", "current_price", "merchant_agreed_price".
     * @return string
     * @throws SdkError When pricing_basis is omitted; use hasPricingBasis() or valueOrDefault().
     */
    public function getPricingBasis(): string { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /** Shape $ (Value): Array of {@see ReturnReplacementLineItemRequestInput}. Shape $[] (Value): {@see ReturnReplacementLineItemRequestInput}. A replacement item to include in a return resolution, from a variant, a bundle, or a custom name and price.
     * @return list<ReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** Shape $ (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
}
