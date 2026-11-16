import { d7819 as c0, d7824 as c1, d7825 as c2, d7826 as c3, d7827 as c4, d7828 as c5 } from '../descriptors/data/365.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7819 as d7819 } from '../descriptors/data/365.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7819;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec1050"]:c1(),["SharedCodec1051"]:c2(),["SharedCodec1052"]:c3(),["SharedCodec1053"]:c4(),["SharedCodec1054"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
