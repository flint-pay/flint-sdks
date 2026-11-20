<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $after
 * @property-read mixed $before
 * @property-read string $field
 * Presence-aware response; omitted optional fields return null. */
final class ResourceTimelineFieldChange extends Model {
    /** @param array{'after': mixed, 'before': mixed, 'field': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineFieldChange')); }
    /** Value after the change. Null when the field was unset. oneOf[1] (Value): null. oneOf[2] (Value): string. oneOf[3] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return mixed
     */
    public function getAfter(): mixed { return $this->get('after'); }
    public function hasAfter(): bool { return $this->has('after'); }
    /** Value before the change. Null when the field was unset. oneOf[1] (Value): null. oneOf[2] (Value): string. oneOf[3] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return mixed
     */
    public function getBefore(): mixed { return $this->get('before'); }
    public function hasBefore(): bool { return $this->has('before'); }
    /** Dot-separated field path on the resource described by this event.
     * @return string
     */
    public function getField(): string { return $this->get('field'); }
    public function hasField(): bool { return $this->has('field'); }
}
