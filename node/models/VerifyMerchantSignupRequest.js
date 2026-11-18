import { d9745 as c0 } from '../descriptors/data/446.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7811 as c1 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7811 as d7811 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7811;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantSignupTermsAcceptanceRequest"]:c0(),["VerifyMerchantSignupRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
