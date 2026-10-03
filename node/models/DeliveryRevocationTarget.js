import { d704 as c0, d693 as c1, d692 as c2, d695 as c3, d694 as c4, d697 as c5, d696 as c6, d699 as c7, d698 as c8, d701 as c9, d700 as c10, d703 as c11, d702 as c12 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d704 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d704;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec220"]:c1(),["SharedCodec221"]:c2(),["SharedCodec222"]:c3(),["SharedCodec223"]:c4(),["SharedCodec224"]:c5(),["SharedCodec225"]:c6(),["SharedCodec226"]:c7(),["SharedCodec227"]:c8(),["SharedCodec228"]:c9(),["SharedCodec229"]:c10(),["SharedCodec230"]:c11(),["SharedCodec231"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
