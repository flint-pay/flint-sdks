import { d713 as c0, d714 as c1, d728 as c2, d717 as c3, d716 as c4, d719 as c5, d718 as c6, d721 as c7, d720 as c8, d723 as c9, d722 as c10, d725 as c11, d724 as c12, d727 as c13, d726 as c14 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d713 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec231"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec234"]:c6(),["SharedCodec235"]:c7(),["SharedCodec236"]:c8(),["SharedCodec237"]:c9(),["SharedCodec238"]:c10(),["SharedCodec239"]:c11(),["SharedCodec240"]:c12(),["SharedCodec241"]:c13(),["SharedCodec242"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
