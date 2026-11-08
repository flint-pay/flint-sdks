<?php
declare(strict_types=1);

namespace Flint\Partner;

use Flint\Client;

/**
 * Partner app token credentials (client_credentials) for one mode. forMerchant()
 * returns a merchant-bound provider for a client's token, so requests need no
 * Flint-Merchant-Id; app() returns an app-level provider whose requests must name
 * the merchant in Flint-Merchant-Id. Providers are reused per merchant.
 * Handwritten; regeneration keeps it.
 */
final class PartnerAppTokens
{
    /** @var array<string, PartnerAppCredentials> */
    private array $merchants = [];
    private ?PartnerAppCredentials $app = null;

    public function __construct(
        private readonly Client $client,
        private readonly ClientAssertionProvider $clientAssertion,
        public readonly string $mode,
        private readonly int $refreshBeforeSeconds = 60,
    ) {
        if ($mode !== 'test' && $mode !== 'live') {
            OAuth::fail('mode', 'mode must be "test" or "live"');
        }
        if ($refreshBeforeSeconds < 0 || $refreshBeforeSeconds > 600) {
            OAuth::fail('refreshBeforeSeconds', 'refreshBeforeSeconds must be an integer from 0 to 600');
        }
    }

    public function forMerchant(string $merchantId): PartnerAppCredentials
    {
        if (!preg_match('/^mer_[0-9A-HJKMNP-TV-Z]{26}$/D', OAuth::text($merchantId, 'merchantId'))) {
            OAuth::fail('merchantId', 'merchantId must be a Flint merchant ID such as mer_01KEZF7C00KPYH1DDFPCCX3B6E');
        }
        return $this->merchants[$merchantId] ??= new PartnerAppCredentials(
            $this->client,
            $this->clientAssertion,
            $this->mode,
            $merchantId,
            $this->refreshBeforeSeconds,
        );
    }

    public function app(): PartnerAppCredentials
    {
        return $this->app ??= new PartnerAppCredentials(
            $this->client,
            $this->clientAssertion,
            $this->mode,
            null,
            $this->refreshBeforeSeconds,
        );
    }

    /** @return array{mode: string, merchants: int} */
    public function __debugInfo(): array
    {
        return ['mode' => $this->mode, 'merchants' => count($this->merchants)];
    }
}
