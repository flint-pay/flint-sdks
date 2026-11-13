<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $delivery_selection_id
 * @property-read string $delivery_selection_lifecycle_event_id
 * @property-read string $reason
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionLifecycleEventResource extends Model {
    /** @param array{'created_at': string, 'delivery_selection_id': string, 'delivery_selection_lifecycle_event_id': string, 'reason': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionLifecycleEventResource')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the selection whose status changed.
     * @return string
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** ID of this recorded selection status change.
     * @return string
     */
    public function getDeliverySelectionLifecycleEventId(): string { return $this->get('delivery_selection_lifecycle_event_id'); }
    public function hasDeliverySelectionLifecycleEventId(): bool { return $this->has('delivery_selection_lifecycle_event_id'); }
    /** What caused this selection status change. Value enum: "replacement_selected", "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired", "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked", "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated", "quote_basis_changed", "calculation_changed".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
