/*
  Warnings:

  - You are about to drop the column `aget` on the `student` table. All the data in the column will be lost.
  - Added the required column `age` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "aget",
ADD COLUMN     "age" INTEGER NOT NULL;
