import { d6568 as c0 } from '../descriptors/data/302.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6569 as c1, d6574 as c2, d6570 as c3, d6575 as c4, d6576 as c5, d6571 as c6, d6572 as c7 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6569 as d6569 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6569;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAddressRequest"]:c0(),["DeliveryBuyerLocationRequest"]:c1(),["DeliveryCoordinateRequest"]:c2(),["SharedCodec508"]:c3(),["SharedCodec509"]:c4(),["SharedCodec510"]:c5(),["SharedCodec511"]:c6(),["SharedCodec512"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
