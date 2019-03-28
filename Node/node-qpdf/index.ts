import * as qpdf from "node-qpdf";

qpdf.command = "./qpdf/bin/qpdf.exe";

var options = {
  password: "666",
  outputFile: "./try666.pdf"
};

qpdf.encrypt("./try.pdf", options);
