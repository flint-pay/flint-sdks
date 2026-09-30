<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $cancel_immediately
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelSubscriptionRequestInput extends Model {
    /** @param array{'cancel_immediately'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelSubscriptionRequestInput')); }
    /** @return bool
     * @throws SdkError When cancel_immediately is omitted; use hasCancelImmediately() or valueOrDefault().
     */
    public function getCancelImmediately(): bool { return $this->get('cancel_immediately'); }
    public function hasCancelImmediately(): bool { return $this->has('cancel_immediately'); }
}
