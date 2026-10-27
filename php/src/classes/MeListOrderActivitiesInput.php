<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $sort_direction
 * @property-read list<string> $activity_type
 * Presence-aware input; omitted fields throw when accessed. */
final class MeListOrderActivitiesInput extends Model {
    /** @param array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'activity_type'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListOrderActivitiesInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied", "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". Shape $[] (Value): string.  Value enum: "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied", "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed".
     * @return list<string>
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): array { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
}
