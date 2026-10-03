<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_revision
 * Presence-aware input; omitted fields throw when accessed. */
final class RemoveOrderGiftCardRequestInput extends Model {
    /** @param array{'order_revision': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RemoveOrderGiftCardRequestInput')); }
    /** @return string
     * @throws SdkError When order_revision is omitted; use hasOrderRevision() or valueOrDefault().
     */
    public function getOrderRevision(): string { return $this->get('order_revision'); }
    public function hasOrderRevision(): bool { return $this->has('order_revision'); }
}
