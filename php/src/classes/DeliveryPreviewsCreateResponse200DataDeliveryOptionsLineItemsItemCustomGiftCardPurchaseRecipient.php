<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read ?string $message
 * @property-read ?string $name
 * @property-read ?string $send_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient extends Model {
    /** @param array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient')); }
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string. maxLength: 200.
     * @return ?string
     */
    public function getMessage(): ?string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: date-time.
     * @return ?string
     */
    public function getSendAt(): ?string { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
}
