(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{112:function(e,t,a){e.exports={SearchMovie:"MoviesPage_SearchMovie__2Cv8U",SearchForm:"MoviesPage_SearchForm__2rMMm",SearchFormButton:"MoviesPage_SearchFormButton__3Zg-y",SearchFormButtonLabel:"MoviesPage_SearchFormButtonLabel__3c1LY",SearchFormInput:"MoviesPage_SearchFormInput__axKXw"}},121:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var r=a(115),n=a(57),c=a(0),o=a(3),s=a(97),u=a.n(s),i=a(112),p=a.n(i),l=a(116),h=a(55),v=a(14),f=a.n(v),b=a(1),m=Object(c.lazy)((function(){return a.e(10).then(a.bind(null,118))})),j=Object(c.lazy)((function(){return a.e(9).then(a.bind(null,77))}));var g=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)([]),v=Object(n.a)(i,2),g=v[0],d=v[1],O=Object(o.f)(),x=Object(o.g)(),S=Object(o.i)().path,_=function(e){var t=e.target.value;s(t)},y=function(e){if(e.preventDefault(),""===a.trim())return l.a.info("Input name movie!");O.push(Object(r.a)(Object(r.a)({},x),{},{search:"?query=".concat(a)})),s("")};return Object(c.useEffect)((function(){var e=u.a.parse(x.search).query;e||d([]),e&&(h.a.fetchSearchMovies(e).then((function(e){return d(e)})),s(""))}),[x.search]),Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(f.a,{}),children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"".concat(S,"/:movieId"),component:j}),Object(b.jsx)(o.a,{exact:!0,path:"/movies",render:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:p.a.SearchMovie,children:Object(b.jsxs)("form",{className:p.a.SearchForm,onSubmit:y,children:[Object(b.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:"Search"}),Object(b.jsx)("input",{value:a,onChange:_,className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})}),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m,{movies:g})})]})}})]})})}},55:function(e,t,a){"use strict";var r=a(63),n=a.n(r),c=a(64),o=a(65),s=a.n(o),u="ea6ff4a2a64bb12db1e0ce6f81b745f4";s.a.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/trending/movie/day?api_key=".concat(u));case 3:return t=e.sent,a=t.data.results,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 3:return a=e.sent,r=a.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return a=e.sent,e.abrupt("return",a.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return a=e.sent,r=a.data,console.log(r.results),e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f={fetchSearchMovies:p,fetchTrendsMovies:i,fetchDetailsMovies:l,fetchCastMovies:h,fetchReviewsMovies:v};t.a=f}}]);
//# sourceMappingURL=MoviesPage.45dccb19.chunk.js.map