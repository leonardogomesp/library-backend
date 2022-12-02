require("dotenv").config({ path: "../.env" });

import express from "express";
import { connect } from "./db-connection";
import cors from "cors";
import { defineRoutes } from "./routes";
import { requestLogger, requestErrorLogger, logger } from "./logger";

const start = async () => {
  try {
    logger.info("Estabelecendo conexão com o banco de dados...");
    await connect();
    logger.info("Conexão com o banco de dados estabelecida!");

    logger.info("Iniciando o servidor da aplicação...");

    const app = express();
    const port = process.env.PORT || 9000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ origin: "*" }));
    app.use(requestLogger());

    defineRoutes(app);

    app.use(requestErrorLogger());

    app.listen(port, () => {
      logger.info(`Servidor está rodando em: http://localhost:${port}`);
    });
  } catch (error) {
    throw new Error(`Falha ao iniciar o servidor da aplicação: ${error.message}`);
  }
};

start().catch((error) => {
  logger.error(error.message, error.stack);
  process.exit(1);
});
