import { d6958 as c0, d6953 as c1, d6954 as c2, d6963 as c3 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6964 as c4, d6965 as c5 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6958 as d6958 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6958;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["SharedCodec188"]:c1(),["SharedCodec189"]:c2(),["SharedCodec259"]:c3(),["SharedCodec260"]:c4(),["SubscriptionPlanChangeLineItemRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
