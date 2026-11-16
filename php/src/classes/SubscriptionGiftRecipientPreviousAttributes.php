<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $message
 * @property-read string|null $name
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionGiftRecipientPreviousAttributes extends Model {
    /** @param array{'email'?: mixed, 'message'?: mixed, 'name'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionGiftRecipientPreviousAttributes')); }
    /** The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. anyOf[1] (Value): string. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: email. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. anyOf[1] (Value): string. A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** The recipient's name, shown in their gift emails. Null when no name was given. anyOf[1] (Value): string. The recipient's name, shown in their gift emails. Null when no name was given. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
