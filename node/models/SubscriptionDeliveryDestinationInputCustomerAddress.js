import { d4050 as c0 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4050 as d4050 } from '../descriptors/data/166.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4050;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionDeliveryDestinationInputCustomerAddress"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationInputCustomerAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
