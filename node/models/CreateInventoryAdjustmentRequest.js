import { d302 as c0 } from '../descriptors/data/15.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8842 as c1, d8844 as c2, d8846 as c3, d8847 as c8, d8848 as c9, d8849 as c10, d8850 as c11, d8851 as c12, d8856 as c17, d8857 as c18, d8858 as c19, d8859 as c20, d8860 as c21, d8861 as c22, d8862 as c23 } from '../descriptors/data/398.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8872 as c4, d8868 as c5, d8869 as c6, d8870 as c7, d8873 as c13, d8874 as c14, d8875 as c15, d8871 as c16 } from '../descriptors/data/399.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d302 as d302 } from '../descriptors/data/15.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1373"]:c5(),["SharedCodec1374"]:c6(),["SharedCodec1375"]:c7(),["SharedCodec1376"]:c8(),["SharedCodec1377"]:c9(),["SharedCodec1378"]:c10(),["SharedCodec1379"]:c11(),["SharedCodec1380"]:c12(),["SharedCodec442"]:c13(),["SharedCodec443"]:c14(),["SharedCodec444"]:c15(),["SharedCodec445"]:c16(),["SharedCodec446"]:c17(),["SharedCodec447"]:c18(),["SharedCodec448"]:c19(),["SharedCodec449"]:c20(),["SharedCodec450"]:c21(),["SharedCodec451"]:c22(),["SharedCodec452"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
