<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $collection_strategy
 * @property-read string $component
 * @property-read ?string $future_requirements
 * Presence-aware response; omitted optional fields return null. */
final class NextActionMerchantAccountSession extends Model {
    /** @param array{'collection_strategy'?: string, 'component': string, 'future_requirements'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('NextActionMerchantAccountSession')); }
    /** Shape $ (Value): string. Recommended verification collection breadth. Value enum: "upfront", "incremental".
     * @return ?string
     */
    public function getCollectionStrategy(): ?string { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** Shape $ (Value): string. Resolver-recommended component to send to POST /v1/merchant-account-sessions. Value enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     * @return string
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Shape $ (Value): string. Recommended future-requirement collection behavior. Value enum: "omit", "include".
     * @return ?string
     */
    public function getFutureRequirements(): ?string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
}
