<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryInputConstraintPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $constraint
 * @property-read list<string>|null $delivery_choice_group_ids
 * @property-read string|null $delivery_input_requirement_id
 * @property-read list<string>|null $delivery_method_ids
 * @property-read list<string>|null $delivery_option_ids
 * @property-read string|null $field_path
 * @property-read string|null $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryInputRequirementPreviousAttributesInput extends Model {
    /** @param array{'constraint'?: DeliveryInputConstraintPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_choice_group_ids'?: list<string>|null, 'delivery_input_requirement_id'?: string|null, 'delivery_method_ids'?: list<string>|null, 'delivery_option_ids'?: list<string>|null, 'field_path'?: string|null, 'purpose'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputRequirementPreviousAttributesInput')); }
    /** The rules the input must follow. anyOf[1] (Value): {@see DeliveryInputConstraintPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryInputConstraintPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When constraint is omitted; use hasConstraint() or valueOrDefault().
     */
    public function getConstraint(): mixed { return $this->get('constraint'); }
    public function hasConstraint(): bool { return $this->has('constraint'); }
    /** Choice groups that need this input. anyOf[1] (Value): Array of string. Choice groups that need this input. anyOf[1][] (Value): string. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When delivery_choice_group_ids is omitted; use hasDeliveryChoiceGroupIds() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupIds(): mixed { return $this->get('delivery_choice_group_ids'); }
    public function hasDeliveryChoiceGroupIds(): bool { return $this->has('delivery_choice_group_ids'); }
    /** Unique ID of this requirement. anyOf[1] (Value): string. Unique ID of this requirement. Example: "req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_input_requirement_id is omitted; use hasDeliveryInputRequirementId() or valueOrDefault().
     */
    public function getDeliveryInputRequirementId(): mixed { return $this->get('delivery_input_requirement_id'); }
    public function hasDeliveryInputRequirementId(): bool { return $this->has('delivery_input_requirement_id'); }
    /** Delivery methods that need this input. anyOf[1] (Value): Array of string. Delivery methods that need this input. anyOf[1][] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): mixed { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. anyOf[1] (Value): Array of string. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. anyOf[1][] (Value): string. Example: "dopt_01KEZF7C00JM9TDZQZ5KQJ6923". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When delivery_option_ids is omitted; use hasDeliveryOptionIds() or valueOrDefault().
     */
    public function getDeliveryOptionIds(): mixed { return $this->get('delivery_option_ids'); }
    public function hasDeliveryOptionIds(): bool { return $this->has('delivery_option_ids'); }
    /** Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.country", "destination_address.state", "destination_address.postal_code", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.country", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email", "recipient.phone", "choices[].input.delivery_window_id", "method_results". anyOf[1] (Value): string. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Value enum: "destination_address", "destination_address.line1", "destination_address.line2", "destination_address.city", "destination_address.country", "destination_address.state", "destination_address.postal_code", "buyer_location", "buyer_location.address.line1", "buyer_location.address.line2", "buyer_location.address.city", "buyer_location.address.country", "buyer_location.address.state", "buyer_location.address.postal_code", "buyer_location.coordinate", "pickup_location_id", "recipient.name", "recipient.email", "recipient.phone", "choices[].input.delivery_window_id", "method_results". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When field_path is omitted; use hasFieldPath() or valueOrDefault().
     */
    public function getFieldPath(): mixed { return $this->get('field_path'); }
    public function hasFieldPath(): bool { return $this->has('field_path'); }
    /** When the input is needed. Value enum: "quote", "selection", "pickup_availability". anyOf[1] (Value): string. When the input is needed. Value enum: "quote", "selection", "pickup_availability". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): mixed { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
