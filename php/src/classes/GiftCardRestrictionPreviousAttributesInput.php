<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $dispute_id
 * @property-read string|null $dispute_status
 * @property-read string|null $reason
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRestrictionPreviousAttributesInput extends Model {
    /** @param array{'dispute_id'?: string|null, 'dispute_status'?: string|null, 'reason'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRestrictionPreviousAttributesInput')); }
    /** Present only for type funding_dispute. The dispute on the payment that funded value on this card. anyOf[1] (Value): string. Present only for type funding_dispute. The dispute on the payment that funded value on this card. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): mixed { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Value enum: "open", "lost". anyOf[1] (Value): string. Present only for type funding_dispute. A copy of the funding dispute's current state. lost means the loss must be honored with a gift card funding disposition before the card can be spent. Value enum: "open", "lost". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dispute_status is omitted; use hasDisputeStatus() or valueOrDefault().
     */
    public function getDisputeStatus(): mixed { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Present only for type merchant_freeze. The merchant's freeze reason. Value enum: "suspicious_activity", "customer_request", "support_issue". anyOf[1] (Value): string. Present only for type merchant_freeze. The merchant's freeze reason. Value enum: "suspicious_activity", "customer_request", "support_issue". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Value enum: "merchant_freeze", "funding_dispute". anyOf[1] (Value): string. The kind of restriction. merchant_freeze is a freeze requested by the merchant. funding_dispute is a dispute on the payment that funded value on this card. Value enum: "merchant_freeze", "funding_dispute". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
