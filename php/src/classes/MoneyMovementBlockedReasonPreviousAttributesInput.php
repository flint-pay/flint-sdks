<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $message
 * @property-read string|null $next_steps
 * @property-read string|null $param
 * @property-read string|null $resolution_owner
 * @property-read bool|null $retryable
 * Presence-aware input; omitted fields throw when accessed. */
final class MoneyMovementBlockedReasonPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'message'?: string|null, 'next_steps'?: string|null, 'param'?: string|null, 'resolution_owner'?: string|null, 'retryable'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementBlockedReasonPreviousAttributesInput')); }
    /** Code of the error the blocked action would return. anyOf[1] (Value): string. Code of the error the blocked action would return. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Why the action is blocked. anyOf[1] (Value): string. Why the action is blocked. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): mixed { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** What to do to unblock the action. anyOf[1] (Value): string. What to do to unblock the action. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When next_steps is omitted; use hasNextSteps() or valueOrDefault().
     */
    public function getNextSteps(): mixed { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** The request field the block concerns. anyOf[1] (Value): string. The request field the block concerns. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): mixed { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". anyOf[1] (Value): string. Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When resolution_owner is omitted; use hasResolutionOwner() or valueOrDefault().
     */
    public function getResolutionOwner(): mixed { return $this->get('resolution_owner'); }
    public function hasResolutionOwner(): bool { return $this->has('resolution_owner'); }
    /** Whether trying the action again after the block clears can succeed. anyOf[1] (Value): boolean. Whether trying the action again after the block clears can succeed. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): mixed { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
}
