import { d876 as c0 } from '../descriptors/data/48.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9029 as c1 } from '../descriptors/data/405.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d876 as d876 } from '../descriptors/data/48.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d876;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceStoreCreditRequest"]:c0(),["SharedCodec438"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceStoreCreditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
