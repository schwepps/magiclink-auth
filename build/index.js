var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AL4VFAFU.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.login.magiklink.tsx
var auth_login_magiklink_exports = {};
__export(auth_login_magiklink_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");

// utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// utils/magikLink.server.ts
var import_node3 = require("@remix-run/node"), import_crypto = require("crypto");
var import_bcryptjs = __toESM(require("bcryptjs"));

// utils/emails.servers.ts
var import_nodejs = __toESM(require("@emailjs/nodejs")), import_node2 = require("@remix-run/node");
async function sendEmail({ email, accessLink }) {
  if (process.env.MAILJS_SERVICE_ID === void 0 || process.env.MAILJS_TEMPLATE_ID === void 0 || process.env.MAILJS_PUBLIC_KEY === void 0 || process.env.MAILJS_PRIVATE_KEY === void 0)
    return;
  let templateParams = {
    to_email: email,
    access_link: accessLink
  };
  try {
    return await import_nodejs.default.send(
      process.env.MAILJS_SERVICE_ID,
      process.env.MAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.MAILJS_PUBLIC_KEY,
        privateKey: process.env.MAILJS_PRIVATE_KEY
        // optional, highly recommended for security reasons
      }
    ), (0, import_node2.json)({ success: "Email sent" }, { status: 200 });
  } catch (err) {
    if (err instanceof import_nodejs.EmailJSResponseStatus)
      return (0, import_node2.json)({ error: err.text }, { status: err.status });
  }
}

// utils/magikLink.server.ts
async function sendMagikLink({ request, email }) {
  let accessKey = (0, import_crypto.randomBytes)(32).toString("hex"), hashedEmail = import_bcryptjs.default.hashSync(email, process.env.HASH_SECRET);
  try {
    await db.magikLink.create({
      data: {
        hash: accessKey,
        email: hashedEmail
      }
    });
  } catch {
    return (0, import_node3.json)({ error: "Error saving the link in the database. Please try again." }, { status: 500 });
  }
  let magikLink = new URL(request.headers.get("origin") || "");
  magikLink.pathname = "/login/verify", magikLink.searchParams.set("hash", accessKey);
  let result = await sendEmail({ email, accessLink: magikLink.href });
  return (result == null ? void 0 : result.status) !== 200 ? (0, import_node3.json)({ error: "Error sending the email. Please try again." }, { status: 500 }) : (0, import_node3.json)({ success: "Email sent" }, { status: 200 });
}

// app/routes/_auth.login.magiklink.tsx
var import_bcryptjs2 = __toESM(require("bcryptjs"));
function validateEmail(email) {
  if (email === void 0)
    return !1;
  let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!email.match(mailformat);
}
async function action({ request }) {
  let email = (await request.formData()).get("email");
  if (!email || !validateEmail(email.toString()))
    return (0, import_node4.json)({ error: "Please enter a valid email address" }, { status: 400 });
  if (await db.authorizedDomain.count({
    where: {
      id: email.toString().split("@")[1]
    }
  }) === 0)
    return (0, import_node4.json)({ error: "This email address is not authorized to access this application" }, { status: 400 });
  let hashedEmail = import_bcryptjs2.default.hashSync(email.toString(), process.env.HASH_SECRET), result = await db.magikLink.findFirst({
    where: {
      email: hashedEmail,
      isVerified: !1
    }
  });
  return result && await db.magikLink.update({
    where: {
      id: result.id
    },
    data: {
      isVerified: !0
    }
  }), await sendMagikLink({ request, email: email.toString() });
}

// app/routes/_auth.login.verify.tsx
var auth_login_verify_exports = {};
__export(auth_login_verify_exports, {
  loader: () => loader
});
var import_node7 = require("@remix-run/node");

// utils/sessions.server.ts
var import_node6 = require("@remix-run/node");

// utils/dbsessions.server.ts
var import_node5 = require("@remix-run/node");
function createDatabaseSessionStorage({ cookie }) {
  return (0, import_node5.createSessionStorage)({
    cookie,
    async createData(data, expires) {
      return (await db.session.create({
        data: { data: JSON.stringify({ data }) }
      })).id;
    },
    async readData(id) {
      return await db.session.findUnique({
        where: { id }
      });
    },
    async updateData(id, data, expires) {
      await db.session.update({
        where: { id },
        data: { data: JSON.stringify({ data }) }
      });
    },
    async deleteData(id) {
      await db.session.delete({ where: { id } });
    }
  });
}

// utils/sessions.server.ts
var sessionCookie = (0, import_node6.createCookie)("__session", {
  httpOnly: !0,
  path: "/",
  secrets: process.env.SESSIONS_SECRETS !== void 0 ? [process.env.SESSIONS_SECRETS] : [""],
  sameSite: "lax",
  secure: !0
}), { getSession, commitSession, destroySession } = createDatabaseSessionStorage({ cookie: sessionCookie });

