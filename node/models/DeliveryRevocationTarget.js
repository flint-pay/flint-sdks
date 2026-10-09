import { d695 as c0, d684 as c1, d683 as c2, d686 as c3, d685 as c4, d688 as c5, d687 as c6, d690 as c7, d689 as c8, d692 as c9, d691 as c10, d694 as c11, d693 as c12 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d695 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec203"]:c1(),["SharedCodec204"]:c2(),["SharedCodec205"]:c3(),["SharedCodec206"]:c4(),["SharedCodec207"]:c5(),["SharedCodec208"]:c6(),["SharedCodec209"]:c7(),["SharedCodec210"]:c8(),["SharedCodec211"]:c9(),["SharedCodec212"]:c10(),["SharedCodec213"]:c11(),["SharedCodec214"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
