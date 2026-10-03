import { d706 as c0, d695 as c1, d694 as c2, d697 as c3, d696 as c4, d699 as c5, d698 as c6, d701 as c7, d700 as c8, d703 as c9, d702 as c10, d705 as c11, d704 as c12 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d706 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d706;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec220"]:c1(),["SharedCodec221"]:c2(),["SharedCodec222"]:c3(),["SharedCodec223"]:c4(),["SharedCodec224"]:c5(),["SharedCodec225"]:c6(),["SharedCodec226"]:c7(),["SharedCodec227"]:c8(),["SharedCodec228"]:c9(),["SharedCodec229"]:c10(),["SharedCodec230"]:c11(),["SharedCodec231"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
