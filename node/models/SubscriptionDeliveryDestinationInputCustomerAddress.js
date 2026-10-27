import { d2402 as c0 } from '../descriptors/data/95.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2402 as d2402 } from '../descriptors/data/95.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2402;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionDeliveryDestinationInputCustomerAddress"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionDeliveryDestinationInputCustomerAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
