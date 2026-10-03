<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_id
 * @property-read string $funding_source_type
 * @property-read string $order_id
 * @property-read string $payment_intent_id
 * @property-read string $reference_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingSourceInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingSourceInput')); }
    /** @return string
     * @throws SdkError When buyer_id is omitted; use hasBuyerId() or valueOrDefault().
     */
    public function getBuyerId(): string { return $this->get('buyer_id'); }
    public function hasBuyerId(): bool { return $this->has('buyer_id'); }
    /** @return string
     * @throws SdkError When funding_source_type is omitted; use hasFundingSourceType() or valueOrDefault().
     */
    public function getFundingSourceType(): string { return $this->get('funding_source_type'); }
    public function hasFundingSourceType(): bool { return $this->has('funding_source_type'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return string
     * @throws SdkError When reference_id is omitted; use hasReferenceId() or valueOrDefault().
     */
    public function getReferenceId(): string { return $this->get('reference_id'); }
    public function hasReferenceId(): bool { return $this->has('reference_id'); }
}
