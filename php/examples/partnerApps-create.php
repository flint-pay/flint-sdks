<?php
declare(strict_types=1);
$autoload = __DIR__;
while (!is_file($autoload . '/vendor/autoload.php') && !is_file($autoload . '/autoload.php')) {
    $parent = dirname($autoload);
    if ($parent === $autoload) throw new \RuntimeException('Run composer install in the application before running this example.');
    $autoload = $parent;
}
require_once is_file($autoload . '/vendor/autoload.php') ? $autoload . '/vendor/autoload.php' : $autoload . '/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('FLINT_BASE_URL') ?: null;
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->partnerApps->create([
  'default_requested_permissions' => [
    'manage_orders',
  ],
  'name' => 'Acme Commerce Plugin',
  'permission_manifest' => [
    (object) [
      'description' => 'Read and update Flint orders for installed merchants.',
      'permission_id' => 'manage_orders',
      'required_scopes' => [
        'commerce.orders.read',
        'commerce.orders.write',
      ],
      'title' => 'Manage orders',
    ],
    (object) [
      'description' => 'Read and update customer records for installed merchants.',
      'optional' => true,
      'permission_id' => 'manage_customers',
      'required_scopes' => [
        'customers.read',
        'customers.write',
      ],
      'title' => 'Manage customers',
    ],
    (object) [
      'description' => 'Read product, variant, bundle, and SKU lookup catalog records.',
      'optional' => true,
      'permission_id' => 'read_catalog',
      'required_scopes' => [
        'commerce.products.read',
        'commerce.bundles.read',
        'commerce.catalog.read',
      ],
      'title' => 'Read catalog',
    ],
    (object) [
      'description' => 'Create and update bundle catalog records for installed merchants.',
      'optional' => true,
      'permission_id' => 'manage_bundles',
      'required_scopes' => [
        'commerce.bundles.write',
      ],
      'title' => 'Manage bundles',
    ],
  ],
  'redirect_uris' => [
    'https://plugins.acme.com/flint/oauth/callback',
    'http://localhost:3000/flint/oauth/callback',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
