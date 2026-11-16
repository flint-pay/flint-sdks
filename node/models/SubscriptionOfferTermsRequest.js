import { d9587 as c0 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6361 as c1 } from '../descriptors/data/276.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6361 as d6361 } from '../descriptors/data/276.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionOfferLineItemRequest"]:c0(),["SubscriptionOfferTermsRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionOfferTermsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
