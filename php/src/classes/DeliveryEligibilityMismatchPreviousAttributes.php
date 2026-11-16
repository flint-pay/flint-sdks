<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $condition
 * @property-read string|null $expression_path
 * @property-read string|null $field
 * @property-read bool|null $negated
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryEligibilityMismatchPreviousAttributes extends Model {
    /** @param array{'condition'?: mixed, 'expression_path'?: mixed, 'field'?: mixed, 'negated'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEligibilityMismatchPreviousAttributes')); }
    /** The configured eligibility condition family that did not match. Value enum: "zone", "country", "state", "postal_code", "radius", "window_time", "subscription_purchase", "customer_segment", "customer_merchant_verified", "customer_has_email", "customer_has_phone". anyOf[1] (Value): string. The configured eligibility condition family that did not match. Value enum: "zone", "country", "state", "postal_code", "radius", "window_time", "subscription_purchase", "customer_segment", "customer_merchant_verified", "customer_has_email", "customer_has_phone". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCondition(): string|null { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** The condition's path in the configured eligibility expression, starting at $. anyOf[1] (Value): string. The condition's path in the configured eligibility expression, starting at $. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpressionPath(): string|null { return $this->get('expression_path'); }
    public function hasExpressionPath(): bool { return $this->has('expression_path'); }
    /** The eligibility fact evaluated by the condition. Buyer fact values are not included. anyOf[1] (Value): string. The eligibility fact evaluated by the condition. Buyer fact values are not included. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getField(): string|null { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** Whether the condition matched inside a not expression and therefore rejected the method. anyOf[1] (Value): boolean. Whether the condition matched inside a not expression and therefore rejected the method. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getNegated(): bool|null { return $this->get('negated'); }
    public function hasNegated(): bool { return $this->has('negated'); }
}
