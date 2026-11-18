import { d10784 as c0, d10785 as c1 } from '../descriptors/data/507.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7695 as c2 } from '../descriptors/data/323.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7695 as d7695 } from '../descriptors/data/323.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3032"]:c0(),["SharedCodec3033"]:c1(),["TaxSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
