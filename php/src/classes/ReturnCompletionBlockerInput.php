<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read string|null $return_id
 * @property-read string $return_line_item_id
 * @property-read string $return_receipt_id
 * @property-read string $return_resolution_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnCompletionBlockerInput extends Model {
    /** @param array{'code': string, 'message': string, 'return_id': string|null, 'return_line_item_id'?: string, 'return_receipt_id'?: string, 'return_resolution_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCompletionBlockerInput')); }
    /** What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Value enum: "decision_pending", "handoff_pending", "receipt_pending", "inspection_pending", "inspection_review_required", "disposition_required", "resolution_not_selected", "resolution_pending", "resolution_requires_action", "resolution_failed", "merchandise_exception".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Explanation of what is still owed.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the entry is about. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** ID of the receipt holding this blocker up. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the resolution holding this blocker up. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
}
