import { d1859 as c0, d1858 as c1, d1857 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1859 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1859;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderDeliveryDestinationAddressRequest"]:c0(),["SharedCodec474"]:c1(),["SharedCodec475"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderDeliveryDestinationAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
