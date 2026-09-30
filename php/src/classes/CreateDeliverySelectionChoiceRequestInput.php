<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_choice_group_id
 * @property-read string $delivery_option_id
 * @property-read DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass $input
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliverySelectionChoiceRequestInput extends Model {
    /** @param array{'delivery_choice_group_id': string, 'delivery_option_id': string, 'input'?: DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliverySelectionChoiceRequestInput')); }
    /** @return string
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** @return string
     * @throws SdkError When delivery_option_id is omitted; use hasDeliveryOptionId() or valueOrDefault().
     */
    public function getDeliveryOptionId(): string { return $this->get('delivery_option_id'); }
    public function hasDeliveryOptionId(): bool { return $this->has('delivery_option_id'); }
    /** @return DeliverySelectionInstructionsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When input is omitted; use hasInput() or valueOrDefault().
     */
    public function getInput(): mixed { return $this->get('input'); }
    public function hasInput(): bool { return $this->has('input'); }
}
