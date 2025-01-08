-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(75) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "account" INTEGER NOT NULL,
    "aget" INTEGER NOT NULL,
    "career" VARCHAR(50) NOT NULL,
    "enrollment_date" TIMESTAMP NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
