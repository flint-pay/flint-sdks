<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $message
 * @property-read string $return_line_item_id
 * @property-read string $return_resolution_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerReturnCompletionBlockerInput extends Model {
    /** @param array{'code': string, 'message': string, 'return_line_item_id'?: string, 'return_resolution_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnCompletionBlockerInput')); }
    /** A blocker the buyer can resolve. resolution_pending is included only for a payable resolution. Value enum: "resolution_pending", "handoff_pending", "resolution_not_selected", "resolution_requires_action", "resolution_failed".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** message
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** return_line_item_id
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** return_resolution_id
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
}
