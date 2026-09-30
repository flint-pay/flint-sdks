<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryInputConstraintInput|array<array-key, mixed>|\stdClass $constraint
 * @property-read list<string> $delivery_choice_group_ids
 * @property-read string $delivery_input_requirement_id
 * @property-read list<string> $delivery_method_ids
 * @property-read list<string> $delivery_option_ids
 * @property-read string $field_path
 * @property-read string $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryInputRequirementInput extends Model {
    /** @param array{'constraint': DeliveryInputConstraintInput|array<array-key, mixed>|\stdClass, 'delivery_choice_group_ids'?: list<string>, 'delivery_input_requirement_id': string, 'delivery_method_ids'?: list<string>, 'delivery_option_ids'?: list<string>, 'field_path': string, 'purpose': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInputRequirementInput')); }
    /** @return DeliveryInputConstraintInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When constraint is omitted; use hasConstraint() or valueOrDefault().
     */
    public function getConstraint(): mixed { return $this->get('constraint'); }
    public function hasConstraint(): bool { return $this->has('constraint'); }
    /** @return list<string>
     * @throws SdkError When delivery_choice_group_ids is omitted; use hasDeliveryChoiceGroupIds() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupIds(): array { return $this->get('delivery_choice_group_ids'); }
    public function hasDeliveryChoiceGroupIds(): bool { return $this->has('delivery_choice_group_ids'); }
    /** @return string
     * @throws SdkError When delivery_input_requirement_id is omitted; use hasDeliveryInputRequirementId() or valueOrDefault().
     */
    public function getDeliveryInputRequirementId(): string { return $this->get('delivery_input_requirement_id'); }
    public function hasDeliveryInputRequirementId(): bool { return $this->has('delivery_input_requirement_id'); }
    /** @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** @return list<string>
     * @throws SdkError When delivery_option_ids is omitted; use hasDeliveryOptionIds() or valueOrDefault().
     */
    public function getDeliveryOptionIds(): array { return $this->get('delivery_option_ids'); }
    public function hasDeliveryOptionIds(): bool { return $this->has('delivery_option_ids'); }
    /** @return string
     * @throws SdkError When field_path is omitted; use hasFieldPath() or valueOrDefault().
     */
    public function getFieldPath(): string { return $this->get('field_path'); }
    public function hasFieldPath(): bool { return $this->has('field_path'); }
    /** @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
