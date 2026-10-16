import { d1634 as c0, d1648 as c1, d1669 as c2, d1654 as c3, d1653 as c4, d1652 as c5, d1659 as c6, d1658 as c7, d1657 as c8, d1656 as c9, d1655 as c10, d1662 as c11, d1661 as c12, d1660 as c13, d1665 as c14, d1664 as c15, d1663 as c16, d1668 as c17, d1667 as c18, d1666 as c19 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1669 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1669;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec411"]:c3(),["SharedCodec412"]:c4(),["SharedCodec413"]:c5(),["SharedCodec414"]:c6(),["SharedCodec415"]:c7(),["SharedCodec416"]:c8(),["SharedCodec417"]:c9(),["SharedCodec418"]:c10(),["SharedCodec419"]:c11(),["SharedCodec420"]:c12(),["SharedCodec421"]:c13(),["SharedCodec422"]:c14(),["SharedCodec423"]:c15(),["SharedCodec424"]:c16(),["SharedCodec425"]:c17(),["SharedCodec426"]:c18(),["SharedCodec427"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
