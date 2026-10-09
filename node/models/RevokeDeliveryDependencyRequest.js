import { d695 as c0, d2280 as c1, d684 as c2, d683 as c3, d686 as c4, d685 as c5, d688 as c6, d687 as c7, d690 as c8, d689 as c9, d692 as c10, d691 as c11, d694 as c12, d693 as c13 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2280 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec203"]:c2(),["SharedCodec204"]:c3(),["SharedCodec205"]:c4(),["SharedCodec206"]:c5(),["SharedCodec207"]:c6(),["SharedCodec208"]:c7(),["SharedCodec209"]:c8(),["SharedCodec210"]:c9(),["SharedCodec211"]:c10(),["SharedCodec212"]:c11(),["SharedCodec213"]:c12(),["SharedCodec214"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
