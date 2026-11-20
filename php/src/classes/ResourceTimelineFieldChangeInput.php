<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read null|string|array{'amount': string, 'currency': string}|object $after
 * @property-read null|string|array{'amount': string, 'currency': string}|object $before
 * @property-read string $field
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineFieldChangeInput extends Model {
    /** @param array{'after': null|string|array{'amount': string, 'currency': string}|object, 'before': null|string|array{'amount': string, 'currency': string}|object, 'field': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineFieldChangeInput')); }
    /** Value after the change. Null when the field was unset. oneOf[1] (Value): null. oneOf[2] (Value): string. oneOf[3] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return null|string|array{'amount': string, 'currency': string}|object
     * @throws SdkError When after is omitted; use hasAfter() or valueOrDefault().
     */
    public function getAfter(): mixed { return $this->get('after'); }
    public function hasAfter(): bool { return $this->has('after'); }
    /** Value before the change. Null when the field was unset. oneOf[1] (Value): null. oneOf[2] (Value): string. oneOf[3] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return null|string|array{'amount': string, 'currency': string}|object
     * @throws SdkError When before is omitted; use hasBefore() or valueOrDefault().
     */
    public function getBefore(): mixed { return $this->get('before'); }
    public function hasBefore(): bool { return $this->has('before'); }
    /** Dot-separated field path on the resource described by this event.
     * @return string
     * @throws SdkError When field is omitted; use hasField() or valueOrDefault().
     */
    public function getField(): string { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
}
