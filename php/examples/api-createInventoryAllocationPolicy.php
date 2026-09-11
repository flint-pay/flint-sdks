<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryAllocationPolicyInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateInventoryAllocationPolicyInput([
  'body' => (object) [
    'configuration' => (object) [
      'location_groups' => [
        (object) [
          'group_priority' => 1,
          'location_id' => 'example',
        ],
      ],
      'maximum_locations_per_assignment' => 1,
      'splitting_behavior' => 'single_location',
    ],
    'name' => 'example',
  ],
]);
$result = $client->api->createInventoryAllocationPolicy($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->inventory_allocation_policy_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
