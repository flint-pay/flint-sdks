import { d824 as c0, d811 as c1, d812 as c2, d813 as c3, d814 as c4, d815 as c5, d816 as c6, d817 as c7, d818 as c8, d819 as c9, d820 as c10, d821 as c11, d822 as c12, d823 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d824 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec234"]:c1(),["SharedCodec235"]:c2(),["SharedCodec236"]:c3(),["SharedCodec237"]:c4(),["SharedCodec238"]:c5(),["SharedCodec239"]:c6(),["SharedCodec240"]:c7(),["SharedCodec241"]:c8(),["SharedCodec242"]:c9(),["SharedCodec243"]:c10(),["SharedCodec244"]:c11(),["SharedCodec245"]:c12(),["SharedCodec246"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
