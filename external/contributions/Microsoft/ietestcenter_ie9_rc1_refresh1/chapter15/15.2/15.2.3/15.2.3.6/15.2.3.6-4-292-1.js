/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


ES5Harness.registerTest({
    id: "15.2.3.6-4-292-1",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-292-1.js",

    description: "Object.defineProperty - 'O' is an Arguments object of a function that has formal parameters, 'name' is own property of 'O' which is also defined in [[ParameterMap]] of 'O', and 'desc' is data descriptor, test updating multiple attribute values of 'name' (10.6 [[DefineOwnProperty]] step 3 and 5.b)",

    test: function testcase() {
        return (function (a, b, c) { 
            Object.defineProperty(arguments, "0", {
                value: 20,
                writable: false,
                enumerable: false,
                configurable: false
            });
            var verifyFormal = a === 20;
            return dataPropertyAttributesAreCorrect(arguments, "0", 20, false, false, false) && verifyFormal;
        }(0, 1, 2));
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
