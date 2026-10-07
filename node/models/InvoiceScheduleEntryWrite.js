import { d1677 as c0, d1680 as c1, d1690 as c2, d314 as c3, d1673 as c4, d1674 as c5, d1676 as c6, d1675 as c7, d1678 as c8, d1679 as c9, d1684 as c10, d1682 as c11, d1683 as c12, d1686 as c13, d1685 as c14, d1689 as c15, d1687 as c16, d1688 as c17 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1690 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDue"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec429"]:c4(),["SharedCodec430"]:c5(),["SharedCodec431"]:c6(),["SharedCodec432"]:c7(),["SharedCodec433"]:c8(),["SharedCodec434"]:c9(),["SharedCodec435"]:c10(),["SharedCodec436"]:c11(),["SharedCodec437"]:c12(),["SharedCodec438"]:c13(),["SharedCodec439"]:c14(),["SharedCodec440"]:c15(),["SharedCodec441"]:c16(),["SharedCodec442"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
