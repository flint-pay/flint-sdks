import { d728 as c0, d717 as c1, d716 as c2, d719 as c3, d718 as c4, d721 as c5, d720 as c6, d723 as c7, d722 as c8, d725 as c9, d724 as c10, d727 as c11, d726 as c12 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d728 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d728;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec231"]:c1(),["SharedCodec232"]:c2(),["SharedCodec233"]:c3(),["SharedCodec234"]:c4(),["SharedCodec235"]:c5(),["SharedCodec236"]:c6(),["SharedCodec237"]:c7(),["SharedCodec238"]:c8(),["SharedCodec239"]:c9(),["SharedCodec240"]:c10(),["SharedCodec241"]:c11(),["SharedCodec242"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
