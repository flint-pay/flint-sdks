import { d704 as c0, d2236 as c1, d693 as c2, d692 as c3, d695 as c4, d694 as c5, d697 as c6, d696 as c7, d699 as c8, d698 as c9, d701 as c10, d700 as c11, d703 as c12, d702 as c13 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d2236 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec220"]:c2(),["SharedCodec221"]:c3(),["SharedCodec222"]:c4(),["SharedCodec223"]:c5(),["SharedCodec224"]:c6(),["SharedCodec225"]:c7(),["SharedCodec226"]:c8(),["SharedCodec227"]:c9(),["SharedCodec228"]:c10(),["SharedCodec229"]:c11(),["SharedCodec230"]:c12(),["SharedCodec231"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
