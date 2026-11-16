<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $delivery_selection_id
 * @property-read string|null $delivery_selection_lifecycle_event_id
 * @property-read string|null $reason
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionLifecycleEventResourcePreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'delivery_selection_id'?: mixed, 'delivery_selection_lifecycle_event_id'?: mixed, 'reason'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionLifecycleEventResourcePreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the selection whose status changed. anyOf[1] (Value): string. ID of the selection whose status changed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** ID of this recorded selection status change. anyOf[1] (Value): string. ID of this recorded selection status change. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliverySelectionLifecycleEventId(): string|null { return $this->get('delivery_selection_lifecycle_event_id'); }
    public function hasDeliverySelectionLifecycleEventId(): bool { return $this->has('delivery_selection_lifecycle_event_id'); }
    /** What caused this selection status change. Value enum: "replacement_selected", "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired", "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked", "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated", "quote_basis_changed", "calculation_changed". anyOf[1] (Value): string. What caused this selection status change. Value enum: "replacement_selected", "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired", "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked", "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated", "quote_basis_changed", "calculation_changed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[1] (Value): string. Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
