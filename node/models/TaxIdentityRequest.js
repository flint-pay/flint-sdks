import { d8435 as c0, d8426 as c1, d8427 as c2 } from '../descriptors/data/370.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8112 as c3, d8113 as c4 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7689 as c5 } from '../descriptors/data/323.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7689 as d7689 } from '../descriptors/data/323.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1715"]:c1(),["SharedCodec1716"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["TaxIdentityRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
