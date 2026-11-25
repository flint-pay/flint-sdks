<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $accepted_at
 * @property-read string $text
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodConsentInput extends Model {
    /** @param array{'accepted_at': string|\DateTimeInterface, 'text': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodConsentInput')); }
    /** When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When accepted_at is omitted; use hasAcceptedAt() or valueOrDefault().
     */
    public function getAcceptedAt(): string|\DateTimeInterface { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The wording the buyer agreed to when saving the card.
     * @return string
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): string { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
