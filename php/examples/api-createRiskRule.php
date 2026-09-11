<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateRiskRuleInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateRiskRuleInput([
  'body' => (object) [
    'action' => 'review',
    'description' => 'Synthetic SDK example',
    'predicate' => (object) [
      'attribute' => 'payment_method_type',
      'operator' => 'eq',
      'value' => 'card',
    ],
  ],
]);
$result = $client->api->createRiskRule($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->risk_rule_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
