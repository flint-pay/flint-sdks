<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'launch_token': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionsRefreshInput extends Model {
    /** @param array{'body': array{'launch_token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionsRefreshInput')); }
    /** Refreshes a merchant account session from its signed launch token. No create fields are accepted. Example: {"launch_token":"aslaunch_v1.example"}.
     * @return array{'launch_token': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
