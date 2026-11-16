import { d962 as c0 } from '../descriptors/data/47.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8407 as c1 } from '../descriptors/data/398.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6637 as c2 } from '../descriptors/data/295.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d962 as d962 } from '../descriptors/data/47.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionCreateRequest"]:c0(),["SharedCodec1327"]:c1(),["SharedCodec1328"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
