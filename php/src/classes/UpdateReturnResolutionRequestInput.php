<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<UpdateReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass> $adjustments
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string $gift_card_refund_destination
 * @property-read list<UpdateReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $pricing_basis
 * @property-read list<UpdateReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateReturnResolutionRequestInput extends Model {
    /** @param array{'adjustments'?: list<UpdateReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass>, 'expected_version'?: string, 'external_reference_id'?: string|null, 'gift_card_refund_destination'?: string, 'line_items'?: list<UpdateReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'pricing_basis'?: string, 'replacement_line_items'?: list<UpdateReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateReturnResolutionRequestInput')); }
    /** Shape $ (Value): Array of {@see UpdateReturnResolutionAdjustmentRequestInput}. Requires expected_version. Shape $[] (Value): {@see UpdateReturnResolutionAdjustmentRequestInput}. A fee or credit to keep or add when updating a return resolution. Include `return_resolution_adjustment_id` to update an existing one.
     * @return list<UpdateReturnResolutionAdjustmentRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When adjustments is omitted; use hasAdjustments() or valueOrDefault().
     */
    public function getAdjustments(): array { return $this->get('adjustments'); }
    public function hasAdjustments(): bool { return $this->has('adjustments'); }
    /** Shape $ (Value): integer string. Required when any of these fields is present: line_items, replacement_line_items, adjustments. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: "original". Value enum: "original", "new_gift_card".
     * @return string
     * @throws SdkError When gift_card_refund_destination is omitted; use hasGiftCardRefundDestination() or valueOrDefault().
     */
    public function getGiftCardRefundDestination(): string { return $this->get('gift_card_refund_destination'); }
    public function hasGiftCardRefundDestination(): bool { return $this->has('gift_card_refund_destination'); }
    /** Shape $ (Value): Array of {@see UpdateReturnResolutionLineItemRequestInput}. Requires expected_version. Shape $[] (Value): {@see UpdateReturnResolutionLineItemRequestInput}. A return line and quantity to keep or add when updating a return resolution.
     * @return list<UpdateReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.  Value enum: "original_price", "current_price", "merchant_agreed_price".
     * @return string
     * @throws SdkError When pricing_basis is omitted; use hasPricingBasis() or valueOrDefault().
     */
    public function getPricingBasis(): string { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /** Shape $ (Value): Array of {@see UpdateReturnReplacementLineItemRequestInput}. Requires expected_version. Shape $[] (Value): {@see UpdateReturnReplacementLineItemRequestInput}. A replacement item to keep or add when updating a return resolution. Include `return_replacement_line_item_id` to keep an existing one.
     * @return list<UpdateReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
}
