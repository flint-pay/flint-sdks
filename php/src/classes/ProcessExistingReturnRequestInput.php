<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completion_mode
 * @property-read int $expected_version
 * @property-read list<ProcessExistingReturnLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read ReturnProcessReceiptRequestInput|array<array-key, mixed>|\stdClass $receipt
 * Presence-aware input; omitted fields throw when accessed. */
final class ProcessExistingReturnRequestInput extends Model {
    /** @param array{'completion_mode'?: string, 'expected_version'?: int, 'line_items': list<ProcessExistingReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'receipt'?: ReturnProcessReceiptRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProcessExistingReturnRequestInput')); }
    /** Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param completion_mode. Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** minItems: 1. [] (Value): {@see ProcessExistingReturnLineItemRequestInput}. How to process one line of an existing return: the received quantity, inspection, decision, disposition, and resolution.
     * @return list<ProcessExistingReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return.
     * @return ReturnProcessReceiptRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When receipt is omitted; use hasReceipt() or valueOrDefault().
     */
    public function getReceipt(): mixed { return $this->get('receipt'); }
    public function hasReceipt(): bool { return $this->has('receipt'); }
}
