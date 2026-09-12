<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
// Reuse this key when retrying the same action.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnPolicies->create([
  'name' => 'example',
  'revision' => (object) [
    'approval_mode' => 'automatic',
    'eligibility_result' => 'ineligible',
    'is_merchandise_return_required' => true,
    'priority' => 1,
    'scope' => (object) [],
  ],
  'Idempotency-Key' => $idempotencyKey,
], new RequestOptions(maxAttempts: 1));
echo $result->current_return_policy_revision_id . PHP_EOL;
echo $result->return_policy_id . PHP_EOL;
$client->close();
