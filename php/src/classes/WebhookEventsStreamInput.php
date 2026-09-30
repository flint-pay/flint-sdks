<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $event_type
 * @property-read string $after_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEventsStreamInput extends Model {
    /** @param array{'event_type'?: string, 'after_event_id'?: string, 'Last-Event-ID'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventsStreamInput')); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** @return string
     * @throws SdkError When after_event_id is omitted; use hasAfterEventId() or valueOrDefault().
     */
    public function getAfterEventId(): string { return $this->get('after_event_id'); }
    public function hasAfterEventId(): bool { return $this->has('after_event_id'); }
    /** @return string
     * @throws SdkError When Last-Event-ID is omitted; use hasLastEventId() or valueOrDefault().
     */
    public function getLastEventId(): string { return $this->get('Last-Event-ID'); }
    public function hasLastEventId(): bool { return $this->has('Last-Event-ID'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
