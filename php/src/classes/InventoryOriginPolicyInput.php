<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $post_payment_inventory_failure_action
 * @property-read string $subscription_inventory_block_action
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryOriginPolicyInput extends Model {
    /** @param array{'post_payment_inventory_failure_action'?: string, 'subscription_inventory_block_action'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryOriginPolicyInput')); }
    /** @return string
     * @throws SdkError When post_payment_inventory_failure_action is omitted; use hasPostPaymentInventoryFailureAction() or valueOrDefault().
     */
    public function getPostPaymentInventoryFailureAction(): string { return $this->get('post_payment_inventory_failure_action'); }
    public function hasPostPaymentInventoryFailureAction(): bool { return $this->has('post_payment_inventory_failure_action'); }
    /** @return string
     * @throws SdkError When subscription_inventory_block_action is omitted; use hasSubscriptionInventoryBlockAction() or valueOrDefault().
     */
    public function getSubscriptionInventoryBlockAction(): string { return $this->get('subscription_inventory_block_action'); }
    public function hasSubscriptionInventoryBlockAction(): bool { return $this->has('subscription_inventory_block_action'); }
}
