<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnResolutionAdjustmentSetInput|array<array-key, mixed>|\stdClass $adjustment_set
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read list<ReturnResolutionLineItemReplacementRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $pricing_basis
 * @property-read list<ReturnReplacementLineItemReplacementRequestInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateReturnResolutionRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateReturnResolutionRequestInput')); }
    /** @return ReturnResolutionAdjustmentSetInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When adjustment_set is omitted; use hasAdjustmentSet() or valueOrDefault().
     */
    public function getAdjustmentSet(): mixed { return $this->get('adjustment_set'); }
    public function hasAdjustmentSet(): bool { return $this->has('adjustment_set'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return list<ReturnResolutionLineItemReplacementRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When pricing_basis is omitted; use hasPricingBasis() or valueOrDefault().
     */
    public function getPricingBasis(): string { return $this->get('pricing_basis'); }
    public function hasPricingBasis(): bool { return $this->has('pricing_basis'); }
    /** @return list<ReturnReplacementLineItemReplacementRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
}
