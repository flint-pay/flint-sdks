import { d6568 as c0 } from '../descriptors/data/302.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d469 as c1 } from '../descriptors/data/27.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6574 as c2, d6570 as c3, d6575 as c4 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d469 as d469 } from '../descriptors/data/27.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationInputAddress"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec508"]:c3(),["SharedCodec509"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationInputAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
