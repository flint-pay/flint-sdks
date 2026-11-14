import { d6021 as c0, d6019 as c1, d6020 as c2 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5640 as c3 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5640 as d5640 } from '../descriptors/data/247.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["UpdateCustomerAddressRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
