<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $event_type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateWebhookTestEventRequestInput extends Model {
    /** @param array{'event_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateWebhookTestEventRequestInput')); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
}
