import { d1650 as c0, d1664 as c1, d1685 as c2, d1670 as c3, d1669 as c4, d1668 as c5, d1675 as c6, d1674 as c7, d1673 as c8, d1672 as c9, d1671 as c10, d1678 as c11, d1677 as c12, d1676 as c13, d1681 as c14, d1680 as c15, d1679 as c16, d1684 as c17, d1683 as c18, d1682 as c19 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1685 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec442"]:c3(),["SharedCodec443"]:c4(),["SharedCodec444"]:c5(),["SharedCodec445"]:c6(),["SharedCodec446"]:c7(),["SharedCodec447"]:c8(),["SharedCodec448"]:c9(),["SharedCodec449"]:c10(),["SharedCodec450"]:c11(),["SharedCodec451"]:c12(),["SharedCodec452"]:c13(),["SharedCodec453"]:c14(),["SharedCodec454"]:c15(),["SharedCodec455"]:c16(),["SharedCodec456"]:c17(),["SharedCodec457"]:c18(),["SharedCodec458"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
