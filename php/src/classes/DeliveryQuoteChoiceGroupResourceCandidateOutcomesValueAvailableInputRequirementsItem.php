<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItemConstraint $constraint
 * @property-read ?list<string> $delivery_choice_group_ids
 * @property-read string $delivery_input_requirement_id
 * @property-read ?list<string> $delivery_method_ids
 * @property-read ?list<string> $delivery_option_ids
 * @property-read string $field_path
 * @property-read string $purpose
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItem extends Model {
    /** @param array{'constraint': mixed, 'delivery_choice_group_ids'?: list<string>, 'delivery_input_requirement_id': string, 'delivery_method_ids'?: list<string>, 'delivery_option_ids'?: list<string>, 'field_path': string, 'purpose': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItem')); }
    /** The rules the input must follow. The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.
     * @return DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItemConstraint
     */
    public function getConstraint(): DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItemConstraint { return $this->get('constraint'); }
    public function hasConstraint(): bool { return $this->has('constraint'); }
    /** Choice groups that need this input. [] (Value): string.
     * @return ?list<string>
     */
    public function getDeliveryChoiceGroupIds(): ?array { return $this->get('delivery_choice_group_ids'); }
    public function hasDeliveryChoiceGroupIds(): bool { return $this->has('delivery_choice_group_ids'); }
    /** Unique ID of this requirement.
     * @return string
     */
    public function getDeliveryInputRequirementId(): string { return $this->get('delivery_input_requirement_id'); }
    public function hasDeliveryInputRequirementId(): bool { return $this->has('delivery_input_requirement_id'); }
    /** Delivery methods that need this input. [] (Value): string.
     * @return ?list<string>
     */
    public function getDeliveryMethodIds(): ?array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. [] (Value): string.
     * @return ?list<string>
     */
    public function getDeliveryOptionIds(): ?array { return $this->get('delivery_option_ids'); }
    public function hasDeliveryOptionIds(): bool { return $this->has('delivery_option_ids'); }
    /** Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.country", "destination_address.state", "destination_address.postal_code", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.country", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.coordinate", "recipient.name", "recipient.email", "recipient.phone", "choices[].input.delivery_window_id", "method_results".
     * @return string
     */
    public function getFieldPath(): string { return $this->get('field_path'); }
    public function hasFieldPath(): bool { return $this->has('field_path'); }
    /** When the input is needed. Value enum: "quote", "selection", "pickup_availability".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
