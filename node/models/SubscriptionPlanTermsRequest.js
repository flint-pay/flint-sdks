import { d6953 as c0, d6954 as c1 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6965 as c2 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6392 as c3 } from '../descriptors/data/278.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6392 as d6392 } from '../descriptors/data/278.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6392;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec188"]:c0(),["SharedCodec189"]:c1(),["SubscriptionPlanChangeLineItemRequest"]:c2(),["SubscriptionPlanTermsRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
