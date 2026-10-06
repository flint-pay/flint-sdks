<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class CloseCheckoutSessionRequestInput extends Model {
    /** @param array{'reason_message'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CloseCheckoutSessionRequestInput')); }
    /** @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
