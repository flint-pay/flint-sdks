import { d271 as c0 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7819 as c1, d7821 as c2, d7823 as c3, d7824 as c8, d7825 as c9, d7826 as c10, d7827 as c11, d7828 as c12, d7833 as c17, d7834 as c18, d7835 as c19, d7836 as c20, d7837 as c21, d7838 as c22, d7839 as c23 } from '../descriptors/data/365.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7849 as c4, d7845 as c5, d7846 as c6, d7847 as c7, d7850 as c13, d7851 as c14, d7852 as c15, d7848 as c16 } from '../descriptors/data/366.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d271 as d271 } from '../descriptors/data/14.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1047"]:c5(),["SharedCodec1048"]:c6(),["SharedCodec1049"]:c7(),["SharedCodec1050"]:c8(),["SharedCodec1051"]:c9(),["SharedCodec1052"]:c10(),["SharedCodec1053"]:c11(),["SharedCodec1054"]:c12(),["SharedCodec385"]:c13(),["SharedCodec386"]:c14(),["SharedCodec387"]:c15(),["SharedCodec388"]:c16(),["SharedCodec389"]:c17(),["SharedCodec390"]:c18(),["SharedCodec391"]:c19(),["SharedCodec392"]:c20(),["SharedCodec393"]:c21(),["SharedCodec394"]:c22(),["SharedCodec395"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
