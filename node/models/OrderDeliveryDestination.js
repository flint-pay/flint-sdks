import { d108 as c0, d1850 as c1, d1852 as c2 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d108 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestination"]:c0(),["OrderDeliveryDestinationAddress"]:c1(),["OrderDeliveryDestinationRecipient"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestination(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
