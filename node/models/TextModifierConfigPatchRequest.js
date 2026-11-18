import { d7703 as c0 } from '../descriptors/data/323.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7703 as d7703 } from '../descriptors/data/323.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7703;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
