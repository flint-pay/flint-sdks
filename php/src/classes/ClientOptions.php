<?php
declare(strict_types=1);
namespace Flint;
final class ClientOptions
{
    public function __construct(
        public readonly ?string $baseUrl = null,
        public readonly ?string $token = null,
        public readonly ?array $allowedOrigins = null,
        public readonly bool $allowInsecureHttp = false,
        public readonly int $timeoutMs = 10000,
        public readonly int $deadlineMs = 30000,
        // Keep fractions intact in weak-mode PHP so request validation can reject them.
        public readonly int|float|null $maxAttempts = null,
        public readonly ?\Closure $transport = null,
        public readonly ?\Closure $diagnostics = null,
        public readonly array $redactFields = [],
        public readonly ?string $authMode = null,
        public readonly array $credentials = [],
        public readonly ?string $apiKey = null,
        public readonly ?string $customerToken = null,
        public readonly ?string $invoiceToken = null,
        public readonly ?string $onboardingToken = null,
    ) {}
    public function __debugInfo(): array
    {
        return ['baseUrl' => $this->baseUrl, 'token' => '[REDACTED]'];
    }
}
