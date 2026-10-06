import { d1643 as c0, d1657 as c1, d1678 as c2, d1663 as c3, d1662 as c4, d1661 as c5, d1668 as c6, d1667 as c7, d1666 as c8, d1665 as c9, d1664 as c10, d1671 as c11, d1670 as c12, d1669 as c13, d1674 as c14, d1673 as c15, d1672 as c16, d1677 as c17, d1676 as c18, d1675 as c19 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1678 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec437"]:c3(),["SharedCodec438"]:c4(),["SharedCodec439"]:c5(),["SharedCodec440"]:c6(),["SharedCodec441"]:c7(),["SharedCodec442"]:c8(),["SharedCodec443"]:c9(),["SharedCodec444"]:c10(),["SharedCodec445"]:c11(),["SharedCodec446"]:c12(),["SharedCodec447"]:c13(),["SharedCodec448"]:c14(),["SharedCodec449"]:c15(),["SharedCodec450"]:c16(),["SharedCodec451"]:c17(),["SharedCodec452"]:c18(),["SharedCodec453"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
