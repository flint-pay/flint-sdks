<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $dispute_id
 * @property-read ?string $dispute_status
 * @property-read ?string $reason
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRestriction extends Model {
    /** @param array{'dispute_id'?: string, 'dispute_status'?: string, 'reason'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRestriction')); }
    /** Shape $ (Value): string. Present only for type funding_dispute. The dispute on the payment that funded value on this card. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getDisputeId(): ?string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Shape $ (Value): string. Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Value enum: "open", "lost".
     * @return ?string
     */
    public function getDisputeStatus(): ?string { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Shape $ (Value): string. Present only for type merchant_freeze. The merchant's freeze reason. Value enum: "suspicious_activity", "customer_request", "support_issue".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Value enum: "merchant_freeze", "funding_dispute".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
