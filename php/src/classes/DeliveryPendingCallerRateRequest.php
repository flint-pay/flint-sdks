<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_choice_group_id
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPendingCallerRateRequest extends Model {
    /** @param array{'delivery_choice_group_id': string, 'delivery_method_id': string, 'delivery_method_revision_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPendingCallerRateRequest')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryChoiceGroupId(): string { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
}
