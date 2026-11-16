import { d227 as c0 } from '../descriptors/data/9.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8952 as c1, d8940 as c6, d8941 as c7 } from '../descriptors/data/403.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8872 as c2, d8868 as c3, d8869 as c4, d8870 as c5, d8873 as c8, d8874 as c9, d8875 as c10, d8871 as c11 } from '../descriptors/data/399.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d227 as d227 } from '../descriptors/data/9.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConsumeInventoryReservationRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1373"]:c3(),["SharedCodec1374"]:c4(),["SharedCodec1375"]:c5(),["SharedCodec328"]:c6(),["SharedCodec329"]:c7(),["SharedCodec442"]:c8(),["SharedCodec443"]:c9(),["SharedCodec444"]:c10(),["SharedCodec445"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
