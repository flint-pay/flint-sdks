import { d705 as c0, d2296 as c1, d694 as c2, d693 as c3, d696 as c4, d695 as c5, d698 as c6, d697 as c7, d700 as c8, d699 as c9, d702 as c10, d701 as c11, d704 as c12, d703 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2296 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2296;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec209"]:c2(),["SharedCodec210"]:c3(),["SharedCodec211"]:c4(),["SharedCodec212"]:c5(),["SharedCodec213"]:c6(),["SharedCodec214"]:c7(),["SharedCodec215"]:c8(),["SharedCodec216"]:c9(),["SharedCodec217"]:c10(),["SharedCodec218"]:c11(),["SharedCodec219"]:c12(),["SharedCodec220"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
