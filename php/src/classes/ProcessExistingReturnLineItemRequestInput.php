<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnProcessDecisionInput|array<array-key, mixed>|\stdClass $decision
 * @property-read ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass $disposition
 * @property-read ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass $inspection
 * @property-read int $received_quantity
 * @property-read ReturnProcessResolutionRequestInput|array<array-key, mixed>|\stdClass $resolution
 * @property-read string $return_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ProcessExistingReturnLineItemRequestInput extends Model {
    /** @param array{'decision'?: ReturnProcessDecisionInput|array<array-key, mixed>|\stdClass, 'disposition'?: ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass, 'inspection'?: ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass, 'received_quantity'?: int, 'resolution'?: ReturnProcessResolutionRequestInput|array<array-key, mixed>|\stdClass, 'return_line_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProcessExistingReturnLineItemRequestInput')); }
    /** Start from the pinned policy proposal recomputed for approved_quantity when the line has a policy evaluation and the proposal can be built. Otherwise start with return_required_quantity equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless of whether the original payment is refundable, no automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise is required and inspection is required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. Validate the merged decision for quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned policy always requires override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal, other decision fields use these defaults and override_reason is otherwise optional. Example: {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     * @return ReturnProcessDecisionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When decision is omitted; use hasDecision() or valueOrDefault().
     */
    public function getDecision(): mixed { return $this->get('decision'); }
    public function hasDecision(): bool { return $this->has('decision'); }
    /** What was done with a returned item, such as restocked as sellable or sent for repair, supplied when processing an existing return.
     * @return ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): mixed { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** An inspection result for a returned item, supplied when processing an existing return.
     * @return ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inspection is omitted; use hasInspection() or valueOrDefault().
     */
    public function getInspection(): mixed { return $this->get('inspection'); }
    public function hasInspection(): bool { return $this->has('inspection'); }
    /** Whole number of units received. It must equal the line's committed return_required_quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): int { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** The resolution to apply to a returned item, such as refund or exchange, with the quantity and any replacement items.
     * @return ReturnProcessResolutionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
