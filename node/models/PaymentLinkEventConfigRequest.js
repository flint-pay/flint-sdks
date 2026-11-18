import { d10142 as c0 } from '../descriptors/data/467.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10142 as d10142 } from '../descriptors/data/467.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLinkEventConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkEventConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
