<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read ReturnEligibilitySelectionRequestInput|array<array-key, mixed>|\stdClass $selection
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnEligibilityPreviewRequestInput extends Model {
    /** @param array{'order_id': string, 'selection': ReturnEligibilitySelectionRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnEligibilityPreviewRequestInput')); }
    /** ID of the Order to return items from. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Which fulfilled units to check. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines.
     * @return ReturnEligibilitySelectionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When selection is omitted; use hasSelection() or valueOrDefault().
     */
    public function getSelection(): mixed { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
}
