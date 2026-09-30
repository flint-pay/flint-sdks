import { d512 as c0, d2009 as c1, d1982 as c2, d1983 as c3, d1986 as c4, d1985 as c5, d1984 as c6, d1989 as c7, d1988 as c8, d1987 as c9, d1992 as c10, d1991 as c11, d1990 as c12, d1995 as c13, d1994 as c14, d1993 as c15, d1997 as c16, d1996 as c17, d2008 as c18, d2000 as c19, d1998 as c20, d1999 as c21, d2002 as c22, d2001 as c23, d2005 as c24, d2003 as c25, d2004 as c26, d2007 as c27, d2006 as c28 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d512 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d512;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec486"]:c2(),["SharedCodec487"]:c3(),["SharedCodec488"]:c4(),["SharedCodec489"]:c5(),["SharedCodec490"]:c6(),["SharedCodec491"]:c7(),["SharedCodec492"]:c8(),["SharedCodec493"]:c9(),["SharedCodec494"]:c10(),["SharedCodec495"]:c11(),["SharedCodec496"]:c12(),["SharedCodec497"]:c13(),["SharedCodec498"]:c14(),["SharedCodec499"]:c15(),["SharedCodec500"]:c16(),["SharedCodec501"]:c17(),["SharedCodec502"]:c18(),["SharedCodec503"]:c19(),["SharedCodec504"]:c20(),["SharedCodec505"]:c21(),["SharedCodec506"]:c22(),["SharedCodec507"]:c23(),["SharedCodec508"]:c24(),["SharedCodec509"]:c25(),["SharedCodec510"]:c26(),["SharedCodec511"]:c27(),["SharedCodec512"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
