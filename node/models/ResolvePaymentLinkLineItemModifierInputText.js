import { d1771 as c0 } from '../descriptors/data/87.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10168 as c1 } from '../descriptors/data/469.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8682 as c2, d8683 as c3 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1771 as d1771 } from '../descriptors/data/87.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResolvePaymentLinkLineItemModifierInputText"]:c0(),["ResolvePaymentLinkTextModifierRequest"]:c1(),["SharedCodec482"]:c2(),["SharedCodec483"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkLineItemModifierInputText(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
