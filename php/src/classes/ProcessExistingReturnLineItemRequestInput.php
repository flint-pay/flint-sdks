<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnProcessDecisionInput|array<array-key, mixed>|\stdClass $decision
 * @property-read ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass $disposition
 * @property-read ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass $inspection
 * @property-read string $received_quantity
 * @property-read ReturnProcessResolutionRequestInput|array<array-key, mixed>|\stdClass $resolution
 * @property-read string $return_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ProcessExistingReturnLineItemRequestInput extends Model {
    /** @param array{'decision'?: ReturnProcessDecisionInput|array<array-key, mixed>|\stdClass, 'disposition'?: ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass, 'inspection'?: ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass, 'received_quantity'?: string, 'resolution'?: ReturnProcessResolutionRequestInput|array<array-key, mixed>|\stdClass, 'return_line_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProcessExistingReturnLineItemRequestInput')); }
    /** @return ReturnProcessDecisionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When decision is omitted; use hasDecision() or valueOrDefault().
     */
    public function getDecision(): mixed { return $this->get('decision'); }
    public function hasDecision(): bool { return $this->has('decision'); }
    /** @return ReturnProcessDispositionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): mixed { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** @return ReturnProcessInspectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inspection is omitted; use hasInspection() or valueOrDefault().
     */
    public function getInspection(): mixed { return $this->get('inspection'); }
    public function hasInspection(): bool { return $this->has('inspection'); }
    /** @return string
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): string { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** @return ReturnProcessResolutionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
