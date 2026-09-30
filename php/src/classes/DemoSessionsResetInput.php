<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'template'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DemoSessionsResetInput extends Model {
    /** @param array{'X-Turnstile-Token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'template'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionsResetInput')); }
    /** @return string
     * @throws SdkError When X-Turnstile-Token is omitted; use hasXTurnstileToken() or valueOrDefault().
     */
    public function getXTurnstileToken(): string { return $this->get('X-Turnstile-Token'); }
    public function hasXTurnstileToken(): bool { return $this->has('X-Turnstile-Token'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'template'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
