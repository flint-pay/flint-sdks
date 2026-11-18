import { d8766 as c0, d8767 as c5 } from '../descriptors/data/388.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d11051 as c1, d11052 as c2, d11053 as c3 } from '../descriptors/data/522.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7808 as c4 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7808 as d7808 } from '../descriptors/data/331.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3088"]:c0(),["SharedCodec3209"]:c1(),["SharedCodec3210"]:c2(),["SharedCodec3211"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
