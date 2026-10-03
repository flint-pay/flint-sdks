import { d706 as c0, d2239 as c1, d695 as c2, d694 as c3, d697 as c4, d696 as c5, d699 as c6, d698 as c7, d701 as c8, d700 as c9, d703 as c10, d702 as c11, d705 as c12, d704 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d2239 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec220"]:c2(),["SharedCodec221"]:c3(),["SharedCodec222"]:c4(),["SharedCodec223"]:c5(),["SharedCodec224"]:c6(),["SharedCodec225"]:c7(),["SharedCodec226"]:c8(),["SharedCodec227"]:c9(),["SharedCodec228"]:c10(),["SharedCodec229"]:c11(),["SharedCodec230"]:c12(),["SharedCodec231"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
