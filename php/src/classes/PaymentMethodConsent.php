<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accepted_at
 * @property-read string $text
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodConsent extends Model {
    /** @param array{'accepted_at': string, 'text': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodConsent')); }
    /** When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: date-time.
     * @return string
     */
    public function getAcceptedAt(): string { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The wording the buyer agreed to when saving the card.
     * @return string
     */
    public function getText(): string { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
