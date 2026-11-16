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
 * Presence-aware response; omitted optional fields return null. */
final class MoneyMovementBlockedReasonPreviousAttributes extends Model {
    /** @param array{'code'?: mixed, 'message'?: mixed, 'next_steps'?: mixed, 'param'?: mixed, 'resolution_owner'?: mixed, 'retryable'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementBlockedReasonPreviousAttributes')); }
    /** Code of the error the blocked action would return. anyOf[1] (Value): string. Code of the error the blocked action would return. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Why the action is blocked. anyOf[1] (Value): string. Why the action is blocked. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** What to do to unblock the action. anyOf[1] (Value): string. What to do to unblock the action. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNextSteps(): string|null { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** The request field the block concerns. anyOf[1] (Value): string. The request field the block concerns. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getParam(): string|null { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". anyOf[1] (Value): string. Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResolutionOwner(): string|null { return $this->get('resolution_owner'); }
    public function hasResolutionOwner(): bool { return $this->has('resolution_owner'); }
    /** Whether trying the action again after the block clears can succeed. anyOf[1] (Value): boolean. Whether trying the action again after the block clears can succeed. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRetryable(): bool|null { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
}
