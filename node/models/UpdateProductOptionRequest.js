import { d10325 as c0 } from '../descriptors/data/480.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10344 as c1, d10345 as c2 } from '../descriptors/data/481.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10344 as d10344 } from '../descriptors/data/481.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10344;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3160"]:c0(),["UpdateProductOptionRequest"]:c1(),["UpdateProductOptionValueRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
