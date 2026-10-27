<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $demo_session_id
 * @property-read string $template
 * Presence-aware input; omitted fields throw when accessed. */
final class ResetDemoSessionRequestInput extends Model {
    /** @param array{'demo_session_id': string, 'template'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResetDemoSessionRequestInput')); }
    /** Shape $ (Value): string. The active or provisioning demo session to reset for this client. minLength: 1.
     * @return string
     * @throws SdkError When demo_session_id is omitted; use hasDemoSessionId() or valueOrDefault().
     */
    public function getDemoSessionId(): string { return $this->get('demo_session_id'); }
    public function hasDemoSessionId(): bool { return $this->has('demo_session_id'); }
    /** Shape $ (Value): string. Omit to use quickstart. An explicit empty or unsupported template is invalid. Default: "quickstart". Value enum: "quickstart".
     * @return string
     * @throws SdkError When template is omitted; use hasTemplate() or valueOrDefault().
     */
    public function getTemplate(): string { return $this->get('template'); }
    public function hasTemplate(): bool { return $this->has('template'); }
}
