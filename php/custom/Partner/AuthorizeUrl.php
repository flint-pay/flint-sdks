<?php
declare(strict_types=1);

namespace Flint\Partner;

/**
 * The consent URL and the values to store with this authorization attempt. Keep
 * codeVerifier server-side. Handwritten; regeneration keeps it.
 */
final class AuthorizeUrl
{
    public function __construct(
        /** Redirect the merchant's browser here. */
        public readonly string $url,
        /** Compare with the callback's state. */
        public readonly string $state,
        /** Send to OAuth::exchangeCode(). */
        public readonly string $codeVerifier,
    ) {}

    /** @return array{url: string, state: string} */
    public function __debugInfo(): array
    {
        return ['url' => $this->url, 'state' => $this->state];
    }
}
