import { d713 as c0, d714 as c1, d715 as c2, d728 as c3, d77 as c4, d1830 as c5, d1829 as c6, d2164 as c7, d2165 as c8, d14 as c9, d717 as c10, d716 as c11, d719 as c12, d718 as c13, d721 as c14, d720 as c15, d723 as c16, d722 as c17, d725 as c18, d724 as c19, d727 as c20, d726 as c21, d1828 as c22 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d715 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d715;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec231"]:c10(),["SharedCodec232"]:c11(),["SharedCodec233"]:c12(),["SharedCodec234"]:c13(),["SharedCodec235"]:c14(),["SharedCodec236"]:c15(),["SharedCodec237"]:c16(),["SharedCodec238"]:c17(),["SharedCodec239"]:c18(),["SharedCodec240"]:c19(),["SharedCodec241"]:c20(),["SharedCodec242"]:c21(),["SharedCodec492"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
