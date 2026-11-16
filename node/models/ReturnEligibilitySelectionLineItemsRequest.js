import { d8330 as c0, d8340 as c2 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1370 as c1 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1370 as d1370 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionLineItemsRequest"]:c1(),["SharedCodec2082"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionLineItemsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
