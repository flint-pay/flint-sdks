<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_choice_group_id
 * @property-read string $delivery_method_revision_id
 * @property-read CallerSuppliedDeliveryOutcomeRequestInput|array<array-key, mixed>|\stdClass $outcome
 * Presence-aware input; omitted fields throw when accessed. */
final class CallerSuppliedDeliveryMethodResultRequestInput extends Model {
    /** @param array{'delivery_choice_group_id': string, 'delivery_method_revision_id': string, 'outcome': CallerSuppliedDeliveryOutcomeRequestInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CallerSuppliedDeliveryMethodResultRequestInput')); }
    /** @return string
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** @return CallerSuppliedDeliveryOutcomeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): mixed { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
}
