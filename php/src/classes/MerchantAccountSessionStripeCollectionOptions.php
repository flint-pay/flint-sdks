<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fields
 * @property-read string $future_requirements
 * @property-read ?MerchantAccountSessionStripeRequirements $requirements
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSessionStripeCollectionOptions extends Model {
    /** @param array{'fields': string, 'future_requirements': string, 'requirements'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeCollectionOptions')); }
    /** Shape $ (Value): string. Requirement collection breadth to pass as fields to setCollectionOptions. Value enum: "currently_due", "eventually_due".
     * @return string
     */
    public function getFields(): string { return $this->get('fields'); }
    public function hasFields(): bool { return $this->has('fields'); }
    /** Shape $ (Value): string. Whether to collect future requirements. Pass this value as futureRequirements to setCollectionOptions. Value enum: "omit", "include".
     * @return string
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** Shape $ (Value): {@see MerchantAccountSessionStripeRequirements}. Targeted requirement collection restriction to pass as requirements to setCollectionOptions. Omitted when collection is not targeted. The Stripe requirement paths to collect exclusively when a session's targeting is `targeted`.
     * @return ?MerchantAccountSessionStripeRequirements
     */
    public function getRequirements(): ?MerchantAccountSessionStripeRequirements { return $this->get('requirements'); }
    public function hasRequirements(): bool { return $this->has('requirements'); }
}
