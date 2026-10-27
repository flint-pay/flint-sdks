<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $collection_strategy
 * @property-read string $component
 * @property-read string $future_requirements
 * Presence-aware input; omitted fields throw when accessed. */
final class NextActionMerchantAccountSessionInput extends Model {
    /** @param array{'collection_strategy'?: string, 'component': string, 'future_requirements'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('NextActionMerchantAccountSessionInput')); }
    /** Shape $ (Value): string. Recommended verification collection breadth. Value enum: "upfront", "incremental".
     * @return string
     * @throws SdkError When collection_strategy is omitted; use hasCollectionStrategy() or valueOrDefault().
     */
    public function getCollectionStrategy(): string { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** Shape $ (Value): string. Resolver-recommended component to send to POST /v1/merchant-account-sessions. Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     * @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Shape $ (Value): string. Recommended future-requirement collection behavior. Value enum: "omit", "include".
     * @return string
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
}