// app/routes/_auth.login.verify.tsx
async function loader({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId"))
    return (0, import_node7.redirect)("/");
  let magikLink = await db.magikLink.findFirst({
    where: {
      hash: new URL(request.url).searchParams.get("hash") || "",
      isVerified: !1
    }
  });
  if (!magikLink)
    return (0, import_node7.redirect)("/login");
  await db.magikLink.update({
    where: {
      id: magikLink.id
    },
    data: {
      isVerified: !0
    }
  }), session.set("userId", magikLink.hash);
  let expires = /* @__PURE__ */ new Date(), MAX_AGE = process.env.SESSION_EXPIRATION_IN_SECONDS !== void 0 ? parseInt(process.env.SESSION_EXPIRATION_IN_SECONDS) : 10;
  return expires.setSeconds(expires.getSeconds() + MAX_AGE), (0, import_node7.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session, { expires })
    }
  });
}

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  default: () => Login,
  loader: () => loader2
});
var import_node8 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_react4 = require("react");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  return (await getSession(request.headers.get("Cookie"))).has("userId") ? (0, import_node8.redirect)("/") : (0, import_node8.json)({});
}
function Login() {
  var _a;
  let magikLinkFetcher = (0, import_react3.useFetcher)(), [isLoading, setIsLoading] = (0, import_react4.useState)(!1), [isSuccess, setIsSuccess] = (0, import_react4.useState)(!1), [isError, setIsError] = (0, import_react4.useState)(!1);
  return (0, import_react4.useEffect)(() => {
    var _a2, _b;
    setIsLoading(magikLinkFetcher.state === "loading" || magikLinkFetcher.state === "submitting"), setIsSuccess(magikLinkFetcher.state === "idle" && ((_a2 = magikLinkFetcher.data) == null ? void 0 : _a2.hasOwnProperty("error")) === !1), setIsError(magikLinkFetcher.state === "idle" && ((_b = magikLinkFetcher.data) == null ? void 0 : _b.hasOwnProperty("error")) === !0);
  }, [magikLinkFetcher]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full md:w-11/12 mx-auto flex h-[calc(100vh_-_80px)] justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center w-full md:w-1/2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold uppercase", children: "Get access" }, void 0, !1, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(magikLinkFetcher.Form, { method: "post", action: "/login/magiklink", className: "mt-8 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "email", name: "email", id: "email", placeholder: "Enter your email address", className: "text-black border border-stone-400 rounded-xl outline-0 w-full px-4 py-2 mt-1 bg-transparent focus:border-stone-500" }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      isError === !0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-center text-red-800 w-full", children: (_a = magikLinkFetcher.data) == null ? void 0 : _a.error }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 34,
        columnNumber: 43
      }, this),
      isLoading === !1 && isSuccess === !1 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "border border-neutral-300 text-white bg-emerald-500 uppercase px-4 py-2 rounded-lg hover:bg-emerald-500/95 mt-4", children: "Receive my access link" }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this),
      isLoading === !0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border border-neutral-700 bg-emerald-500 uppercase px-4 py-2 rounded-lg mt-4 flex justify-center items-center cursor-not-allowed", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "animate-spin mr-3 h-5 w-5 text-white fill-none", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, !1, {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 41,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, !1, {
            fileName: "app/routes/_auth.login.tsx",
            lineNumber: 42,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.login.tsx",
          lineNumber: 40,
          columnNumber: 29
        }, this),
        "Sending my access link..."
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 39,
        columnNumber: 25
      }, this),
      isSuccess === !0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border border-stone-700 bg-emerald-500 uppercase px-4 py-2 rounded-lg mt-4 flex justify-center items-center", children: "Access link successfully sent!" }, void 0, !1, {
        fileName: "app/routes/_auth.login.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.login.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

// app/routes/restricted.tsx
var restricted_exports = {};
__export(restricted_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
var import_node9 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Restricted page" },
  { name: "description", content: "The restricted page of my auth app" }
];
async function loader3({ request }) {
  var _a;
  let data = await (await getSession(request.headers.get("Cookie"))).get("data");
  if (data === void 0)
    return (0, import_node9.redirect)("/login");
  if (typeof data == "string")
    try {
      if (!((_a = JSON.parse(data).data) != null && _a.hasOwnProperty("userId")))
        return (0, import_node9.redirect)("/login");
    } catch {
      return (0, import_node9.redirect)("/login");
    }
  return (0, import_node9.json)({});
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full max-w-5xl p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "font-bold text-4xl", children: "I'm a restricted access page" }, void 0, !1, {
      fileName: "app/routes/restricted.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.Link, { className: "mt-4 underline hover:no-underline", to: "/", children: "Go back to home" }, void 0, !1, {
      fileName: "app/routes/restricted.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/restricted.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  meta: () => meta2
});
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "My auth app" },
  { name: "description", content: "Welcome to my auth app!" }
];
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full max-w-5xl p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "font-bold text-4xl", children: "Welcome to my auth app" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { className: "mt-4 underline hover:no-underline", to: "/restricted", children: "Go to private functionality" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JHR3LAAX.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-SR5GKUBC.js", "/build/_shared/chunk-KV6WKKUP.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-J4QJPOX7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-3MUVGK4F.js", imports: ["/build/_shared/chunk-C7ND6TEC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login.magiklink": { id: "routes/_auth.login.magiklink", parentId: "routes/_auth.login", path: "magiklink", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login.magiklink-23YWPZBU.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login.verify": { id: "routes/_auth.login.verify", parentId: "routes/_auth.login", path: "verify", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login.verify-PSFN474P.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-NBWJ3JTB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/restricted": { id: "routes/restricted", parentId: "root", path: "restricted", index: void 0, caseSensitive: void 0, module: "/build/routes/restricted-YN3VLMHP.js", imports: ["/build/_shared/chunk-C7ND6TEC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "3fc9a4d5", hmr: { runtime: "/build/_shared/chunk-KV6WKKUP.js", timestamp: 1688025968257 }, url: "/build/manifest-3FC9A4D5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, dev = { port: 3001 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_auth.login.magiklink": {
    id: "routes/_auth.login.magiklink",
    parentId: "routes/_auth.login",
    path: "magiklink",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_magiklink_exports
  },
  "routes/_auth.login.verify": {
    id: "routes/_auth.login.verify",
    parentId: "routes/_auth.login",
    path: "verify",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_verify_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/restricted": {
    id: "routes/restricted",
    parentId: "root",
    path: "restricted",
    index: void 0,
    caseSensitive: void 0,
    module: restricted_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
