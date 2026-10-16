import { d705 as c0, d694 as c1, d693 as c2, d696 as c3, d695 as c4, d698 as c5, d697 as c6, d700 as c7, d699 as c8, d702 as c9, d701 as c10, d704 as c11, d703 as c12 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d705 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec209"]:c1(),["SharedCodec210"]:c2(),["SharedCodec211"]:c3(),["SharedCodec212"]:c4(),["SharedCodec213"]:c5(),["SharedCodec214"]:c6(),["SharedCodec215"]:c7(),["SharedCodec216"]:c8(),["SharedCodec217"]:c9(),["SharedCodec218"]:c10(),["SharedCodec219"]:c11(),["SharedCodec220"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
