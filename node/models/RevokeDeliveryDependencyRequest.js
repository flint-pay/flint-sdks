import { d713 as c0, d2249 as c1, d702 as c2, d701 as c3, d704 as c4, d703 as c5, d706 as c6, d705 as c7, d708 as c8, d707 as c9, d710 as c10, d709 as c11, d712 as c12, d711 as c13 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2249 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec226"]:c2(),["SharedCodec227"]:c3(),["SharedCodec228"]:c4(),["SharedCodec229"]:c5(),["SharedCodec230"]:c6(),["SharedCodec231"]:c7(),["SharedCodec232"]:c8(),["SharedCodec233"]:c9(),["SharedCodec234"]:c10(),["SharedCodec235"]:c11(),["SharedCodec236"]:c12(),["SharedCodec237"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
