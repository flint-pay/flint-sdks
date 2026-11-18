import { d10166 as c0, d10167 as c1, d10168 as c2 } from '../descriptors/data/469.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10193 as c3, d10194 as c4 } from '../descriptors/data/472.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8681 as c5, d8682 as c6, d8683 as c7 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10167 as d10167 } from '../descriptors/data/469.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierRequest"]:c0(),["ResolvePaymentLinkLineItemModifiers"]:c1(),["ResolvePaymentLinkTextModifierRequest"]:c2(),["SharedCodec2611"]:c3(),["SharedCodec2612"]:c4(),["SharedCodec480"]:c5(),["SharedCodec482"]:c6(),["SharedCodec483"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifiers(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
