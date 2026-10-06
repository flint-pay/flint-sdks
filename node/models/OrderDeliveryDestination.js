import { d108 as c0, d1850 as c1, d1852 as c2 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d108 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d108;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestination"]:c0(),["OrderDeliveryDestinationAddress"]:c1(),["OrderDeliveryDestinationRecipient"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestination(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
