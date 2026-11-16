import { d6953 as c0, d6954 as c1 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9577 as c2, d9578 as c3, d9587 as c4 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6965 as c5 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9591 as c6 } from '../descriptors/data/469.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9591 as d9591 } from '../descriptors/data/469.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9591;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec188"]:c0(),["SharedCodec189"]:c1(),["SharedCodec2334"]:c2(),["SharedCodec2335"]:c3(),["SubscriptionOfferLineItemRequest"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5(),["SubscriptionTermsRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
