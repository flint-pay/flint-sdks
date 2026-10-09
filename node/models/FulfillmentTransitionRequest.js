import { d814 as c0, d801 as c1, d802 as c2, d803 as c3, d804 as c4, d805 as c5, d806 as c6, d807 as c7, d808 as c8, d809 as c9, d810 as c10, d811 as c11, d812 as c12, d813 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d814 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d814;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec228"]:c1(),["SharedCodec229"]:c2(),["SharedCodec230"]:c3(),["SharedCodec231"]:c4(),["SharedCodec232"]:c5(),["SharedCodec233"]:c6(),["SharedCodec234"]:c7(),["SharedCodec235"]:c8(),["SharedCodec236"]:c9(),["SharedCodec237"]:c10(),["SharedCodec238"]:c11(),["SharedCodec239"]:c12(),["SharedCodec240"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
