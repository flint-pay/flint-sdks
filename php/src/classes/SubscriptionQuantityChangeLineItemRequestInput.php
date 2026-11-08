<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $quantity
 * @property-read string $subscription_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionQuantityChangeLineItemRequestInput extends Model {
    /** @param array{'quantity': int, 'subscription_line_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionQuantityChangeLineItemRequestInput')); }
    /** Whole-number line quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The existing subscription line to change. minLength: 1. pattern: ^sli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
     * @return string
     * @throws SdkError When subscription_line_item_id is omitted; use hasSubscriptionLineItemId() or valueOrDefault().
     */
    public function getSubscriptionLineItemId(): string { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
}
