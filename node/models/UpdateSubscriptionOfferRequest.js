import { d6745 as c0 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c1 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9525 as c2 } from '../descriptors/data/464.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6534 as c3 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6534 as d6534 } from '../descriptors/data/287.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2406"]:c0(),["SharedCodec2409"]:c1(),["SubscriptionIntervalOptionRequest"]:c2(),["UpdateSubscriptionOfferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
