import { d689 as c0, d690 as c1, d704 as c2, d693 as c3, d692 as c4, d695 as c5, d694 as c6, d697 as c7, d696 as c8, d699 as c9, d698 as c10, d701 as c11, d700 as c12, d703 as c13, d702 as c14 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d689 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec220"]:c3(),["SharedCodec221"]:c4(),["SharedCodec222"]:c5(),["SharedCodec223"]:c6(),["SharedCodec224"]:c7(),["SharedCodec225"]:c8(),["SharedCodec226"]:c9(),["SharedCodec227"]:c10(),["SharedCodec228"]:c11(),["SharedCodec229"]:c12(),["SharedCodec230"]:c13(),["SharedCodec231"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
