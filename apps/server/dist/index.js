"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const pg_1 = __importDefault(require("pg"));
const pool = new pg_1.default.Pool();
const app = (0, express_1.default)();
const port = process.env.PORT || 3333;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.raw({ type: "application/vnd.custom-type" }));
app.use(body_parser_1.default.text({ type: "text/html" }));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ Hello: "World" });
}));
app.get("/jokes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield pool.query("SELECT * FROM jokes");
    res.json(rows);
}));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
