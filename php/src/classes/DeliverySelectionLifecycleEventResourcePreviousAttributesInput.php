<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $delivery_selection_id
 * @property-read string|null $delivery_selection_lifecycle_event_id
 * @property-read string|null $reason
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionLifecycleEventResourcePreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'delivery_selection_id'?: string|null, 'delivery_selection_lifecycle_event_id'?: string|null, 'reason'?: string|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionLifecycleEventResourcePreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the selection whose status changed. anyOf[1] (Value): string. ID of the selection whose status changed. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): mixed { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** ID of this recorded selection status change. anyOf[1] (Value): string. ID of this recorded selection status change. Example: "dsle_01KEZF7C00FR4QPRPMM4T248FD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_selection_lifecycle_event_id is omitted; use hasDeliverySelectionLifecycleEventId() or valueOrDefault().
     */
    public function getDeliverySelectionLifecycleEventId(): mixed { return $this->get('delivery_selection_lifecycle_event_id'); }
    public function hasDeliverySelectionLifecycleEventId(): bool { return $this->has('delivery_selection_lifecycle_event_id'); }
    /** What caused this selection status change. Value enum: "replacement_selected", "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired", "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked", "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated", "quote_basis_changed", "calculation_changed". anyOf[1] (Value): string. What caused this selection status change. Value enum: "replacement_selected", "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired", "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked", "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated", "quote_basis_changed", "calculation_changed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[1] (Value): string. Selection status after this change. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
