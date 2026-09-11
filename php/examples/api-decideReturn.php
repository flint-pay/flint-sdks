<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiDecideReturnInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiDecideReturnInput([
  'return_id' => 'example',
  'body' => (object) [
    'line_items' => [
      (object) [
        'approved_quantity' => '0',
        'decision_basis' => 'policy_evaluation',
        'return_line_item_id' => 'example',
      ],
    ],
  ],
]);
$result = $client->api->decideReturn($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->order_id . PHP_EOL;
echo $result->data->data->return_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
