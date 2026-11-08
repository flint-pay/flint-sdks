<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_id
 * @property-read string $refresh_token
 * Presence-aware input; omitted fields throw when accessed. */
final class CLIContextsRequestInput extends Model {
    /** @param array{'client_id': string, 'refresh_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLIContextsRequestInput')); }
    /** Example: "flint-cli". Value enum: "flint-cli".
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** refresh_token
     * @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
}
