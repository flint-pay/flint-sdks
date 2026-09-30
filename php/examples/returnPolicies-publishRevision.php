<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  token: getenv('API_TOKEN') ?: '',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returnPolicies->publishRevision('example', [
  'expected_current_return_policy_revision_id' => 'example',
  'revision' => (object) [
    'approval_mode' => 'automatic',
    'eligibility_result' => 'ineligible',
    'is_merchandise_return_required' => true,
    'priority' => 1,
    'scope' => (object) [],
  ],
  'Idempotency-Key' => $idempotencyKey,
]);
echo $result->current_return_policy_revision_id . PHP_EOL;
echo $result->return_policy_id . PHP_EOL;
$client->close();
