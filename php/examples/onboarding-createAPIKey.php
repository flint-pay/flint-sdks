<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$onboardingToken = getenv('ONBOARDING_TOKEN');
if ($onboardingToken === false || $onboardingToken === '') throw new \RuntimeException('Set ONBOARDING_TOKEN: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  onboardingToken: $onboardingToken,
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$input = [
  'body' => (object) [
    'name' => 'example',
  ],
];
$result = $client->onboarding->createAPIKey($input, new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->api_key_id . PHP_EOL;
echo $result->status . PHP_EOL;
$client->close();
