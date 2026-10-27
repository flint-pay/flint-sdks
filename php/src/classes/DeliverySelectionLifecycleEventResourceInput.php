<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $delivery_selection_id
 * @property-read string $delivery_selection_lifecycle_event_id
 * @property-read string $reason
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionLifecycleEventResourceInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'delivery_selection_id': string, 'delivery_selection_lifecycle_event_id': string, 'reason': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionLifecycleEventResourceInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_selection_lifecycle_event_id is omitted; use hasDeliverySelectionLifecycleEventId() or valueOrDefault().
     */
    public function getDeliverySelectionLifecycleEventId(): string { return $this->get('delivery_selection_lifecycle_event_id'); }
    public function hasDeliverySelectionLifecycleEventId(): bool { return $this->has('delivery_selection_lifecycle_event_id'); }
    /** Shape $ (Value): string.  Value enum: "replacement_selected", "buyer_selected", "payment_started", "payment_failed_selection_restored", "payment_settled", "payment_failed_selection_expired", "calculation_expired", "selection_expired", "selection_not_current", "dependency_revoked", "buyer_cleared", "eligibility_context_refreshed", "checkout_replaced", "checkout_terminal", "order_mutated", "quote_basis_changed", "calculation_changed".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string.  Value enum: "selected", "locked_for_payment", "committed", "superseded", "expired", "released".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
