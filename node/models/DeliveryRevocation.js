import { d680 as c0, d681 as c1, d695 as c2, d684 as c3, d683 as c4, d686 as c5, d685 as c6, d688 as c7, d687 as c8, d690 as c9, d689 as c10, d692 as c11, d691 as c12, d694 as c13, d693 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d680 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec203"]:c3(),["SharedCodec204"]:c4(),["SharedCodec205"]:c5(),["SharedCodec206"]:c6(),["SharedCodec207"]:c7(),["SharedCodec208"]:c8(),["SharedCodec209"]:c9(),["SharedCodec210"]:c10(),["SharedCodec211"]:c11(),["SharedCodec212"]:c12(),["SharedCodec213"]:c13(),["SharedCodec214"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
