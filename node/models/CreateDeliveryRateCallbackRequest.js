import { d235 as c0 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7478 as c1 } from '../descriptors/data/343.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7493 as c2 } from '../descriptors/data/344.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d235 as d235 } from '../descriptors/data/11.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRateCallbackRequest"]:c0(),["DeliveryRateCallbackConfigurationRequest"]:c1(),["WebhookSigningMethod"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
