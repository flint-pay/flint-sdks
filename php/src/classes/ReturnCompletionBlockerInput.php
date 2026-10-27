<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read string $return_disposition_id
 * @property-read string $return_inspection_id
 * @property-read string $return_line_item_id
 * @property-read string $return_receipt_id
 * @property-read string $return_resolution_id
 * @property-read string $shipment_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnCompletionBlockerInput extends Model {
    /** @param array{'code': string, 'message': string, 'return_disposition_id'?: string, 'return_inspection_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id'?: string, 'return_resolution_id'?: string, 'shipment_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCompletionBlockerInput')); }
    /** Shape $ (Value): string. What is still owed before this Return can complete. Each blocker names the Return line it belongs to and, where one exists, the receipt, inspection, disposition, or resolution holding it up. An empty completion_blockers array means nothing is outstanding. Value enum: "decision_pending", "handoff_pending", "receipt_pending", "inspection_pending", "inspection_review_required", "disposition_required", "resolution_not_selected", "resolution_pending", "resolution_requires_action", "resolution_failed", "merchandise_exception".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): string { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
}
