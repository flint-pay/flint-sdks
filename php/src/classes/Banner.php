<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_href
 * @property-read string $action_label
 * @property-read string $dismissible_id
 * @property-read string $message
 * @property-read string $style
 * Presence-aware response; omitted fields throw when accessed. */
final class Banner extends Model {
    /** @param array{'action_href'?: string, 'action_label'?: string, 'dismissible_id'?: string, 'message': string, 'style': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Banner')); }
    /** @return string
     * @throws SdkError When action_href is omitted; use hasActionHref() or valueOrDefault().
     */
    public function getActionHref(): string { return $this->get('action_href'); }
    public function hasActionHref(): bool { return $this->has('action_href'); }
    /** @return string
     * @throws SdkError When action_label is omitted; use hasActionLabel() or valueOrDefault().
     */
    public function getActionLabel(): string { return $this->get('action_label'); }
    public function hasActionLabel(): bool { return $this->has('action_label'); }
    /** @return string
     * @throws SdkError When dismissible_id is omitted; use hasDismissibleId() or valueOrDefault().
     */
    public function getDismissibleId(): string { return $this->get('dismissible_id'); }
    public function hasDismissibleId(): bool { return $this->has('dismissible_id'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return string
     * @throws SdkError When style is omitted; use hasStyle() or valueOrDefault().
     */
    public function getStyle(): string { return $this->get('style'); }
    public function hasStyle(): bool { return $this->has('style'); }
}
