import { d1898 as c0 } from '../descriptors/data/95.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9511 as c1, d9512 as c2 } from '../descriptors/data/434.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1898 as d1898 } from '../descriptors/data/95.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1898;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SaveMeGiftCardRequestCode"]:c0(),["SharedCodec2816"]:c1(),["SharedCodec2817"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
