<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $condition
 * @property-read string $expression_path
 * @property-read ?string $field
 * @property-read ?bool $negated
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryEligibilityMismatch extends Model {
    /** @param array{'condition': string, 'expression_path': string, 'field'?: string, 'negated'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEligibilityMismatch')); }
    /** Shape $ (Value): string. The configured eligibility condition family that did not match. Value enum: "zone", "country", "state", "postal_code", "radius", "window_time", "subscription_purchase", "customer_segment", "customer_merchant_verified", "customer_has_email", "customer_has_phone".
     * @return string
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Shape $ (Value): string. The condition's path in the configured eligibility expression, starting at $.
     * @return string
     */
    public function getExpressionPath(): string { return $this->get('expression_path'); }
    public function hasExpressionPath(): bool { return $this->has('expression_path'); }
    /** Shape $ (Value): string. The eligibility fact evaluated by the condition. Buyer fact values are not included.
     * @return ?string
     */
    public function getField(): ?string { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** Shape $ (Value): boolean. Whether the condition matched inside a not expression and therefore rejected the method.
     * @return ?bool
     */
    public function getNegated(): ?bool { return $this->get('negated'); }
    public function hasNegated(): bool { return $this->has('negated'); }
}
