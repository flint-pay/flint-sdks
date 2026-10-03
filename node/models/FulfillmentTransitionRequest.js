import { d824 as c0, d811 as c1, d812 as c2, d813 as c3, d814 as c4, d815 as c5, d816 as c6, d817 as c7, d818 as c8, d819 as c9, d820 as c10, d821 as c11, d822 as c12, d823 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d824 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec247"]:c1(),["SharedCodec248"]:c2(),["SharedCodec249"]:c3(),["SharedCodec250"]:c4(),["SharedCodec251"]:c5(),["SharedCodec252"]:c6(),["SharedCodec253"]:c7(),["SharedCodec254"]:c8(),["SharedCodec255"]:c9(),["SharedCodec256"]:c10(),["SharedCodec257"]:c11(),["SharedCodec258"]:c12(),["SharedCodec259"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
