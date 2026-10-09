import { d729 as c0, d725 as c1, d726 as c2, d727 as c3, d728 as c4, d205 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d729 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d729;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["SharedCodec217"]:c1(),["SharedCodec218"]:c2(),["SharedCodec219"]:c3(),["SharedCodec220"]:c4(),["SharedCodec36"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContext(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
