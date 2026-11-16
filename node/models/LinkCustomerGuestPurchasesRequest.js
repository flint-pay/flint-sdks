import { d933 as c0 } from '../descriptors/data/46.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d933 as d933 } from '../descriptors/data/46.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d933;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LinkCustomerGuestPurchasesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLinkCustomerGuestPurchasesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
