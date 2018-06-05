!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){$(document).ready(function(){var e,o,t,n=window.Constants;if("undefined"==typeof web3)throw"No web3 detected. Is Metamask/Mist being used?";web3=new Web3(web3.currentProvider),console.log("Using web3 version: "+Web3.version),console.log("Is metamask the provider = "+window.web3.currentProvider.isMetaMask),console.log("Constructor name = "+window.web3.currentProvider.constructor.name),console.log("Type of web3 = "+typeof web3),window.MAX_UINT=web3.utils.toBN("115792089237316195423570985008687907853269984665640564039457584007913129639935");var r=$.getJSON("IndexContract.json");if(console.log("Web3.eth.net = "+web3.eth.net),void 0===web3.eth.net)throw new Error("Parity signer is not available.");var c=web3.eth.net.getId(),a=web3.eth.getAccounts();function l(t){console.log("Inside method setAllowance"),e.methods.set_allowances(t).send({from:o}).then(function(){console.log("After setting allowance")}).then(s).catch(console.error)}function s(){window.WETH_Token.methods.balanceOf(contractAddress).call().then(function(e){$("#display").text(e)}),d(),e.methods.token_quantities().call().then(function(e){$("#quantities").text(e)}).catch(console.error),e.methods.token_weight().call().then(function(e){$("#weights").text(e)}).catch(console.error),e.methods.rebalance_in_blocks().call().then(function(e){$("#rebalance_in_blocks").text(e)}).catch(console.error),e.methods.get_last_rebalanced().call().then(function(e){$("#last_rebalanced").text(e)}).catch(console.error),window.WETH_Token.methods.allowance(o,contractAddress).call().then(function(e){$("#contract_approval_WETH").text("WETH:contract on owner = "+e)}).catch(console.error),window.WETH_Token.methods.allowance(contractAddress,o).call().then(function(e){$("#owner_approval_contract_WETH").text("WETH:owner on contract = "+e)}).catch(console.error),window.ZRX_Token.methods.allowance(contractAddress,o).call().then(function(e){$("#owner_approval_contract_ZRX").text("ZRX:owner on contract = "+e)}).catch(console.error),web3.eth.getBlockNumber().then(function(e){$("#current_block_height").text(e),window.currentBlockHeight=e})}function d(){e.methods.token_addresses().call().then(function(e){$("#token_addresses").text(e)}).catch(console.error)}Promise.all([r,c,a]).then(function(r){var c=r[0],a=r[1],l=r[2];if(o=l[0],t=l[1],!(a in c.networks))throw new Error("Contract not found in selected Ethereum network on MetaMask.");console.log("Before contractData");var s=c.networks[a].address;console.log("ContractAddress = "+s),window.contractABI=c.abi,e=new web3.eth.Contract(window.contractABI,s),console.log("Setup contract"),window.contractAbi=void 0,window.contractAddress=s,window.contract=e,window.WETH_Token=new web3.eth.Contract(n.weth_abi,n.weth_address),window.ZRX_Token=new web3.eth.Contract(n.zrx_abi,n.zrx_address),window.EXCHANGE=new web3.eth.Contract(n.exchange_abi,n.exchange_address)}).then(d).then(s).catch(console.error),$("#submit").click(function(){console.log("Trading contract tokens"),function(){const o="0x032dbe12b8c4550b6a90490e6f8b79013d3833f7",n="0x0000000000000000000000000000000000000000",r="0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570",c="0xd0a1e359811322d97991e03f863a0c30c2cf029c",a="0xa258b39954cef5cb142fd567a46cddb31a670124",l=web3.utils.toBN("1000000000000000000"),d=web3.utils.toBN("500000000000000000000"),i=web3.utils.toBN("1530579630"),w="71908247906872754311838145342720002977696048562630825704739380803597823865473",f=web3.utils.toBN("27"),h="0xf20d22005cacc1ad5a510c090fb937cdb7438750b33c55128e019ec434a061e4",u="0x35d4772799d272e9c9adf04906a8690870e37d7dd657726652e5e1b7bb17117e",b=web3.utils.toBN("100000000000000"),g=[o,n,r,c,a],_=[l,d,0,0,i,w,b];window.EXCHANGE.methods.getOrderHash([o,n,r,c,a],[l,d,0,0,i,w]).call().then(function(n){console.log("OrderHash = "+n),window.EXCHANGE.methods.isValidSignature(o,n,f,h,u).call().then(function(o){if(!o)throw"Server contract seems to be invalid";console.log("Contract is valid?"+o),e.methods.make_exchange_trade(g,_,f,h,u).send({from:t}).then(function(){console.log("Called makeExchangeTrade"),console.log("Ideally follow the event log in Exchange contract to know of trade"),console.log("Exchange trade complete... wohoo")})})}).then(s).catch(console.error)}(),console.log("After exchange trade")}),$("#allow_ZRX").on("change",function(){console.log("Setting for ZRX token"),l(n.zrx_address),console.log("After setting for ZRX token")}),$("#allow_WETH").on("change",function(){console.log("Setting for WETH token"),l(n.weth_address),console.log("After setting for WETH token")}),$("#approve_transfer").on("change",function(){console.log("Before approve ETH"),console.log("Inside Allow Wrapped Ether Transfer to Smart Contract"),window.WETH_Token.methods.approve(window.contractAddress,window.MAX_UINT).send({from:o}).then(function(e){e&&(console.log("Result = "+e),console.log("Provided "+window.contractAddress+" appropriate permissions for account = "+o))}).then(s).catch(console.error),console.log("After approve ETH")}),$("#transfer_weth_to_contract").click(function(){var t;console.log("Before Transferring WETH to contract"),t="0.1",console.log("Inside transfer WETH to contract"),total_amount_after_decimals=web3.utils.toWei(t,"ether"),console.log("Total amount = "+total_amount_after_decimals),e.methods.deposit_weth(total_amount_after_decimals).send({from:o}).then(function(e){e&&(console.log("Deposited? = "+e),console.log("To Contract Address "+contractAddress))}).then(s).catch(console.error),console.log("After Transferring WETH to contract")}),$("#withdraw").click(function(){e.methods.withdraw().send({from:o}).then(function(e){e&&console.log("Successfully withdrawn tokens")}).then(s).catch(console.error)})})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY29udHJhY3QiLCJ1c2VyQWNjb3VudCIsImRpeWluZGV4QWNjb3VudCIsImNvbnN0YW50cyIsIndpbmRvdyIsIkNvbnN0YW50cyIsIndlYjMiLCJXZWIzIiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInZlcnNpb24iLCJpc01ldGFNYXNrIiwiY29uc3RydWN0b3IiLCJNQVhfVUlOVCIsInV0aWxzIiwidG9CTiIsImNvbnRyYWN0RGF0YVByb21pc2UiLCJnZXRKU09OIiwiZXRoIiwibmV0IiwiRXJyb3IiLCJuZXR3b3JrSWRQcm9taXNlIiwiZ2V0SWQiLCJhY2NvdW50c1Byb21pc2UiLCJnZXRBY2NvdW50cyIsInNldEFsbG93YW5jZUZvckFsbEFkZHJlc3NlcyIsInRva2VuQWRkcmVzcyIsIm1ldGhvZHMiLCJzZXRfYWxsb3dhbmNlcyIsInNlbmQiLCJmcm9tIiwidGhlbiIsInJlZnJlc2hUb2tlbkRldGFpbHMiLCJjYXRjaCIsImVycm9yIiwiV0VUSF9Ub2tlbiIsImJhbGFuY2VPZiIsImNvbnRyYWN0QWRkcmVzcyIsIndldGhfYmFsYW5jZSIsInRleHQiLCJnZXRUb2tlbkFkZHJlc3NlcyIsInRva2VuX3F1YW50aXRpZXMiLCJxdWFudGl0aWVzIiwidG9rZW5fd2VpZ2h0Iiwid2VpZ2h0cyIsInJlYmFsYW5jZV9pbl9ibG9ja3MiLCJnZXRfbGFzdF9yZWJhbGFuY2VkIiwibGFzdF9yZWJhbGFuY2VkIiwiYWxsb3dhbmNlIiwiWlJYX1Rva2VuIiwiZ2V0QmxvY2tOdW1iZXIiLCJibG9ja0hlaWdodCIsImN1cnJlbnRCbG9ja0hlaWdodCIsInRva2VuX2FkZHJlc3NlcyIsImFkZHJlc3NlcyIsIlByb21pc2UiLCJhbGwiLCJyZXN1bHRzIiwiY29udHJhY3REYXRhIiwibmV0d29ya0lkIiwiYWNjb3VudHMiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJjb250cmFjdEFCSSIsImFiaSIsIkNvbnRyYWN0IiwiY29udHJhY3RBYmkiLCJ3ZXRoX2FiaSIsIndldGhfYWRkcmVzcyIsInpyeF9hYmkiLCJ6cnhfYWRkcmVzcyIsIkVYQ0hBTkdFIiwiZXhjaGFuZ2VfYWJpIiwiZXhjaGFuZ2VfYWRkcmVzcyIsImNsaWNrIiwibWFrZXIiLCJ0YWtlciIsIm1ha2VyVG9rZW4iLCJ0YWtlclRva2VuIiwiZmVlUmVjaXBpZW50IiwibWFrZXJUb2tlbkFtb3VudCIsInRha2VyVG9rZW5BbW91bnQiLCJleHBpcmF0aW9uVGltZXN0YW1wSW5TZWMiLCJzYWx0IiwidiIsImZpbGxUYWtlclRva2VuQW1vdW50IiwidmFsdWVzIiwiZ2V0T3JkZXJIYXNoIiwib3JkZXJIYXNoIiwiaXNWYWxpZFNpZ25hdHVyZSIsInN1Y2Nlc3MiLCJtYWtlX2V4Y2hhbmdlX3RyYWRlIiwibWFrZUV4Y2hhbmdlVHJhZGUiLCJvbiIsImFwcHJvdmUiLCJyZXN1bHQiLCJhbW91bnQiLCJ0b3RhbF9hbW91bnRfYWZ0ZXJfZGVjaW1hbHMiLCJ0b1dlaSIsImRlcG9zaXRfd2V0aCIsIndpdGhkcmF3Il0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxLQUdBLFNB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QyxPQUFBVSxVQUFBZ0IsTUFBbUZDLEtBQUE5QixJQUFrQitCLEtBQUEsU0FBQWdFLEdBQ3JHQSxJQUNBdkYsUUFBQUMsSUFBQSxZQUFBc0YsR0FDQXZGLFFBQUFDLElBQUEsWUFBQU4sT0FBQWtDLGdCQUFBLDBDQUFBckMsTUFHQStCLEtBQUFDLEdBQ0FDLE1BQUF6QixRQUFBMEIsT0F5TEExQixRQUFBQyxJQUFBLHVCQUdBYixFQUFBLDhCQUFBOEUsTUFBQSxXQXpMQSxJQUFBc0IsRUEwTEF4RixRQUFBQyxJQUFBLHdDQTFMQXVGLEVBMkxBLE1BMUxBeEYsUUFBQUMsSUFBQSxvQ0FDQXdGLDRCQUFBNUYsS0FBQVMsTUFBQW9GLE1BQUFGLEVBQUEsU0FDQXhGLFFBQUFDLElBQUEsa0JBQUF3Riw2QkFDQWxHLEVBQUE0QixRQUFBd0UsYUFBQUYsNkJBQUFwRSxNQUFtRUMsS0FBQTlCLElBQWtCK0IsS0FBQSxTQUFBZ0UsR0FDckZBLElBQ0F2RixRQUFBQyxJQUFBLGdCQUFBc0YsR0FDQXZGLFFBQUFDLElBQUEsdUJBQUE0QixvQkFHQU4sS0FBQUMsR0FDQUMsTUFBQXpCLFFBQUEwQixPQWlMQTFCLFFBQUFDLElBQUEseUNBR0FiLEVBQUEsYUFBQThFLE1BQUEsV0E3RUEzRSxFQUFBNEIsUUFBQXlFLFdBQUF2RSxNQUFvQ0MsS0FBQTlCLElBQWtCK0IsS0FBQSxTQUFBMkQsR0FDdERBLEdBQ0FsRixRQUFBQyxJQUFBLG1DQUdBc0IsS0FBQUMsR0FDQUMsTUFBQXpCLFFBQUEwQiIsImZpbGUiOiIuL2FwcC9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyB2YXIgY29uc3RhbnRzID0gd2luZG93LkNvbnN0YW50cztcbi8vIHZhciBiaWdudW1iZXIgPSByZXF1aXJlKCdiaWdudW1iZXIuanMnKTtcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAMHhwcm9qZWN0L2Nvbm5lY3QnO1xuXG5mdW5jdGlvbiBhcHAoKSB7XG5cdHZhciBjb25zdGFudHMgPSB3aW5kb3cuQ29uc3RhbnRzO1xuXHRpZiAodHlwZW9mIHdlYjMgPT0gJ3VuZGVmaW5lZCcpIHRocm93ICdObyB3ZWIzIGRldGVjdGVkLiBJcyBNZXRhbWFzay9NaXN0IGJlaW5nIHVzZWQ/Jztcblx0d2ViMyA9IG5ldyBXZWIzKHdlYjMuY3VycmVudFByb3ZpZGVyKTsgLy8gTWV0YU1hc2sgaW5qZWN0ZWQgRXRoZXJldW0gcHJvdmlkZXJcblx0Y29uc29sZS5sb2coXCJVc2luZyB3ZWIzIHZlcnNpb246IFwiICsgV2ViMy52ZXJzaW9uKTtcblx0Y29uc29sZS5sb2coXCJJcyBtZXRhbWFzayB0aGUgcHJvdmlkZXIgPSBcIiArIHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlci5pc01ldGFNYXNrKTtcblx0Y29uc29sZS5sb2coXCJDb25zdHJ1Y3RvciBuYW1lID0gXCIgKyB3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIuY29uc3RydWN0b3IubmFtZSk7XG5cdGNvbnNvbGUubG9nKFwiVHlwZSBvZiB3ZWIzID0gXCIgKyB0eXBlb2Ygd2ViMyk7XG5cdHdpbmRvdy5NQVhfVUlOVCA9IHdlYjMudXRpbHMudG9CTihcIjExNTc5MjA4OTIzNzMxNjE5NTQyMzU3MDk4NTAwODY4NzkwNzg1MzI2OTk4NDY2NTY0MDU2NDAzOTQ1NzU4NDAwNzkxMzEyOTYzOTkzNVwiKTtcblxuXHR2YXIgY29udHJhY3Q7XG5cdHZhciB1c2VyQWNjb3VudDtcblx0dmFyIGRpeWluZGV4QWNjb3VudDtcblx0dmFyIGNvbnRyYWN0QUJJO1xuXG5cdC8vIHZhciBjb250cmFjdERhdGFQcm9taXNlID0gJC5nZXRKU09OKCdNYXJrZXRkYXRhLmpzb24nKTtcblx0dmFyIGNvbnRyYWN0RGF0YVByb21pc2UgPSAkLmdldEpTT04oJ0luZGV4Q29udHJhY3QuanNvbicpO1xuXHRjb25zb2xlLmxvZyhcIldlYjMuZXRoLm5ldCA9IFwiICsgd2ViMy5ldGgubmV0KTtcblx0aWYgKHR5cGVvZiB3ZWIzLmV0aC5uZXQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQYXJpdHkgc2lnbmVyIGlzIG5vdCBhdmFpbGFibGUuXCIpO1xuXHR9O1xuXG5cdC8vIEFueSBzY29wZVxuXHR2YXIgbmV0d29ya0lkUHJvbWlzZSA9IHdlYjMuZXRoLm5ldC5nZXRJZCgpOyAvLyByZXNvbHZlcyBvbiB0aGUgY3VycmVudCBuZXR3b3JrIGlkXG5cdHZhciBhY2NvdW50c1Byb21pc2UgPSB3ZWIzLmV0aC5nZXRBY2NvdW50cygpOyAvLyByZXNvbHZlcyBvbiBhbiBhcnJheSBvZiBhY2NvdW50c1xuICBcblx0UHJvbWlzZS5hbGwoW2NvbnRyYWN0RGF0YVByb21pc2UsIG5ldHdvcmtJZFByb21pc2UsIGFjY291bnRzUHJvbWlzZV0pXG5cdFx0LnRoZW4oZnVuY3Rpb24gaW5pdEFwcChyZXN1bHRzKSB7XG5cdFx0XHR2YXIgY29udHJhY3REYXRhID0gcmVzdWx0c1swXTtcblx0XHRcdHZhciBuZXR3b3JrSWQgPSByZXN1bHRzWzFdO1xuXHRcdFx0dmFyIGFjY291bnRzID0gcmVzdWx0c1syXTtcblx0XHRcdHVzZXJBY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICBkaXlpbmRleEFjY291bnQgPSBhY2NvdW50c1sxXTtcblxuXHRcdC8vICh0b2RvKSBNYWtlIHN1cmUgdGhlIGNvbnRyYWN0IGlzIGRlcGxveWVkIG9uIHRoZSBuZXR3b3JrIHRvIHdoaWNoIG91ciBwcm92aWRlciBpcyBjb25uZWN0ZWRcblx0XHRpZiAoIShuZXR3b3JrSWQgaW4gY29udHJhY3REYXRhLm5ldHdvcmtzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ29udHJhY3Qgbm90IGZvdW5kIGluIHNlbGVjdGVkIEV0aGVyZXVtIG5ldHdvcmsgb24gTWV0YU1hc2suXCIpO1xuXHRcdH1cblx0XG5cdFx0Y29uc29sZS5sb2coJ0JlZm9yZSBjb250cmFjdERhdGEnKTtcblx0XHR2YXIgY29udHJhY3RBZGRyZXNzID0gY29udHJhY3REYXRhLm5ldHdvcmtzW25ldHdvcmtJZF0uYWRkcmVzcztcblx0XHRjb25zb2xlLmxvZygnQ29udHJhY3RBZGRyZXNzID0gJyArIGNvbnRyYWN0QWRkcmVzcyk7XG5cdFx0d2luZG93LmNvbnRyYWN0QUJJID0gY29udHJhY3REYXRhLmFiaTtcblx0XHRjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdCh3aW5kb3cuY29udHJhY3RBQkksIGNvbnRyYWN0QWRkcmVzcyk7XG5cdFx0Ly8gY29udHJhY3Qub3B0aW9ucy5hZGRyZXNzID0gY29udHJhY3RBZGRyZXNzO1xuXHRcdGNvbnNvbGUubG9nKCdTZXR1cCBjb250cmFjdCcpO1xuXHRcdHdpbmRvdy5jb250cmFjdEFiaSA9IGNvbnRyYWN0QUJJO1xuXHRcdHdpbmRvdy5jb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEFkZHJlc3M7XG5cdFx0d2luZG93LmNvbnRyYWN0ID0gY29udHJhY3Q7XG5cdFx0d2luZG93LldFVEhfVG9rZW4gPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29uc3RhbnRzLndldGhfYWJpLCBjb25zdGFudHMud2V0aF9hZGRyZXNzKTtcblx0XHR3aW5kb3cuWlJYX1Rva2VuID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGNvbnN0YW50cy56cnhfYWJpLCBjb25zdGFudHMuenJ4X2FkZHJlc3MpO1xuXHRcdHdpbmRvdy5FWENIQU5HRSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChjb25zdGFudHMuZXhjaGFuZ2VfYWJpLCBjb25zdGFudHMuZXhjaGFuZ2VfYWRkcmVzcyk7XG5cdH0pXG5cdC50aGVuKGdldFRva2VuQWRkcmVzc2VzKVxuXHQudGhlbihyZWZyZXNoVG9rZW5EZXRhaWxzKVxuXHQuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cblx0ZnVuY3Rpb24gYWxsb3dXcmFwcGVkRXRoZXJGb3JTbWFydENvbnRyYWN0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdJbnNpZGUgQWxsb3cgV3JhcHBlZCBFdGhlciBUcmFuc2ZlciB0byBTbWFydCBDb250cmFjdCcpO1xuXHRcdHdpbmRvdy5XRVRIX1Rva2VuLm1ldGhvZHMuYXBwcm92ZSh3aW5kb3cuY29udHJhY3RBZGRyZXNzLCB3aW5kb3cuTUFYX1VJTlQpLnNlbmQoe2Zyb206IHVzZXJBY2NvdW50fSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdSZXN1bHQgPSAnICsgcmVzdWx0KTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1Byb3ZpZGVkICcgKyB3aW5kb3cuY29udHJhY3RBZGRyZXNzICsgJyBhcHByb3ByaWF0ZSBwZXJtaXNzaW9ucyBmb3IgYWNjb3VudCA9ICcgKyB1c2VyQWNjb3VudCk7XG5cdFx0XHR9O1xuXHRcdH0pXG4gICAgLnRoZW4ocmVmcmVzaFRva2VuRGV0YWlscylcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdH07XG5cblx0ZnVuY3Rpb24gdHJhbnNmZXJXRVRIVG9Db250cmFjdChhbW91bnQpIHtcblx0XHRjb25zb2xlLmxvZygnSW5zaWRlIHRyYW5zZmVyIFdFVEggdG8gY29udHJhY3QnKTtcblx0XHR0b3RhbF9hbW91bnRfYWZ0ZXJfZGVjaW1hbHMgPSB3ZWIzLnV0aWxzLnRvV2VpKGFtb3VudCwgJ2V0aGVyJyk7XG5cdFx0Y29uc29sZS5sb2coJ1RvdGFsIGFtb3VudCA9ICcgKyB0b3RhbF9hbW91bnRfYWZ0ZXJfZGVjaW1hbHMpO1xuXHRcdGNvbnRyYWN0Lm1ldGhvZHMuZGVwb3NpdF93ZXRoKHRvdGFsX2Ftb3VudF9hZnRlcl9kZWNpbWFscykuc2VuZCh7ZnJvbTogdXNlckFjY291bnR9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0RlcG9zaXRlZD8gPSAnICsgcmVzdWx0KTtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1RvIENvbnRyYWN0IEFkZHJlc3MgJyArIGNvbnRyYWN0QWRkcmVzcyk7XG5cdFx0XHR9O1xuXHRcdH0pXG4gICAgLnRoZW4ocmVmcmVzaFRva2VuRGV0YWlscylcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRBbGxvd2FuY2VGb3JBbGxBZGRyZXNzZXModG9rZW5BZGRyZXNzKSB7XG5cdFx0Y29uc29sZS5sb2coJ0luc2lkZSBtZXRob2Qgc2V0QWxsb3dhbmNlJyk7XG5cdFx0Y29udHJhY3QubWV0aG9kcy5zZXRfYWxsb3dhbmNlcyh0b2tlbkFkZHJlc3MpLnNlbmQoe2Zyb206IHVzZXJBY2NvdW50fSlcblx0XHQudGhlbihmdW5jdGlvbiB4KCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FmdGVyIHNldHRpbmcgYWxsb3dhbmNlJyk7XG5cdFx0fSlcbiAgICAudGhlbihyZWZyZXNoVG9rZW5EZXRhaWxzKVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0fTtcblxuICBmdW5jdGlvbiByZWZyZXNoVG9rZW5EZXRhaWxzKCkge1xuICAgIGRpc3BsYXlfd2V0aF9iYWxhbmNlKCk7XG4gICAgZ2V0VG9rZW5BZGRyZXNzZXMoKTtcbiAgICBnZXRUb2tlblF1YW50aXRpZXMoKTtcbiAgICBnZXRUb2tlbldlaWdodHMoKTtcbiAgICBnZXRSZWJhbGFuY2VJbkJsb2NrcygpO1xuICAgIGdldExhc3RSZWJhbGFuY2VkKCk7XG5cdFx0Z2V0Q29udHJhY3RBcHByb3ZhbFdFVEgoKTtcblx0XHRnZXRPd25lckFwcHJvdmFsQ29udHJhY3RXRVRIKCk7XG5cdFx0Z2V0T3duZXJBcHByb3ZhbENvbnRyYWN0WlJYKCk7XG5cdFx0Z2V0Q3VycmVudEJsb2NrSGVpZ2h0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5X3dldGhfYmFsYW5jZSgpe1xuXHRcdFx0d2luZG93LldFVEhfVG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YoY29udHJhY3RBZGRyZXNzKS5jYWxsKCkudGhlbihmdW5jdGlvbiAod2V0aF9iYWxhbmNlKSB7XG5cdFx0XHQkKCcjZGlzcGxheScpLnRleHQod2V0aF9iYWxhbmNlKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRva2VuQWRkcmVzc2VzKCkge1xuXHRcdGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5fYWRkcmVzc2VzKCkuY2FsbCgpLnRoZW4oZnVuY3Rpb24gKGFkZHJlc3Nlcykge1xuXHRcdFx0JCgnI3Rva2VuX2FkZHJlc3NlcycpLnRleHQoYWRkcmVzc2VzKTtcblx0XHR9KVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0fTtcblxuXHRmdW5jdGlvbiBnZXRDdXJyZW50QmxvY2tIZWlnaHQoKSB7XG5cdFx0d2ViMy5ldGguZ2V0QmxvY2tOdW1iZXIoKS50aGVuKGZ1bmN0aW9uKGJsb2NrSGVpZ2h0KSB7IFxuXHRcdFx0JCgnI2N1cnJlbnRfYmxvY2tfaGVpZ2h0JykudGV4dChibG9ja0hlaWdodCk7XG5cdFx0XHR3aW5kb3cuY3VycmVudEJsb2NrSGVpZ2h0ID0gYmxvY2tIZWlnaHQ7XG5cdFx0fSk7XG5cdH07XG5cbiAgZnVuY3Rpb24gZ2V0VG9rZW5RdWFudGl0aWVzKCkge1xuICAgIGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5fcXVhbnRpdGllcygpLmNhbGwoKS50aGVuKGZ1bmN0aW9uIChxdWFudGl0aWVzKSB7XG5cdFx0XHQkKCcjcXVhbnRpdGllcycpLnRleHQocXVhbnRpdGllcyk7XG5cdFx0fSlcblx0XHQuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VG9rZW5XZWlnaHRzKCkge1xuICAgIGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5fd2VpZ2h0KCkuY2FsbCgpLnRoZW4oZnVuY3Rpb24gKHdlaWdodHMpIHtcblx0XHRcdCQoJyN3ZWlnaHRzJykudGV4dCh3ZWlnaHRzKTtcblx0XHR9KVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRMYXN0UmViYWxhbmNlZCgpIHtcbiAgICBjb250cmFjdC5tZXRob2RzLmdldF9sYXN0X3JlYmFsYW5jZWQoKS5jYWxsKCkudGhlbihmdW5jdGlvbiAobGFzdF9yZWJhbGFuY2VkKSB7XG5cdFx0XHQkKCcjbGFzdF9yZWJhbGFuY2VkJykudGV4dChsYXN0X3JlYmFsYW5jZWQpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFJlYmFsYW5jZUluQmxvY2tzKCkge1xuICAgIGNvbnRyYWN0Lm1ldGhvZHMucmViYWxhbmNlX2luX2Jsb2NrcygpLmNhbGwoKS50aGVuKGZ1bmN0aW9uIChyZWJhbGFuY2VfaW5fYmxvY2tzKSB7XG5cdFx0XHQkKCcjcmViYWxhbmNlX2luX2Jsb2NrcycpLnRleHQocmViYWxhbmNlX2luX2Jsb2Nrcyk7XG5cdFx0fSlcblx0XHQuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH07XG5cblx0ZnVuY3Rpb24gZ2V0Q29udHJhY3RBcHByb3ZhbFdFVEgoKSB7XG5cdFx0d2luZG93LldFVEhfVG9rZW4ubWV0aG9kcy5hbGxvd2FuY2UodXNlckFjY291bnQsIGNvbnRyYWN0QWRkcmVzcykuY2FsbCgpLnRoZW4oZnVuY3Rpb24gKGFsbG93YW5jZSkge1xuXHRcdFx0JCgnI2NvbnRyYWN0X2FwcHJvdmFsX1dFVEgnKS50ZXh0KFwiV0VUSDpjb250cmFjdCBvbiBvd25lciA9IFwiICsgYWxsb3dhbmNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldE93bmVyQXBwcm92YWxDb250cmFjdFdFVEgoKSB7XG4gICAgd2luZG93LldFVEhfVG9rZW4ubWV0aG9kcy5hbGxvd2FuY2UoY29udHJhY3RBZGRyZXNzLCB1c2VyQWNjb3VudCkuY2FsbCgpLnRoZW4oZnVuY3Rpb24gKGFsbG93YW5jZSkge1xuXHRcdFx0JCgnI293bmVyX2FwcHJvdmFsX2NvbnRyYWN0X1dFVEgnKS50ZXh0KFwiV0VUSDpvd25lciBvbiBjb250cmFjdCA9IFwiICsgYWxsb3dhbmNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfTtcblxuXHRmdW5jdGlvbiBnZXRPd25lckFwcHJvdmFsQ29udHJhY3RaUlgoKSB7XG4gICAgd2luZG93LlpSWF9Ub2tlbi5tZXRob2RzLmFsbG93YW5jZShjb250cmFjdEFkZHJlc3MsIHVzZXJBY2NvdW50KS5jYWxsKCkudGhlbihmdW5jdGlvbiAoYWxsb3dhbmNlKSB7XG5cdFx0XHQkKCcjb3duZXJfYXBwcm92YWxfY29udHJhY3RfWlJYJykudGV4dChcIlpSWDpvd25lciBvbiBjb250cmFjdCA9IFwiICsgYWxsb3dhbmNlKTtcblx0XHR9KVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfTtcblxuXHRmdW5jdGlvbiBnZXRSZWJhbGFuY2VJbkJsb2NrcygpIHtcbiAgICBjb250cmFjdC5tZXRob2RzLnJlYmFsYW5jZV9pbl9ibG9ja3MoKS5jYWxsKCkudGhlbihmdW5jdGlvbiAocmViYWxhbmNlX2luX2Jsb2Nrcykge1xuXHRcdFx0JCgnI3JlYmFsYW5jZV9pbl9ibG9ja3MnKS50ZXh0KHJlYmFsYW5jZV9pbl9ibG9ja3MpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9O1xuXG5cdGZ1bmN0aW9uIHdpdGhkcmF3QWxsVG9rZW5zKCkge1xuXHRcdGNvbnRyYWN0Lm1ldGhvZHMud2l0aGRyYXcoKS5zZW5kKHtmcm9tOiB1c2VyQWNjb3VudH0pLnRoZW4oZnVuY3Rpb24gKHN1Y2Nlc3MpIHtcblx0XHRcdGlmIChzdWNjZXNzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgd2l0aGRyYXduIHRva2VucycpO1xuXHRcdFx0fTtcblx0XHR9KVxuICAgIC50aGVuKHJlZnJlc2hUb2tlbkRldGFpbHMpXG5cdFx0LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIG1ha2VFeGNoYW5nZVRyYWRlKCkge1xuXHRcdGNvbnN0IG1ha2VyID0gXCIweDAzMmRiZTEyYjhjNDU1MGI2YTkwNDkwZTZmOGI3OTAxM2QzODMzZjdcIjsgLy8gbXkgbWV0YW1hc2tcblx0XHRjb25zdCB0YWtlciA9IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCI7XG5cdFx0Y29uc3QgbWFrZXJUb2tlbiA9IFwiMHg2ZmY2YzBmZjFkNjhiOTY0OTAxZjk4NmQ0YzlmYTNhYzY4MzQ2NTcwXCI7IC8vIFpSWCBcblx0XHRjb25zdCB0YWtlclRva2VuID0gXCIweGQwYTFlMzU5ODExMzIyZDk3OTkxZTAzZjg2M2EwYzMwYzJjZjAyOWNcIjsgLy8gV0VUSFxuXHRcdGNvbnN0IGZlZVJlY2lwaWVudCA9IFwiMHhhMjU4YjM5OTU0Y2VmNWNiMTQyZmQ1NjdhNDZjZGRiMzFhNjcwMTI0XCI7XG5cdFx0Y29uc3QgbWFrZXJUb2tlbkFtb3VudCA9IHdlYjMudXRpbHMudG9CTihcIjEwMDAwMDAwMDAwMDAwMDAwMDBcIik7XG5cdFx0Y29uc3QgdGFrZXJUb2tlbkFtb3VudCA9IHdlYjMudXRpbHMudG9CTihcIjUwMDAwMDAwMDAwMDAwMDAwMDAwMFwiKTtcblx0XHRjb25zdCBtYWtlckZlZSA9IDA7XG5cdFx0Y29uc3QgdGFrZXJGZWUgPSAwO1xuXHRcdGNvbnN0IGV4cGlyYXRpb25UaW1lc3RhbXBJblNlYyA9IHdlYjMudXRpbHMudG9CTihcIjE1MzA1Nzk2MzBcIik7XG5cblx0XHRjb25zdCBzYWx0ID0gXCI3MTkwODI0NzkwNjg3Mjc1NDMxMTgzODE0NTM0MjcyMDAwMjk3NzY5NjA0ODU2MjYzMDgyNTcwNDczOTM4MDgwMzU5NzgyMzg2NTQ3M1wiO1xuXHRcdGNvbnN0IHYgPSB3ZWIzLnV0aWxzLnRvQk4oXCIyN1wiKTtcblx0XHRjb25zdCByID0gXCIweGYyMGQyMjAwNWNhY2MxYWQ1YTUxMGMwOTBmYjkzN2NkYjc0Mzg3NTBiMzNjNTUxMjhlMDE5ZWM0MzRhMDYxZTRcIjtcblx0XHRjb25zdCBzID0gXCIweDM1ZDQ3NzI3OTlkMjcyZTljOWFkZjA0OTA2YTg2OTA4NzBlMzdkN2RkNjU3NzI2NjUyZTVlMWI3YmIxNzExN2VcIjtcblx0XHRjb25zdCBmaWxsVGFrZXJUb2tlbkFtb3VudCA9IHdlYjMudXRpbHMudG9CTihcIjEwMDAwMDAwMDAwMDAwMFwiKTtcblx0XHRjb25zdCBhZGRyZXNzZXMgPSBbbWFrZXIsIHRha2VyLCBtYWtlclRva2VuLCB0YWtlclRva2VuLCBmZWVSZWNpcGllbnRdO1xuXHRcdGNvbnN0IHZhbHVlcyA9IFttYWtlclRva2VuQW1vdW50LCB0YWtlclRva2VuQW1vdW50LCBtYWtlckZlZSwgdGFrZXJGZWUsIGV4cGlyYXRpb25UaW1lc3RhbXBJblNlYywgc2FsdCwgZmlsbFRha2VyVG9rZW5BbW91bnRdO1xuXHRcdHdpbmRvdy5FWENIQU5HRS5tZXRob2RzLmdldE9yZGVySGFzaChbbWFrZXIsIHRha2VyLCBtYWtlclRva2VuLCB0YWtlclRva2VuLCBmZWVSZWNpcGllbnRdLCBbbWFrZXJUb2tlbkFtb3VudCwgdGFrZXJUb2tlbkFtb3VudCwgbWFrZXJGZWUsIHRha2VyRmVlLCBleHBpcmF0aW9uVGltZXN0YW1wSW5TZWMsIHNhbHRdKS5jYWxsKCkudGhlbihmdW5jdGlvbiAob3JkZXJIYXNoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnT3JkZXJIYXNoID0gJyArIG9yZGVySGFzaCk7XG5cdFx0XHR3aW5kb3cuRVhDSEFOR0UubWV0aG9kcy5pc1ZhbGlkU2lnbmF0dXJlKG1ha2VyLCBvcmRlckhhc2gsIHYsIHIsIHMpLmNhbGwoKS50aGVuKGZ1bmN0aW9uIChzdWNjZXNzKSB7XG5cdFx0XHRcdGlmIChzdWNjZXNzKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NvbnRyYWN0IGlzIHZhbGlkPycgKyBzdWNjZXNzKTtcblx0XHRcdFx0XHRjb250cmFjdC5tZXRob2RzLm1ha2VfZXhjaGFuZ2VfdHJhZGUoYWRkcmVzc2VzLCB2YWx1ZXMsIHYsIHIsIHMpLnNlbmQoe2Zyb206IGRpeWluZGV4QWNjb3VudH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NhbGxlZCBtYWtlRXhjaGFuZ2VUcmFkZScpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0lkZWFsbHkgZm9sbG93IHRoZSBldmVudCBsb2cgaW4gRXhjaGFuZ2UgY29udHJhY3QgdG8ga25vdyBvZiB0cmFkZScpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0V4Y2hhbmdlIHRyYWRlIGNvbXBsZXRlLi4uIHdvaG9vJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgJ1NlcnZlciBjb250cmFjdCBzZWVtcyB0byBiZSBpbnZhbGlkJztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0XHQudGhlbihyZWZyZXNoVG9rZW5EZXRhaWxzKVxuXHRcdC5jYXRjaChjb25zb2xlLmVycm9yKTtcblx0fTtcblxuXHQkKFwiI3N1Ym1pdFwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnVHJhZGluZyBjb250cmFjdCB0b2tlbnMnKTtcblx0XHRtYWtlRXhjaGFuZ2VUcmFkZSgpO1xuXHRcdGNvbnNvbGUubG9nKCdBZnRlciBleGNoYW5nZSB0cmFkZScpO1xuXHR9KTtcblxuXHQkKFwiI2FsbG93X1pSWFwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ1NldHRpbmcgZm9yIFpSWCB0b2tlbicpO1xuXHRcdHNldEFsbG93YW5jZUZvckFsbEFkZHJlc3Nlcyhjb25zdGFudHMuenJ4X2FkZHJlc3MpO1xuXHRcdGNvbnNvbGUubG9nKCdBZnRlciBzZXR0aW5nIGZvciBaUlggdG9rZW4nKTtcblx0fSk7XG5cblx0JChcIiNhbGxvd19XRVRIXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnU2V0dGluZyBmb3IgV0VUSCB0b2tlbicpO1xuXHRcdHNldEFsbG93YW5jZUZvckFsbEFkZHJlc3Nlcyhjb25zdGFudHMud2V0aF9hZGRyZXNzKTtcblx0XHRjb25zb2xlLmxvZygnQWZ0ZXIgc2V0dGluZyBmb3IgV0VUSCB0b2tlbicpO1xuXHR9KTtcblxuXHQkKFwiI2FwcHJvdmVfdHJhbnNmZXJcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdCZWZvcmUgYXBwcm92ZSBFVEgnKTtcblx0XHRhbGxvd1dyYXBwZWRFdGhlckZvclNtYXJ0Q29udHJhY3QoKTtcblx0XHRjb25zb2xlLmxvZygnQWZ0ZXIgYXBwcm92ZSBFVEgnKTtcblx0fSk7XG5cblx0JChcIiN0cmFuc2Zlcl93ZXRoX3RvX2NvbnRyYWN0XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdCZWZvcmUgVHJhbnNmZXJyaW5nIFdFVEggdG8gY29udHJhY3QnKTtcblx0XHR0cmFuc2ZlcldFVEhUb0NvbnRyYWN0KCcwLjEnKTtcblx0XHRjb25zb2xlLmxvZygnQWZ0ZXIgVHJhbnNmZXJyaW5nIFdFVEggdG8gY29udHJhY3QnKTtcblx0fSk7XG5cblx0JChcIiN3aXRoZHJhd1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cdFx0d2l0aGRyYXdBbGxUb2tlbnMoKTtcblx0fSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9