import { d822 as c0, d809 as c1, d810 as c2, d811 as c3, d812 as c4, d813 as c5, d814 as c6, d815 as c7, d816 as c8, d817 as c9, d818 as c10, d819 as c11, d820 as c12, d821 as c13 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d822 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec247"]:c1(),["SharedCodec248"]:c2(),["SharedCodec249"]:c3(),["SharedCodec250"]:c4(),["SharedCodec251"]:c5(),["SharedCodec252"]:c6(),["SharedCodec253"]:c7(),["SharedCodec254"]:c8(),["SharedCodec255"]:c9(),["SharedCodec256"]:c10(),["SharedCodec257"]:c11(),["SharedCodec258"]:c12(),["SharedCodec259"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
