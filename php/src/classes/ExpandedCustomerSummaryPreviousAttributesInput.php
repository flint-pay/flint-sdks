<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null|null $email
 * @property-read string|null|null $name
 * @property-read string|null|null $phone
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedCustomerSummaryPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'customer_id'?: string|null, 'email'?: string|null|null, 'name'?: string|null|null, 'phone'?: string|null|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedCustomerSummaryPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for this customer, prefixed `cus_`. anyOf[1] (Value): string. Unique identifier for this customer, prefixed `cus_`. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Customer email. `null` when the customer has none. Unique among the environment's customers. anyOf[1] (Value): string or null. Customer email. `null` when the customer has none. Unique among the environment's customers. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Customer name. `null` when none is set. anyOf[1] (Value): string or null. Customer name. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Customer phone number. `null` when none is set. anyOf[1] (Value): string or null. Customer phone number. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): mixed { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted". anyOf[1] (Value): string. Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
