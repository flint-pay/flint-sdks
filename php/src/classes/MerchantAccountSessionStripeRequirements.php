<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $only
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSessionStripeRequirements extends Model {
    /** @param array{'only': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeRequirements')); }
    /** Shape $ (Value): Array of string. Stripe requirement paths to collect exclusively when effective_policy.targeting is targeted. They come from the targeted_requirements you sent or from Flint's remediation recommendation. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getOnly(): array { return $this->get('only'); }
    public function hasOnly(): bool { return $this->has('only'); }
}
