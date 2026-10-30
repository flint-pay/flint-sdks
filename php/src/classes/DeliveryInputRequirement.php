<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryInputConstraint $constraint
 * @property-read ?list<string> $delivery_choice_group_ids
 * @property-read string $delivery_input_requirement_id
 * @property-read ?list<string> $delivery_method_ids
 * @property-read ?list<string> $delivery_option_ids
 * @property-read string $field_path
 * @property-read string $purpose
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryInputRequirement extends Model {
    /** @param array{'constraint': mixed, 'delivery_choice_group_ids'?: list<string>, 'delivery_input_requirement_id': string, 'delivery_method_ids'?: list<string>, 'delivery_option_ids'?: list<string>, 'field_path': string, 'purpose': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputRequirement')); }
    /** The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.
     * @return DeliveryInputConstraint
     */
    public function getConstraint(): DeliveryInputConstraint { return $this->get('constraint'); }
    public function hasConstraint(): bool { return $this->has('constraint'); }
    /**  [] (Value): string.
     * @return ?list<string>
     */
    public function getDeliveryChoiceGroupIds(): ?array { return $this->get('delivery_choice_group_ids'); }
    public function hasDeliveryChoiceGroupIds(): bool { return $this->has('delivery_choice_group_ids'); }
    /** delivery_input_requirement_id
     * @return string
     */
    public function getDeliveryInputRequirementId(): string { return $this->get('delivery_input_requirement_id'); }
    public function hasDeliveryInputRequirementId(): bool { return $this->has('delivery_input_requirement_id'); }
    /**  [] (Value): string.
     * @return ?list<string>
     */
    public function getDeliveryMethodIds(): ?array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /**  [] (Value): string.
     * @return ?list<string>
     */
    public function getDeliveryOptionIds(): ?array { return $this->get('delivery_option_ids'); }
    public function hasDeliveryOptionIds(): bool { return $this->has('delivery_option_ids'); }
    /** Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.country", "destination_address.state", "destination_address.postal_code", "buyer_location", "buyer_location.line1", "buyer_location.line2", "buyer_location.city", "buyer_location.country", "buyer_location.state", "buyer_location.postal_code", "buyer_location.coordinate", "recipient.name", "recipient.email", "recipient.phone", "choices[].input.delivery_window_id", "caller_supplied_rates".
     * @return string
     */
    public function getFieldPath(): string { return $this->get('field_path'); }
    public function hasFieldPath(): bool { return $this->has('field_path'); }
    /** Value enum: "quote", "selection", "pickup_availability".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
