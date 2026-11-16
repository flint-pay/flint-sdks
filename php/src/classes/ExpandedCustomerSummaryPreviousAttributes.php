<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $email
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedCustomerSummaryPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'customer_id'?: mixed, 'email'?: mixed, 'name'?: mixed, 'phone'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedCustomerSummaryPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for this customer, prefixed `cus_`. anyOf[1] (Value): string. Unique identifier for this customer, prefixed `cus_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Customer email. `null` when the customer has none. Unique among the environment's customers. anyOf[1] (Value): string. Customer email. `null` when the customer has none. Unique among the environment's customers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Customer name. `null` when none is set. anyOf[1] (Value): string. Customer name. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Customer phone number. `null` when none is set. anyOf[1] (Value): string. Customer phone number. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted". anyOf[1] (Value): string. Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
