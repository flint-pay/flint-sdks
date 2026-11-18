import { d330 as c0 } from '../descriptors/data/18.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9741 as c1 } from '../descriptors/data/446.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d330 as d330 } from '../descriptors/data/18.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMerchantSignupRequest"]:c0(),["MerchantSignupOwnerRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
