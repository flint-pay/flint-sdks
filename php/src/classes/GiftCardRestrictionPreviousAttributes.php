<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $dispute_id
 * @property-read string|null $dispute_status
 * @property-read string|null $reason
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRestrictionPreviousAttributes extends Model {
    /** @param array{'dispute_id'?: mixed, 'dispute_status'?: mixed, 'reason'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRestrictionPreviousAttributes')); }
    /** Present only for type funding_dispute. The dispute on the payment that funded value on this card. anyOf[1] (Value): string. Present only for type funding_dispute. The dispute on the payment that funded value on this card. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeId(): string|null { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Value enum: "open", "lost". anyOf[1] (Value): string. Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Value enum: "open", "lost". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeStatus(): string|null { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Present only for type merchant_freeze. The merchant's freeze reason. Value enum: "suspicious_activity", "customer_request", "support_issue". anyOf[1] (Value): string. Present only for type merchant_freeze. The merchant's freeze reason. Value enum: "suspicious_activity", "customer_request", "support_issue". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Value enum: "merchant_freeze", "funding_dispute". anyOf[1] (Value): string. The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Value enum: "merchant_freeze", "funding_dispute". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
