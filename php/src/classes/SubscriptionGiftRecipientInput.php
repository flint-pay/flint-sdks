<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read string|null $message
 * @property-read string|null $name
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionGiftRecipientInput extends Model {
    /** @param array{'email': string, 'message': string|null, 'name': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionGiftRecipientInput')); }
    /** The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: email. Example: "buyer@example.com".
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note.
     * @return string|null
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** The recipient's name, shown in their gift emails. Null when no name was given.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
