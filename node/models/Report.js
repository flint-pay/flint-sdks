import { d2101 as c0, d1514 as c1, d1516 as c2, d1515 as c3, d1517 as c4, d1518 as c5 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2101 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2101;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Report"]:c0(),["SharedCodec404"]:c1(),["SharedCodec405"]:c2(),["SharedCodec406"]:c3(),["SharedCodec407"]:c4(),["SharedCodec408"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
