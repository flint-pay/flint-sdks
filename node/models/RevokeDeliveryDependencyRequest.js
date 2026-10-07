import { d728 as c0, d2282 as c1, d717 as c2, d716 as c3, d719 as c4, d718 as c5, d721 as c6, d720 as c7, d723 as c8, d722 as c9, d725 as c10, d724 as c11, d727 as c12, d726 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2282 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec231"]:c2(),["SharedCodec232"]:c3(),["SharedCodec233"]:c4(),["SharedCodec234"]:c5(),["SharedCodec235"]:c6(),["SharedCodec236"]:c7(),["SharedCodec237"]:c8(),["SharedCodec238"]:c9(),["SharedCodec239"]:c10(),["SharedCodec240"]:c11(),["SharedCodec241"]:c12(),["SharedCodec242"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
