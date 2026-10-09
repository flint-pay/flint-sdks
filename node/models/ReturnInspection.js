import { d2168 as c0, d2170 as c1, d2182 as c2, d2183 as c3, d2180 as c4, d2181 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2182 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2182;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnInspection"]:c2(),["ReturnInspectionLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["SharedCodec524"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
