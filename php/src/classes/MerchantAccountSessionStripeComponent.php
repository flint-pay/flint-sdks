<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MerchantAccountSessionStripeCollectionOptions $collection_options
 * @property-read string $component
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSessionStripeComponent extends Model {
    /** @param array{'collection_options'?: mixed, 'component': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeComponent')); }
    /** Collection instructions for a policy-aware component. Omitted for other components. Map future_requirements to futureRequirements when calling setCollectionOptions. Requirement collection options to apply when mounting one embedded component: field breadth, future requirements, and any targeted requirements.
     * @return ?MerchantAccountSessionStripeCollectionOptions
     */
    public function getCollectionOptions(): ?MerchantAccountSessionStripeCollectionOptions { return $this->get('collection_options'); }
    public function hasCollectionOptions(): bool { return $this->has('collection_options'); }
    /** Stripe component name authorized by this session. tax_documents uses the Stripe name documents. Convert underscores to hyphens when calling Connect.create. Value enum: "account_onboarding", "account_management", "payouts", "balances", "documents", "notification_banner".
     * @return string
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
}
