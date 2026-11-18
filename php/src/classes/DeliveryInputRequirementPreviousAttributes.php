<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryInputConstraintPreviousAttributes|null $constraint
 * @property-read list<string>|null $delivery_choice_group_ids
 * @property-read string|null $delivery_input_requirement_id
 * @property-read list<string>|null $delivery_method_ids
 * @property-read list<string>|null $delivery_option_ids
 * @property-read string|null $field_path
 * @property-read string|null $purpose
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryInputRequirementPreviousAttributes extends Model {
    /** @param array{'constraint'?: mixed, 'delivery_choice_group_ids'?: mixed, 'delivery_input_requirement_id'?: mixed, 'delivery_method_ids'?: mixed, 'delivery_option_ids'?: mixed, 'field_path'?: mixed, 'purpose'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputRequirementPreviousAttributes')); }
    /** The rules the input must follow. anyOf[1] (Value): {@see DeliveryInputConstraintPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryInputConstraintPreviousAttributes|null
     */
    public function getConstraint(): DeliveryInputConstraintPreviousAttributes|null { return $this->get('constraint'); }
    public function hasConstraint(): bool { return $this->has('constraint'); }
    /** Choice groups that need this input. anyOf[1] (Value): Array of string. Choice groups that need this input. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDeliveryChoiceGroupIds(): array|null { return $this->get('delivery_choice_group_ids'); }
    public function hasDeliveryChoiceGroupIds(): bool { return $this->has('delivery_choice_group_ids'); }
    /** Unique ID of this requirement. anyOf[1] (Value): string. Unique ID of this requirement. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryInputRequirementId(): string|null { return $this->get('delivery_input_requirement_id'); }
    public function hasDeliveryInputRequirementId(): bool { return $this->has('delivery_input_requirement_id'); }
    /** Delivery methods that need this input. anyOf[1] (Value): Array of string. Delivery methods that need this input. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDeliveryMethodIds(): array|null { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. anyOf[1] (Value): Array of string. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDeliveryOptionIds(): array|null { return $this->get('delivery_option_ids'); }
    public function hasDeliveryOptionIds(): bool { return $this->has('delivery_option_ids'); }
    /** Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.country", "destination_address.state", "destination_address.postal_code", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.country", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email", "recipient.phone", "choices[].input.delivery_window_id", "method_results". anyOf[1] (Value): string. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.country", "destination_address.state", "destination_address.postal_code", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.country", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email", "recipient.phone", "choices[].input.delivery_window_id", "method_results". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFieldPath(): string|null { return $this->get('field_path'); }
    public function hasFieldPath(): bool { return $this->has('field_path'); }
    /** When the input is needed. Value enum: "quote", "selection", "pickup_availability". anyOf[1] (Value): string. When the input is needed. Value enum: "quote", "selection", "pickup_availability". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPurpose(): string|null { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
