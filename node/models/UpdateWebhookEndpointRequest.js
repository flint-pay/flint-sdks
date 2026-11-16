import { d7492 as c0, d7493 as c5 } from '../descriptors/data/344.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9702 as c1, d9703 as c2, d9704 as c3 } from '../descriptors/data/475.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6543 as c4 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6543 as d6543 } from '../descriptors/data/288.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2423"]:c0(),["SharedCodec2543"]:c1(),["SharedCodec2544"]:c2(),["SharedCodec2545"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
