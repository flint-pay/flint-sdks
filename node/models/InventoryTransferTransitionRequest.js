import { d1632 as c0, d1646 as c1, d1667 as c2, d1652 as c3, d1651 as c4, d1650 as c5, d1657 as c6, d1656 as c7, d1655 as c8, d1654 as c9, d1653 as c10, d1660 as c11, d1659 as c12, d1658 as c13, d1663 as c14, d1662 as c15, d1661 as c16, d1666 as c17, d1665 as c18, d1664 as c19 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1667 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1667;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec410"]:c3(),["SharedCodec411"]:c4(),["SharedCodec412"]:c5(),["SharedCodec413"]:c6(),["SharedCodec414"]:c7(),["SharedCodec415"]:c8(),["SharedCodec416"]:c9(),["SharedCodec417"]:c10(),["SharedCodec418"]:c11(),["SharedCodec419"]:c12(),["SharedCodec420"]:c13(),["SharedCodec421"]:c14(),["SharedCodec422"]:c15(),["SharedCodec423"]:c16(),["SharedCodec424"]:c17(),["SharedCodec425"]:c18(),["SharedCodec426"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
