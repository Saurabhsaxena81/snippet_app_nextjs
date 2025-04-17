/*
  Warnings:

  - You are about to drop the `Snippet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Snippet";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "snippet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "code" TEXT NOT NULL
);
