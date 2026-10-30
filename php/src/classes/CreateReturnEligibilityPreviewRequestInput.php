<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read ReturnEligibilitySelectionInput|array<array-key, mixed>|\stdClass $selection
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnEligibilityPreviewRequestInput extends Model {
    /** @param array{'order_id': string, 'selection': ReturnEligibilitySelectionInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnEligibilityPreviewRequestInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.
     * @return ReturnEligibilitySelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When selection is omitted; use hasSelection() or valueOrDefault().
     */
    public function getSelection(): mixed { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
}
