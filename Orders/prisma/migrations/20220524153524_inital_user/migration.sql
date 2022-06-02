
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password"  SERIAL NOT NULL,
    "age"SERIAL NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

Create Table "Order"(
    "id" SERIAL NOT NULL,
    "createdAt" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "userId" SERIAL NOT NULL,
)
ALTER TABLE "Order" ADD CONSTRAINT "Post_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;