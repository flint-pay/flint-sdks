<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $condition
 * @property-read string|null $expression_path
 * @property-read string|null $field
 * @property-read bool|null $negated
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryEligibilityMismatchPreviousAttributesInput extends Model {
    /** @param array{'condition'?: string|null, 'expression_path'?: string|null, 'field'?: string|null, 'negated'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryEligibilityMismatchPreviousAttributesInput')); }
    /** The configured eligibility condition family that did not match. Value enum: "zone", "country", "state", "postal_code", "radius", "window_time", "subscription_purchase", "customer_segment", "customer_merchant_verified", "customer_has_email", "customer_has_phone". anyOf[1] (Value): string. The configured eligibility condition family that did not match. Value enum: "zone", "country", "state", "postal_code", "radius", "window_time", "subscription_purchase", "customer_segment", "customer_merchant_verified", "customer_has_email", "customer_has_phone". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): mixed { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** The condition's path in the configured eligibility expression, starting at $. anyOf[1] (Value): string. The condition's path in the configured eligibility expression, starting at $. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When expression_path is omitted; use hasExpressionPath() or valueOrDefault().
     */
    public function getExpressionPath(): mixed { return $this->get('expression_path'); }
    public function hasExpressionPath(): bool { return $this->has('expression_path'); }
    /** The eligibility fact evaluated by the condition. Buyer fact values are not included. anyOf[1] (Value): string. The eligibility fact evaluated by the condition. Buyer fact values are not included. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When field is omitted; use hasField() or valueOrDefault().
     */
    public function getField(): mixed { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
    /** Whether the condition matched inside a not expression and therefore rejected the method. anyOf[1] (Value): boolean. Whether the condition matched inside a not expression and therefore rejected the method. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When negated is omitted; use hasNegated() or valueOrDefault().
     */
    public function getNegated(): mixed { return $this->get('negated'); }
    public function hasNegated(): bool { return $this->has('negated'); }
}
