<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read ?string $message
 * @property-read ?string $next_steps
 * @property-read ?string $param
 * @property-read ?string $resolution_owner
 * @property-read ?bool $retryable
 * Presence-aware response; omitted optional fields return null. */
final class MoneyMovementBlockedReason extends Model {
    /** @param array{'code': string, 'message'?: string, 'next_steps'?: string, 'param'?: string, 'resolution_owner'?: string, 'retryable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementBlockedReason')); }
    /** Code of the error the blocked action would return.
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Why the action is blocked.
     * @return ?string
     */
    public function getMessage(): ?string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** What to do to unblock the action.
     * @return ?string
     */
    public function getNextSteps(): ?string { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** The request field the block concerns.
     * @return ?string
     */
    public function getParam(): ?string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** Who can resolve the block. Value enum: "merchant", "flint", "integrator", "buyer".
     * @return ?string
     */
    public function getResolutionOwner(): ?string { return $this->get('resolution_owner'); }
    public function hasResolutionOwner(): bool { return $this->has('resolution_owner'); }
    /** Whether trying the action again after the block clears can succeed.
     * @return ?bool
     */
    public function getRetryable(): ?bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
}
