import { d429 as c0 } from '../descriptors/data/26.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d429 as d429 } from '../descriptors/data/26.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d429;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookDeliveryRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookDeliveryRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
