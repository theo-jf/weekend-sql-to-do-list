CREATE TABLE "tasks" (
    "id" SERIAL PRIMARY KEY,
    "rank" SERIAL,
    "name" VARCHAR (100) NOT NULL,
    "complete" BOOLEAN DEFAULT FALSE
);