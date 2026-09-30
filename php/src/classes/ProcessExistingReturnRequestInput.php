<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completion_behavior
 * @property-read string $expected_version
 * @property-read list<ProcessExistingReturnLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read ReturnProcessReceiptRequestInput|array<array-key, mixed>|\stdClass $receipt
 * Presence-aware input; omitted fields throw when accessed. */
final class ProcessExistingReturnRequestInput extends Model {
    /** @param array{'completion_behavior'?: string, 'expected_version'?: string, 'line_items': list<ProcessExistingReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'receipt'?: ReturnProcessReceiptRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProcessExistingReturnRequestInput')); }
    /** @return string
     * @throws SdkError When completion_behavior is omitted; use hasCompletionBehavior() or valueOrDefault().
     */
    public function getCompletionBehavior(): string { return $this->get('completion_behavior'); }
    public function hasCompletionBehavior(): bool { return $this->has('completion_behavior'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return list<ProcessExistingReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return ReturnProcessReceiptRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When receipt is omitted; use hasReceipt() or valueOrDefault().
     */
    public function getReceipt(): mixed { return $this->get('receipt'); }
    public function hasReceipt(): bool { return $this->has('receipt'); }
}
