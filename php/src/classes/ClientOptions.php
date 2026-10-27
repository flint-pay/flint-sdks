<?php
declare(strict_types=1);
namespace Flint;
/** Client environment, credentials and transport defaults. See RUNTIME.md#clientoptions. */
final class ClientOptions
{
    public function __construct(
        public readonly ?string $baseUrl = null,
        public readonly string|CredentialProvider|\Closure|null $token = null,
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
        public readonly string|CredentialProvider|\Closure|null $apiKey = null,
        public readonly string|CredentialProvider|\Closure|null $checkoutToken = null,
        public readonly string|CredentialProvider|\Closure|null $customerToken = null,
        public readonly string|CredentialProvider|\Closure|null $invoiceToken = null,
        public readonly string|CredentialProvider|\Closure|null $onboardingToken = null,
        public readonly bool $ambientCredentials = true,
        public readonly ?object $credentialCache = null,
    ) {}
    public function __debugInfo(): array
    {
        return ['baseUrl' => $this->baseUrl, 'token' => '[REDACTED]'];
    }
}
