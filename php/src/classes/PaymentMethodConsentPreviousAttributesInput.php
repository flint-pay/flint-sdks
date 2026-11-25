<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $accepted_at
 * @property-read string|null $text
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodConsentPreviousAttributesInput extends Model {
    /** @param array{'accepted_at'?: string|\DateTimeInterface|null, 'text'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodConsentPreviousAttributesInput')); }
    /** When the buyer accepted the wording, recorded when the payment attempt or card setup started. anyOf[1] (Value): string. When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When accepted_at is omitted; use hasAcceptedAt() or valueOrDefault().
     */
    public function getAcceptedAt(): mixed { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The wording the buyer agreed to when saving the card. anyOf[1] (Value): string. The wording the buyer agreed to when saving the card. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
