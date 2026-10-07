import { d722 as c0, d2276 as c1, d711 as c2, d710 as c3, d713 as c4, d712 as c5, d715 as c6, d714 as c7, d717 as c8, d716 as c9, d719 as c10, d718 as c11, d721 as c12, d720 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2276 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec227"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec234"]:c9(),["SharedCodec235"]:c10(),["SharedCodec236"]:c11(),["SharedCodec237"]:c12(),["SharedCodec238"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
