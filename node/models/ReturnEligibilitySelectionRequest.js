import { d8330 as c0, d8332 as c1, d8338 as c2, d8340 as c3, d8341 as c4, d8342 as c5 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8332 as d8332 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionRequest"]:c1(),["SharedCodec2080"]:c2(),["SharedCodec2082"]:c3(),["SharedCodec2083"]:c4(),["SharedCodec2084"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
