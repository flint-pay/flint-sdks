<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read ?list<ErrorDetail> $details
 * @property-read string $message
 * @property-read ?string $param
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewError extends Model {
    /** @param array{'code': string, 'details'?: list<mixed>, 'message': string, 'param'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewError')); }
    /** code
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /**  [] (Value): {@see ErrorDetail}. One specific failure within an error, with a `code` and `message` plus fields that depend on the code, such as the `param`, resource, quantity, or amount involved.
     * @return ?list<ErrorDetail>
     */
    public function getDetails(): ?array { return $this->get('details'); }
    public function hasDetails(): bool { return $this->has('details'); }
    /** message
     * @return string
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** param
     * @return ?string
     */
    public function getParam(): ?string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
}
