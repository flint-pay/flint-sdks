import { d1618 as c0, d1632 as c1, d1653 as c2, d1638 as c3, d1637 as c4, d1636 as c5, d1643 as c6, d1642 as c7, d1641 as c8, d1640 as c9, d1639 as c10, d1646 as c11, d1645 as c12, d1644 as c13, d1649 as c14, d1648 as c15, d1647 as c16, d1652 as c17, d1651 as c18, d1650 as c19 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1653 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["InventoryTransferProvenanceRequest"]:c1(),["InventoryTransferTransitionRequest"]:c2(),["SharedCodec435"]:c3(),["SharedCodec436"]:c4(),["SharedCodec437"]:c5(),["SharedCodec438"]:c6(),["SharedCodec439"]:c7(),["SharedCodec440"]:c8(),["SharedCodec441"]:c9(),["SharedCodec442"]:c10(),["SharedCodec443"]:c11(),["SharedCodec444"]:c12(),["SharedCodec445"]:c13(),["SharedCodec446"]:c14(),["SharedCodec447"]:c15(),["SharedCodec448"]:c16(),["SharedCodec449"]:c17(),["SharedCodec450"]:c18(),["SharedCodec451"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
