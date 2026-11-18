import { d134 as c0 } from '../descriptors/data/7.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8731 as c1, d8732 as c2 } from '../descriptors/data/386.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8740 as c3, d8741 as c4 } from '../descriptors/data/387.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d134 as d134 } from '../descriptors/data/7.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequestCannotCalculate"]:c0(),["SharedCodec196"]:c1(),["SharedCodec197"]:c2(),["SharedCodec205"]:c3(),["SharedCodec206"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
