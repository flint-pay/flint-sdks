<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'customer',
  credentials: [
    'customer' => [
      'CustomerSessionBearer' => getenv('API_CUSTOMER_CUSTOMERSESSIONBEARER') ?: '',
    ],
  ],
));
$result = $client->me->createReturnPreview([
  'mode' => 'eligibility',
  'eligibility' => (object) [
    'order_id' => 'example',
    'selection' => (object) [
      'selection_type' => 'all_remaining_fulfilled',
    ],
  ],
], new RequestOptions(maxAttempts: 1));
$client->close();
