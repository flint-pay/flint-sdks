import { d1851 as c0, d1852 as c1, d1854 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1851 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1851;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestination"]:c0(),["OrderDeliveryDestinationAddress"]:c1(),["OrderDeliveryDestinationRecipient"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestination(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
