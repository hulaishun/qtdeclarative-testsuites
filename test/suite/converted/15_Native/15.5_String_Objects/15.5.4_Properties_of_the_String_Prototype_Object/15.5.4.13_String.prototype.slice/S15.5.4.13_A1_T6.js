// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @id: S15.5.4.13_A1_T6;
 * @section: 15.5.4.13;
 * @description: Arguments are x and number, and instance is new String, x is undefined variable;
 */

//since ToInteger(undefined yelds 0)
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String("undefined").slice(x,3) !== "und") {
  $ERROR('#1: var x; new String("undefined").slice(x,3) === "und". Actual: '+new String("undefined").slice(x,3) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;
