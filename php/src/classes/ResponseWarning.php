<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read array<array-key, string> $context
 * @property-read string $message
 * @property-read list<NextAction> $next_actions
 * @property-read string $observed_at
 * @property-read string $promotion_code
 * @property-read string $reason
 * @property-read string $resource
 * @property-read string $resource_id
 * @property-read string $severity
 * @property-read MoneyValue $would_have_applied_money
 * Presence-aware response; omitted fields throw when accessed. */
final class ResponseWarning extends Model {
    /** @param array{'code': string, 'context'?: \stdClass, 'message': string, 'next_actions'?: list<mixed>, 'observed_at'?: string, 'promotion_code'?: string, 'reason'?: string, 'resource'?: string, 'resource_id'?: string, 'severity'?: string, 'would_have_applied_money'?: object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResponseWarning')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return array<array-key, string>
     * @throws SdkError When context is omitted; use hasContext() or valueOrDefault().
     */
    public function getContext(): array { return $this->get('context'); }
    public function hasContext(): bool { return $this->has('context'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return list<NextAction>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** @return string
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When resource is omitted; use hasResource() or valueOrDefault().
     */
    public function getResource(): string { return $this->get('resource'); }
    public function hasResource(): bool { return $this->has('resource'); }
    /** @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** @return string
     * @throws SdkError When severity is omitted; use hasSeverity() or valueOrDefault().
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
    /** @return MoneyValue
     * @throws SdkError When would_have_applied_money is omitted; use hasWouldHaveAppliedMoney() or valueOrDefault().
     */
    public function getWouldHaveAppliedMoney(): MoneyValue { return $this->get('would_have_applied_money'); }
    public function hasWouldHaveAppliedMoney(): bool { return $this->has('would_have_applied_money'); }
}
