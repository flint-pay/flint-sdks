<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $accepted_at
 * @property-read string|null $text
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodConsentPreviousAttributes extends Model {
    /** @param array{'accepted_at'?: mixed, 'text'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodConsentPreviousAttributes')); }
    /** When the buyer accepted the wording, recorded when the payment attempt or card setup started. anyOf[1] (Value): string. When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptedAt(): string|null { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The wording the buyer agreed to when saving the card. anyOf[1] (Value): string. The wording the buyer agreed to when saving the card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getText(): string|null { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
