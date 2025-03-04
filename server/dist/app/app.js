"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.static(path_1.default.join(process.cwd(), '/public')));
app.use(express_1.default.json({ limit: '100mb' }));
app.use(express_1.default.raw({ limit: '100mb' }));
app.use(express_1.default.urlencoded({ limit: '100mb', extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('<h1>Server is Running</h1>');
});
const server = (0, http_1.createServer)(app);
exports.default = server;
