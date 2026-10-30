<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $post_payment_inventory_failure_action
 * @property-read ?string $subscription_inventory_block_action
 * Presence-aware response; omitted optional fields return null. */
final class InventoryOriginPolicy extends Model {
    /** @param array{'post_payment_inventory_failure_action'?: string, 'subscription_inventory_block_action'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryOriginPolicy')); }
    /** Value enum: "exception_state", "auto_refund".
     * @return ?string
     */
    public function getPostPaymentInventoryFailureAction(): ?string { return $this->get('post_payment_inventory_failure_action'); }
    public function hasPostPaymentInventoryFailureAction(): bool { return $this->has('post_payment_inventory_failure_action'); }
    /** What happens when a subscription renewal cannot get stock. inventory_blocked_open_invoice creates an open invoice with collection_block_status inventory_blocked, external collection, caller-managed delivery, and no due date. past_due moves the subscription to past due. Value enum: "inventory_blocked_open_invoice", "past_due".
     * @return ?string
     */
    public function getSubscriptionInventoryBlockAction(): ?string { return $this->get('subscription_inventory_block_action'); }
    public function hasSubscriptionInventoryBlockAction(): bool { return $this->has('subscription_inventory_block_action'); }
}
