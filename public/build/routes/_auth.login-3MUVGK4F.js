import {
  require_node,
  require_sessions
} from "/build/_shared/chunk-C7ND6TEC.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  useFetcher
} from "/build/_shared/chunk-SR5GKUBC.js";
import {
  createHotContext
} from "/build/_shared/chunk-KV6WKKUP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.login.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_sessions = __toESM(require_sessions());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_auth.login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_auth.login.tsx"
  );
  import.meta.hot.lastModified = "1688023398721.1465";
}
function Login() {
  var _a;
  _s();
  const magikLinkFetcher = useFetcher();
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [isSuccess, setIsSuccess] = (0, import_react2.useState)(false);
  const [isError, setIsError] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    var _a2, _b;
    setIsLoading(magikLinkFetcher.state === "loading" || magikLinkFetcher.state === "submitting");
    setIsSuccess(magikLinkFetcher.state === "idle" && ((_a2 = magikLinkFetcher.data) == null ? void 0 : _a2.hasOwnProperty("error")) === false);
    setIsError(magikLinkFetcher.state === "idle" && ((_b = magikLinkFetcher.data) == null ? void 0 : _b.hasOwnProperty("error")) === true);
  }, [magikLinkFetcher]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "w-full md:w-11/12 mx-auto flex h-[calc(100vh_-_80px)] justify-center items-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "text-center w-full md:w-1/2",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "text-3xl font-bold uppercase",
        children: "Get access"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(magikLinkFetcher.Form, {
        method: "post",
        action: "/login/magiklink",
        className: "mt-8 w-full",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
          type: "email",
          name: "email",
          id: "email",
          placeholder: "Enter your email address",
          className: "text-black border border-stone-400 rounded-xl outline-0 w-full px-4 py-2 mt-1 bg-transparent focus:border-stone-500"
        }), isError === true && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "text-sm text-center text-red-800 w-full",
          children: (_a = magikLinkFetcher.data) == null ? void 0 : _a.error
        }), isLoading === false && isSuccess === false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          className: "border border-neutral-300 text-white bg-emerald-500 uppercase px-4 py-2 rounded-lg hover:bg-emerald-500/95 mt-4",
          children: "Receive my access link"
        }), isLoading === true && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "border border-neutral-700 bg-emerald-500 uppercase px-4 py-2 rounded-lg mt-4 flex justify-center items-center cursor-not-allowed",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
            className: "animate-spin mr-3 h-5 w-5 text-white fill-none",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4"
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })]
          }), "Sending my access link..."]
        }), isSuccess === true && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "border border-stone-700 bg-emerald-500 uppercase px-4 py-2 rounded-lg mt-4 flex justify-center items-center",
          children: "Access link successfully sent!"
        })]
      })]
    })
  });
}
_s(Login, "+CaPPoeiBStDXAkHzlVWFyCfbnY=", false, function() {
  return [useFetcher];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/_auth.login-3MUVGK4F.js.map
