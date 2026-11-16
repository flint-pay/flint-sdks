import { d53 as c0 } from '../descriptors/data/2.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8357 as c1 } from '../descriptors/data/396.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d53 as d53 } from '../descriptors/data/2.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d53;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnRequest"]:c0(),["ReturnLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
