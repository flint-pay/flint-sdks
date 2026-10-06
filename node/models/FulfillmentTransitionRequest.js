import { d830 as c0, d817 as c1, d818 as c2, d819 as c3, d820 as c4, d821 as c5, d822 as c6, d823 as c7, d824 as c8, d825 as c9, d826 as c10, d827 as c11, d828 as c12, d829 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d830 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d830;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec254"]:c1(),["SharedCodec255"]:c2(),["SharedCodec256"]:c3(),["SharedCodec257"]:c4(),["SharedCodec258"]:c5(),["SharedCodec259"]:c6(),["SharedCodec260"]:c7(),["SharedCodec261"]:c8(),["SharedCodec262"]:c9(),["SharedCodec263"]:c10(),["SharedCodec264"]:c11(),["SharedCodec265"]:c12(),["SharedCodec266"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
