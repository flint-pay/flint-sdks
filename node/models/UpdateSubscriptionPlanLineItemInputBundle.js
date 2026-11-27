import { d8131 as c0 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8359 as c2 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11077 as c3, d11078 as c4 } from '../descriptors/data/528.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8816 as c5, d8808 as c6, d8817 as c7, d8809 as c8, d8810 as c9, d8818 as c10, d8819 as c11, d8820 as c12 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8061 as c13 } from '../descriptors/data/352.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7896 as c14 } from '../descriptors/data/336.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7896 as d7896 } from '../descriptors/data/336.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7896;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec3011"]:c3(),["SharedCodec3012"]:c4(),["SharedCodec492"]:c5(),["SharedCodec493"]:c6(),["SharedCodec494"]:c7(),["SharedCodec495"]:c8(),["SharedCodec496"]:c9(),["SharedCodec508"]:c10(),["SharedCodec509"]:c11(),["SharedCodec510"]:c12(),["TextModifierRequest"]:c13(),["UpdateSubscriptionPlanLineItemInputBundle"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
