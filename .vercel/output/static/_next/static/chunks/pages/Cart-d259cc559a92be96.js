(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{5696:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Cart",function(){return t(4538)}])},4538:function(e,n,t){"use strict";t.r(n);var s=t(5893);t(7294);var i=t(4624);n.default=()=>{let{cart:e,incrementQuantity:n,decrementQuantity:t,removeFromCart:r}=(0,i.j)(),o=e.reduce((e,n)=>e+n.price*n.quantity,0),c=n=>{t(n);let s=e.find(e=>e.id===n.toString());s&&0==s.quantity&&r(n)},l=async()=>{await fetch("http://localhost:3000/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({products:e})}).then(e=>e.json()).then(e=>{console.log(e),e.url&&(window.location.href=e.url)})};return(0,s.jsx)("div",{className:"flex justify-center items-center min-h-screen",children:(0,s.jsxs)("div",{className:"border rounded-lg p-4 shadow-md w-full max-w-md",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold mb-4 text-center",children:"Your Cart"}),0===e.length?(0,s.jsx)("p",{className:"text-center",children:"Your cart is empty"}):(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsxs)("li",{className:"flex justify-between items-center mb-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-semibold",children:e.name}),(0,s.jsxs)("p",{className:"text-gray-400",children:["$",e.price.toFixed(2)," x ",e.quantity]})]}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)("button",{onClick:()=>c(Number(e.id)),className:"px-2 py-1 bg-red-500 text-white hover:bg-red-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",children:"-"}),(0,s.jsx)("button",{onClick:()=>n(Number(e.id)),className:"px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 w-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"+"})]})]},e.id))}),e.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsxs)("p",{className:"text-lg font-semibold",children:["Total Amount: $",o.toFixed(2)]})}),(0,s.jsx)("button",{onClick:l,className:"mt-4 px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full",children:"Buy Now"})]})]})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5696)}),_N_E=e.O()}]);